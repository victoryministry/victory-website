import { Box, Container, TypographyStylesProvider } from '@mantine/core'
import htmr from 'htmr'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Nav from '~/components/Nav'
import {
  parseMarkdown,
  reflectionPreviews,
  reflectionsDir
} from '~/helpers/server'
import { Reflection } from '~/types'

interface ReflectionPageParams extends ParsedUrlQuery {
  id: string
}

interface ReflectionPageProps {
  reflection: Reflection
}

const ReflectionPage: NextPage<ReflectionPageProps> = ({
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

export default ReflectionPage

export const getStaticPaths: GetStaticPaths<
  ReflectionPageParams
> = async () => {
  return {
    paths: reflectionPreviews.map(({ id }) => ({
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
  const parsed = parseMarkdown(reflectionsDir, params?.id!) as Reflection
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
