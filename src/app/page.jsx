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
      <AppShell.Header style={{filter: 'drop-shadow(0 4px 20px rgba(92, 96, 137, 0.16))'}}>
            <Header />
      </AppShell.Header>
      <AppShell.Main bg="#F5F5FB">
        Main
      </AppShell.Main>
    </AppShell>
  )
}
