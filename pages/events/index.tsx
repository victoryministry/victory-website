import dayjs from 'dayjs'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Article, ContentWrapper, Features, Title } from '~/components'
import { getEventFromQuery } from '~/helpers/server'
import { getEvents } from '~/services/server'
import { ChurchEventMetadata } from '~/types'

interface EventsIndexProps {
  eventPreviews: ChurchEventMetadata[]
}

const EventsIndex: NextPage<EventsIndexProps> = ({ eventPreviews }) => {
  return (
    <>
      <NextSeo title="Events" />

      <Title title="Events" subtitle="Ini isinya event-event." />

      <ContentWrapper>
        <h3 className="major">Vitae phasellus</h3>
        <p>
          Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
          Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
          egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in
          tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
        </p>

        <Features>
          {eventPreviews.map(({ date, id, thumbnail, name, location }) => (
            <Article
              imageUrl={thumbnail}
              linkUrl={`/events/${id}`}
              title={name}
              key={id}>
              <p>
                {location && `${location}, ${dayjs(date).format('DD-MM-YYYY')}`}
              </p>
            </Article>
          ))}
        </Features>
      </ContentWrapper>
    </>
  )
}

export default EventsIndex

export const getStaticProps: GetStaticProps<EventsIndexProps> = async () => {
  const queryResult = await getEvents()

  return {
    props: {
      eventPreviews: queryResult.results.map(getEventFromQuery)
    },
    revalidate: 10
  }
}
