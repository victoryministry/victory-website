import { Box, Container, TypographyStylesProvider } from '@mantine/core'
import htmr from 'htmr'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Nav from '~/components/Nav'
import { parseMarkdown, eventPreviews, eventsDir } from '~/helpers/server'
import { ChurchEvent } from '~/types'

interface EventPageParams extends ParsedUrlQuery {
  id: string
}

interface EventPageProps {
  reflection: ChurchEvent
}

const EventPage: NextPage<EventPageProps> = ({
  reflection: {
    data: { date, title },
    parsed
  }
}) => {
  return (
    <>
      <Nav></Nav>

      <Box component="main">
        <Container>
          <TypographyStylesProvider>
            <h1>{title}</h1>
            <div>{new Date(date).toString()}</div>
            {htmr(parsed)}
          </TypographyStylesProvider>
        </Container>
      </Box>
    </>
  )
}

export default EventPage

export const getStaticPaths: GetStaticPaths<EventPageParams> = async () => {
  return {
    paths: eventPreviews.map(({ id }) => ({
      params: {
        id
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<
  EventPageProps,
  EventPageParams
> = async ({ params }) => {
  const parsed = parseMarkdown(eventsDir, params?.id!) as ChurchEvent
  const mapped = {
    ...parsed,
    data: {
      ...parsed.data,
      date: new Date(parsed.data.date).getTime()
    }
  }

  return {
    props: {
      reflection: mapped
    }
  }
}
