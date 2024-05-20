"use client";

import { AppShell, Container, Flex, Stack, Text, Title } from "@mantine/core";
import Header from "@components/layout/Header";
import Search from "@components/interface/Search";

export default function Home() {
<<<<<<< Updated upstream
  return (
    <Container className="bg" ta="center">
      <Stack>
        <div className="text-purple.5">
        ola
        </div>
        <Button className="text-purple.4" color="terciaryColor">Cancel</Button>
        <Input color="primaryColor"></Input >
      </Stack>
    </Container>
  )
=======
  let name = "Ana";

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header
        style={{ filter: "drop-shadow(0 4px 20px rgba(92, 96, 137, 0.16))" }}
      >
        <Header />
      </AppShell.Header>
      <AppShell.Main className="flex flex-col items-center gap-8" bg="#F5F5FB">
        <Stack gap={0} ta={"start"} className="w-fit pt-40">
          <div className="text-purple.6 text-5xl">
            {" "}
            Olá <b>{name}</b>,
          </div>
          <div className="text-purple.6 text-5xl">
            {" "}
            O que vamos reparar hoje?
          </div>
        </Stack>
        <Search></Search>
      </AppShell.Main>
    </AppShell>
  );
>>>>>>> Stashed changes
}
