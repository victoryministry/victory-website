import { Box, Container, createStyles, Text, Title } from '@mantine/core'
import type { NextPage } from 'next'
import Header from '~/components/Header'
import Nav from '~/components/Nav'

const useStyles = createStyles((theme) => ({}))

const Home: NextPage = () => {
  const { classes } = useStyles()

  return (
    <>
      <Nav />
      <Header />

      <Box
        component="main"
        sx={(theme) => ({
          paddingTop: theme.spacing.md,
          paddingBottom: theme.spacing.md
        })}>
        <Container>
          <Box>
            <Title order={2}>Tentang Kami</Title>

            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus voluptas doloremque enim quos adipisci dolore non
              reiciendis iste, nam fugiat, modi voluptatem magni. Totam at eos
              quaerat accusamus, qui aliquam.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Home
