import {
  Box,
  Card,
  Container,
  createStyles,
  Grid,
  Image,
  Text
} from '@mantine/core'
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
      <Header title="Events" imageHeight="60vh" />

      <Box component="main">
        <Container py="md">
          <Grid columns={4}>
            {eventPreviews.map((event) => (
              <Grid.Col key={event.id} md={1}>
                <Link href={`/events/${event.id}`} passHref>
                  <Card component="a" shadow="lg">
                    <Card.Section>
                      <Image
                        src={event.data.thumbnail}
                        alt={event.data.title}
                        height={200}
                      />
                    </Card.Section>

                    <Text weight="bold" mt="sm">
                      {event.data.title}
                    </Text>
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
