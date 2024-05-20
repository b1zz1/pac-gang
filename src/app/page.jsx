"use client";

import Search from "@components/interface/Search";
import Header from "@components/layout/Header";
import { Button, Typography } from 'antd';

export default function Home() {
  let name = "Ana";

  return (
    <div>
      <Header />
      <div className="w-full flex flex-col items-center pt-32">
        <div className="flex flex-col w-fit gap-8">
          <div className="flex flex-col items-start w-fit text-purple.6 text-5xl">
            <div>  Olá <b>{name}</b></div>
            <div>o que vamos reparar hoje?</div>
          </div>
          <Search />
        </div>  
      </div>
    </div>
  );
}
