import dayjs from 'dayjs'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { ContentWrapper, Title } from '~/components'
import { useBackgroundEffect } from '~/helpers/client/events'
import { notionParser } from '~/helpers/client/parser'
import { getEventFromQuery } from '~/helpers/server'
import { getEvent, getEvents } from '~/services/server'
import { ChurchEventMetadata } from '~/types'

interface EventPageParams extends ParsedUrlQuery {
  id: string
}

interface EventPageProps {
  event: ChurchEventMetadata
  blocks: any
}

const EventPage: NextPage<EventPageProps> = ({
  event: { name, date, thumbnail, location },
  blocks
}) => {
  useBackgroundEffect(thumbnail)

  return (
    <>
      <Title
        title={name}
        subtitle={
          location && `${location}, ${dayjs(date).format('DD MMMM YYYY')}`
        }
      />
      <ContentWrapper>{notionParser(blocks)}</ContentWrapper>
    </>
  )
}

export default EventPage

export const getStaticPaths: GetStaticPaths<EventPageParams> = async () => {
  const queryResult = await getEvents()

  return {
    paths: queryResult.results.map(({ id }) => ({
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
  const id = params?.id!
  const { mergedBlocks, page } = await getEvent(id)

  return {
    props: {
      event: getEventFromQuery(page),
      blocks: mergedBlocks
    },
    revalidate: 10
  }
}
