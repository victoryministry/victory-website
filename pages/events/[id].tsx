import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { ContentWrapper, Title } from '~/components'
import { notionParser } from '~/helpers/client/parser'
import { getEventsFromQuery, listMerger, notion } from '~/helpers/server'
import { ChurchEventMetadata } from '~/types'

interface EventPageParams extends ParsedUrlQuery {
  id: string
}

interface EventPageProps {
  event: ChurchEventMetadata
  blocks: any
}

const EventPage: NextPage<EventPageProps> = ({
  event: { name, date },
  blocks
}) => {
  return (
    <>
      <Title title={name} subtitle={new Date(date).getTime().toString()} />
      <ContentWrapper>{notionParser(blocks)}</ContentWrapper>
    </>
  )
}

export default EventPage

export const getStaticPaths: GetStaticPaths<EventPageParams> = async () => {
  const queryResult = await notion.databases.query({
    database_id: process.env.NOTION_EVENT_DATABASE
  })

  return {
    paths: (queryResult.results as any[]).map(({ id }) => ({
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
  const queryResult = await notion.pages.retrieve({
    page_id: id
  })

  const blockResult = await notion.blocks.children.list({
    block_id: id
  })

  const listMergedResult = blockResult.results.reduce(listMerger, [])

  return {
    props: {
      event: getEventsFromQuery(queryResult),
      blocks: listMergedResult
    }
  }
}
