'use client'

import { useDisclosure } from '@mantine/hooks'

import { Group, Burger, Image, Text, ActionIcon } from '@mantine/core'
import { IconContext } from "react-icons";
import { PiUserFill } from 'react-icons/pi'

const Header = () => {
    const [opened, { toggle }] = useDisclosure()

    return (
        <Group h="100%" ml={"2rem"} mr={"2rem"} justify="space-between" align="center" ta={"center"}>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Group>
                <Image
                    radius="md"
                    h={24}
                    w={24}
                    src="coffee.svg"
                    fallbackSrc="#"
                    alt="Logo"
                />
                <Text c="primaryColor" fw={400} size="xl">Repair Café</Text>
            </Group>
            <ActionIcon variant={"filled"} color="primaryColor" size="lg" radius="xl">
                    <PiUserFill style={{width: '60%', height: '60%'}} />
            </ActionIcon>
        </Group>
    )
}

export default Header