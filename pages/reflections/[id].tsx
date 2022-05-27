import dayjs from 'dayjs'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { ParsedUrlQuery } from 'querystring'
import { ContentWrapper, Title } from '~/components'
import { notionParser } from '~/helpers/client'
import { getReflectionFromQuery } from '~/helpers/server'
import { getReflection, getReflections } from '~/services/server'
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
      <NextSeo title={title} />

      <Title
        title={title}
        subtitle={dayjs(date).format('dddd, DD MMMM YYYY')}
      />
      <ContentWrapper>{notionParser(blocks)}</ContentWrapper>
    </>
  )
}

export default ReflectionPage

export const getStaticPaths: GetStaticPaths<
  ReflectionPageParams
> = async () => {
  const queryResult = await getReflections()

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
  const { mergedBlocks, page } = await getReflection(id)
  return {
    props: {
      reflection: getReflectionFromQuery(page),
      blocks: mergedBlocks
    },
    revalidate: 10
  }
}
