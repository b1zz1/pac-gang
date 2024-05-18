'use client'

import { AppShell } from "@mantine/core"
import Header from '@components/layout/Header'

export default function Home() {

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        // collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
            <Header />
      </AppShell.Header>
      <AppShell.Main>
        Main
      </AppShell.Main>
    </AppShell>
  )
}
