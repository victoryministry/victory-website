import { Icon } from '@iconify/react'
import {
  Box,
  Button,
  Card,
  Container,
  createStyles,
  Grid,
  Text,
  Title
} from '@mantine/core'
import { GetStaticProps, NextPage } from 'next'
import { eventPreviews } from '~/helpers/server/contents'
import about from '~/assets/about.webp'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Article from '~/components/Home/Article'
import Nav from '~/components/Nav'
import { ChurchEventPreview } from '~/types'
import Link from 'next/link'

interface EventsIndexProps {
  eventPreviews: ChurchEventPreview[]
}

const useStyles = createStyles((theme) => ({}))

const EventsIndex: NextPage<EventsIndexProps> = ({ eventPreviews }) => {
  const { classes } = useStyles()

  return (
    <>
      <Nav />
      <Header title="Events" />

      <Box component="main">
        <Container py="md">
          <Grid>
            {eventPreviews.map((event) => (
              <Grid.Col key={event.id}>
                <Link href={`/events/${event.id}`} passHref>
                  <Card component="a" shadow="lg">
                    <Text weight="bold">{event.data.title}</Text>
                    <Text>{new Date(event.data.date).toDateString()}</Text>
                  </Card>
                </Link>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  )
}

export default EventsIndex

export const getStaticProps: GetStaticProps<EventsIndexProps> = async () => {
  return {
    props: {
      eventPreviews: eventPreviews.map((event) => ({
        ...event,
        data: {
          ...event.data,
          date: new Date(event.data.date).getTime()
        }
      }))
    }
  }
}
