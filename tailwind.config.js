/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'purple.1': '#F5F5FB',
      'purple.2': '#DBDBEB',
      'purple.3': '#E3E6FF',
      'purple.4': '#939AFE',
      'purple.5': '#5D6BFF',
      'purple.6': '#5060FF',

      'white.1': '#FFFFFF',
      'white.2': '#F5F5F5',
      'white.3': '#A9ABC2',
      'white.4': '#4B4C57',
      'white.5': '#2E2F34',

      'error': '#FF3838',
      'sucess': '#93D724',
    },
  },
}
