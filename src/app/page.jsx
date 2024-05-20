"use client";

import { AppShell, Container, Flex, Stack, Text, Title } from "@mantine/core";
import Header from "@components/layout/Header";
import Search from "@components/interface/Search";

export default function Home() {
  let name = "Ana";

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header
        style={{ filter: "drop-shadow(0 4px 20px rgba(92, 96, 137, 0.16))" }}
      >
        <Header />
      </AppShell.Header>
      <AppShell.Main className="flex flex-col items-center gap-8" bg="#F5F5FB">
        <Stack gap={20} ta={"start"} className="w-fit pt-40">
          <div className="text-purple.6 text-5xl">
            Olá <b>{name}</b>,<br></br>O que vamos reparar hoje?
          </div>
          <Search></Search>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
