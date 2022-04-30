import {
  ActionIcon,
  Box,
  Button,
  Container,
  createStyles,
  Divider,
  Grid,
  Image,
  Stack,
  Text,
  Title
} from '@mantine/core'
import { NextPage } from 'next'
import Header from '~/components/Header'
import Nav from '~/components/Nav'
import { Icon } from '@iconify/react'
import about from '~/assets/about.webp'
import Footer from '~/components/Footer'
import Article from '~/components/Home/Article'

const useStyles = createStyles((theme) => ({}))

const Home: NextPage = () => {
  const { classes } = useStyles()

  return (
    <>
      <Nav />
      <Header />

      <Box component="main">
        <Article imageSrc={about.src} withDivider>
          <Title order={2} my="md">
            Tentang Kami
          </Title>
          <Text mb="md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus voluptas doloremque enim quos adipisci dolore non
            reiciendis iste, nam fugiat, modi voluptatem magni. Totam at eos
            quaerat accusamus, qui aliquam.
          </Text>
          <Button rightIcon={<Icon icon="carbon:arrow-right" />}>
            Selengkapnya
          </Button>
        </Article>
        <Article imageSrc={about.src} textOnRight>
          <Title order={2} my="md">
            Tentang Kami
          </Title>
          <Text mb="md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus voluptas doloremque enim quos adipisci dolore non
            reiciendis iste, nam fugiat, modi voluptatem magni. Totam at eos
            quaerat accusamus, qui aliquam.
          </Text>
          <Button rightIcon={<Icon icon="carbon:arrow-right" />}>
            Selengkapnya
          </Button>
        </Article>
      </Box>

      <Footer />
    </>
  )
}

export default Home
