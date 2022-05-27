import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { ContentWrapper, Title } from '~/components'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="About" />

      <Title title="About" subtitle="Ini tentang." />

      <ContentWrapper>
        <h3 className="major">Vitae phasellus</h3>
        <p>
          Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
          Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
          egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in
          tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
        </p>
        <p>
          Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
          Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
          egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in
          tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
        </p>
        <h3 className="major">Vitae phasellus</h3>
        <p>
          Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
          Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
          egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in
          tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          ipsum natus corporis laboriosam dicta, veniam possimus nam ducimus
          mollitia sunt magni laudantium, quis tenetur esse, sit numquam
          voluptates. Deserunt, provident?
        </p>
      </ContentWrapper>
    </>
  )
}

export default Home
