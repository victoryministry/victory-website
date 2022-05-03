import { Box, Card, Container, createStyles, Grid, Text } from '@mantine/core'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Nav from '~/components/Nav'
import { eventPreviews } from '~/helpers/server/contents'
import { ChurchEventPreview } from '~/types'

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
