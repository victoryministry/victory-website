import dayjs from 'dayjs'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
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
        title="Tono Bangun Tenda"
        imageUrl="/images/pic01.jpg"
        linkUrl="/ini-nomor-1"
        style="1">
        <p>
          Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis
          ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id
          tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam
          ultrices, neque et faucibus viverra, ex nulla cursus.
        </p>
      </Spotlight>

      <Spotlight
        title="Tono Bangun 2"
        imageUrl="/images/pic02.jpg"
        linkUrl="/ini-nomor-2"
        style="2"
        alt>
        <p>
          Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis
          ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id
          tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam
          ultrices, neque et faucibus viverra, ex nulla cursus.
        </p>
      </Spotlight>

      <Spotlight
        title="Tono Bangun 3"
        imageUrl="/images/pic03.jpg"
        linkUrl="/ini-nomor-3"
        style="3">
        <p>
          Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis
          ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id
          tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam
          ultrices, neque et faucibus viverra, ex nulla cursus.
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
            <a href="#" className="button">
              Browse All
            </a>
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
