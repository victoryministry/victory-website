import {
  Box,
  Container,
  createStyles,
  Grid,
  Image,
  Text,
  Title
} from '@mantine/core'
import { NextPage } from 'next'
import Article from '~/components/Article'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Nav from '~/components/Nav'

const useStyles = createStyles((theme) => ({}))

const About: NextPage = () => {
  const { classes } = useStyles()

  return (
    <>
      <Nav />
      <Header title="About Us" imageHeight="60vh" />

      <Box component="main">
        <Article title="Vision" withDivider>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
          dignissimos dolorum quisquam quidem porro eligendi cupiditate maxime
          nihil modi libero, aut repellat molestias aliquam veniam accusantium
          vero dolores, tenetur tempora?
        </Article>
        <Article title="Mission" textOnRight withDivider>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
          dignissimos dolorum quisquam quidem porro eligendi cupiditate maxime
          nihil modi libero, aut repellat molestias aliquam veniam accusantium
          vero dolores, tenetur tempora?
        </Article>
        <Article title="Our Story" withDivider>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga natus
          iusto impedit odit ut illum mollitia reiciendis quasi sint nobis
          repudiandae molestiae eum dignissimos, placeat ullam voluptates.
          Optio, natus magnam! Accusantium nihil eligendi similique ratione nam
          debitis quae a ullam repellendus expedita natus iure voluptatem
          consequuntur adipisci eum, illum excepturi rerum perspiciatis
          necessitatibus sapiente! Sed unde officia odio ut facilis? Porro neque
          non rem delectus ullam illum excepturi beatae similique animi repellat
          molestiae nulla placeat nobis, maxime maiores et numquam hic pariatur.
          Error itaque veritatis quos voluptate, velit nulla sit? Maxime
          praesentium deleniti recusandae sunt error rerum iure aliquam
          molestiae, asperiores, voluptas enim possimus. Ea saepe tempore,
          assumenda cupiditate aspernatur suscipit sunt quam nulla molestiae est
        </Article>
      </Box>

      <Container py="md">
        <Title order={2} align="center">
          Our Team
        </Title>

        <Grid columns={3} gutter="lg">
          <Grid.Col md={1}>
            <Image
              src="/uploads/event-testing-guys/chad-radahn.jpg"
              alt="radahn"
              radius="md"
              width="100%"
              caption="Chad Radahn"
            />
          </Grid.Col>
          <Grid.Col md={1}>
            <Image
              src="/uploads/event-testing-guys/chad-radahn.jpg"
              alt="radahn"
              radius="md"
              width="100%"
              caption="Chad Radahn"
            />
          </Grid.Col>
          <Grid.Col md={1}>
            <Image
              src="/uploads/event-testing-guys/chad-radahn.jpg"
              alt="radahn"
              radius="md"
              width="100%"
              caption="Chad Radahn"
            />
          </Grid.Col>
          <Grid.Col md={1}>
            <Image
              src="/uploads/event-testing-guys/chad-radahn.jpg"
              alt="radahn"
              radius="md"
              width="100%"
              caption="Chad Radahn"
            />
          </Grid.Col>
        </Grid>
      </Container>

      <Footer />
    </>
  )
}

export default About
