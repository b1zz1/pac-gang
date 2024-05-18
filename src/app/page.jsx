import { Container, Stack, Button, Input} from "@mantine/core"

export default function Home() {
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
}
