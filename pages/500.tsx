import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { ContentWrapper, Title } from '~/components'

const ServerError: NextPage = () => {
  return (
    <>
      <NextSeo title="Internal Server Error" />

      <Title title="500" subtitle="Internal Server Error" />

      <ContentWrapper>
        <img
          src="https://http.cat/500"
          alt="500 internal server error"
          className="image fit"
        />
      </ContentWrapper>
    </>
  )
}

export default ServerError
