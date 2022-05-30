import dayjs from 'dayjs'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { ContentWrapper } from '~/components'
import Article from '~/components/Article'
import Banner from '~/components/Banner'
import Features from '~/components/Features'
import Spotlight from '~/components/Spotlight'
import { getEventFromQuery } from '~/helpers/server'
import { getLatestEvents } from '~/services/server'
import { ChurchEventMetadata } from '~/types'

interface HomeProps {
  latestEventPreviews: ChurchEventMetadata[]
}

const Home: NextPage<HomeProps> = ({ latestEventPreviews }) => {
  return (
    <>
      <NextSeo title="Home" />

      <Banner />

      <Spotlight
        title="Our Church"
        imageUrl="/images/pic01.jpg"
        linkUrl="/ini-nomor-1"
        style="1">
        <p>
          We are a multi-cultural and multi-generational church committed to
          reaching the city of Houston. We exist to help you and your family
          grow closer to your God-given purpose. Everyone has a first step to
          take in their journey. Will you take your first step this Sunday?
        </p>
      </Spotlight>

      <Spotlight
        title="Watch Live"
        imageUrl="/images/pic02.jpg"
        linkUrl="/ini-nomor-2"
        style="2"
        alt>
        <p>
          {"Can't"} make it this Sunday or would like to share one of our
          services with a friend? Click the button below to watch our service
          live or view our service on Facebook LIVE and YouTube. You can also
          subscribe to our podcast.
        </p>
      </Spotlight>

      <Spotlight
        title="Watch On Demand"
        imageUrl="/images/pic03.jpg"
        linkUrl="/ini-nomor-3"
        style="3">
        <p>
          {"Can't"} make it this Sunday or would like to share one of our
          services with a friend? Click the button below to watch our service
          live or view our service on Facebook LIVE and YouTube. You can also
          subscribe to our podcast.
        </p>
      </Spotlight>

      <ContentWrapper className={['alt', 'style1']}>
        <h2 className="major">Latest Events</h2>
        <p>
          Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
          Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
          egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in
          tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
        </p>
        <Features>
          {latestEventPreviews.map(
            ({ date, id, thumbnail, name, location }) => (
              <Article
                imageUrl={thumbnail}
                linkUrl={`/events/${id}`}
                title={name}
                key={id}>
                <p>
                  {location &&
                    `${location}, ${dayjs(date).format('DD-MM-YYYY')}`}
                </p>
              </Article>
            )
          )}
        </Features>

        <ul className="actions">
          <li>
            <Link href="/events">
              <a className="button">Browse All</a>
            </Link>
          </li>
        </ul>
      </ContentWrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const queryResult = await getLatestEvents()

  return {
    props: {
      latestEventPreviews: queryResult.results.map(getEventFromQuery)
    },
    revalidate: 10
  }
}

export default Home
