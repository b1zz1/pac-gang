from flask import Flask, render_template, redirect, url_for, request, flash
from werkzeug.security import generate_password_hash, check_password_hash
from src.api.db import get_db_connection, init_db

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'

# Inicialize o banco de dados SQLite
init_db()


@app.route('/')
def index():
    conn = get_db_connection()
    users = conn.execute('SELECT * FROM users').fetchall()
    conn.close()
    return render_template('index.html', users=users)


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

        conn = get_db_connection()
        try:
            conn.execute('INSERT INTO users (username, password) VALUES (?, ?)',
                         (username, hashed_password))
            conn.commit()
            flash(f'User {username} registered successfully!')  # Exibe o nome do usuário registrado
        except Exception as e:
            flash('Failed to register user. Error: {}'.format(str(e)))
        finally:
            conn.close()
        return redirect(url_for('index'))
    return render_template('register.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        conn = get_db_connection()
        user = conn.execute('SELECT * FROM users WHERE username = ?', (username,)).fetchone()
        conn.close()

        if user and check_password_hash(user['password'], password):
            flash('Logged in successfully!')
            return redirect(url_for('index'))
        else:
            flash('Login failed. Check your username and password.')
    return render_template('login.html')


@app.route('/update/<int:id>', methods=['GET', 'POST'])
def update(id):
    conn = get_db_connection()
    user = conn.execute('SELECT * FROM users WHERE id = ?', (id,)).fetchone()
    conn.close()

    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

        conn = get_db_connection()
        conn.execute('UPDATE users SET username = ?, password = ? WHERE id = ?',
                     (username, hashed_password, id))
        conn.commit()
        conn.close()

        flash('User updated successfully!')
        return redirect(url_for('index'))
    return render_template('update.html', user=user)


@app.route('/delete/<int:id>')
def delete(id):
    conn = get_db_connection()
    conn.execute('DELETE FROM users WHERE id = ?', (id,))
    conn.commit()
    conn.execute('VACUUM')  # Remove os IDs excluídos
    conn.close()
    flash('User deleted successfully!')
    return redirect(url_for('index'))


if __name__ == '__main__':
    init_db()
    app.run(debug=True)
