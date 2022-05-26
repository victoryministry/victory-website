import dayjs from 'dayjs'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { ContentWrapper, Title } from '~/components'
import { notionParser } from '~/helpers/client'
import { getReflectionFromQuery, listMerger, notion } from '~/helpers/server'
import { ReflectionMetadata } from '~/types'

interface ReflectionPageParams extends ParsedUrlQuery {
  id: string
}

interface ReflectionPageProps {
  reflection: ReflectionMetadata
  blocks: any
}

const ReflectionPage: NextPage<ReflectionPageProps> = ({
  reflection: { date, title },
  blocks
}) => {
  return (
    <>
      <Title title={title} subtitle={dayjs(date).format('DD-MM-YYYY')} />
      <ContentWrapper>{notionParser(blocks)}</ContentWrapper>
    </>
  )
}

export default ReflectionPage

export const getStaticPaths: GetStaticPaths<
  ReflectionPageParams
> = async () => {
  const queryResult = await notion.databases.query({
    database_id: process.env.NOTION_REFLECTION_DATABASE
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
  ReflectionPageProps,
  ReflectionPageParams
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
      reflection: getReflectionFromQuery(queryResult),
      blocks: listMergedResult
    }
  }
}
