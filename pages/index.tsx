import { Icon } from '@iconify/react'
import { Box, Button, createStyles, Text, Title } from '@mantine/core'
import { NextPage } from 'next'
import about from '~/assets/about.webp'
import ArticleWithImage from '~/components/ArticleWithImage'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Nav from '~/components/Nav'

const useStyles = createStyles((theme) => ({}))

const Home: NextPage = () => {
  const { classes } = useStyles()

  return (
    <>
      <Nav />
      <Header title="Lorem Ipsum" subtitle="Dolor sit amet" />

      <Box component="main">
        <ArticleWithImage imageSrc={about.src} withDivider>
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
        </ArticleWithImage>
        <ArticleWithImage imageSrc={about.src} textOnRight>
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
        </ArticleWithImage>
      </Box>

      <Footer />
    </>
  )
}

export default Home
