"use client";

import Search from "@components/interface/Search";
import ContentHeader from "@components/layout/ContentHeader";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export default function Home() {
  let name = "Ana";

  return (
    <Layout className="h-screen">
      <Header className="flex h-16 bg-white.1 justify-center">
        <ContentHeader/>
      </Header>
      <Content className="flex justify-center bg-purple.1 p-6 pt-20 h-full">
         <div className="flex flex-col w-fit gap-8">
          <div className="flex flex-col items-start w-fit text-purple.6 text-5xl">
            <div>  Olá <b>{name}</b>,</div>
            <div>o que vamos reparar hoje?</div>
          </div>
          <Search />
        </div>  
      </Content>
      <Footer className="flex h-8 flex-col justify-center items-end text-purple.6 text-xs">
        Repair Café © Created by Aninha
      </Footer>
    </Layout>
  )
}
