import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { ContentWrapper, Title } from '~/components'

const NotFound: NextPage = () => {
  return (
    <>
      <NextSeo title="Page Not Found" />

      <Title title="404" subtitle="Page Not Found" />

      <ContentWrapper>
        <img
          src="https://http.cat/404"
          alt="404 not found"
          className="image fit"
        />
      </ContentWrapper>
    </>
  )
}

export default NotFound
