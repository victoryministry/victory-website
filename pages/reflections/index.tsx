import dayjs from 'dayjs'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Article, ContentWrapper, Features, Title } from '~/components'
import { getReflectionFromQuery, notion } from '~/helpers/server'
import { ReflectionMetadata } from '~/types'

interface ReflectionsIndexProps {
  reflectionPreviews: ReflectionMetadata[]
}

const ReflectionsIndex: NextPage<ReflectionsIndexProps> = ({
  reflectionPreviews
}) => {
  return (
    <>
      <NextSeo title="Reflections" />

      <Title title="Reflections" subtitle="Ini isinya event-event." />

      <ContentWrapper>
        <h3 className="major">Vitae phasellus</h3>
        <p>
          Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
          Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
          egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in
          tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
        </p>

        <Features>
          {reflectionPreviews.map(({ date, id, title }) => (
            <Article
              imageUrl={''}
              linkUrl={`/reflections/${id}`}
              title={title}
              key={id}>
              <p>{dayjs(date).format('DD-MM-YYYY')}</p>
            </Article>
          ))}
        </Features>
      </ContentWrapper>
    </>
  )
}

export default ReflectionsIndex

export const getStaticProps: GetStaticProps<
  ReflectionsIndexProps
> = async () => {
  const queryResult = await notion.databases.query({
    database_id: process.env.NOTION_REFLECTION_DATABASE,
    filter: {
      property: 'Status',
      select: {
        equals: 'Published'
      }
    }
  })

  return {
    props: {
      reflectionPreviews: queryResult.results.map(getReflectionFromQuery)
    },
    revalidate: 10
  }
}
