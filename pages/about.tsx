import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { ContentWrapper, Features, TeamMember, Title } from '~/components'
import { getMemberFromQuery } from '~/helpers/server/members'
import { getMembers } from '~/services/server/members'
import { Member } from '~/types'

interface AboutProps {
  members: Member[]
}

const About: NextPage<AboutProps> = ({ members }) => {
  console.log(members)
  return (
    <>
      <NextSeo title="About" />

      <Title title="About" subtitle="Ini tentang." />

      <ContentWrapper className={['style2']}>
        <h3 className="major">Visi</h3>
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
        <h3 className="major">Misi</h3>
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
      <ContentWrapper className={['alt', 'style3']}>
        <h3 className="major">Meet The Team</h3>

        <Features>
          {members.map(({ id, name, picture }) => (
            <TeamMember key={id} name={name} imageUrl={picture} />
          ))}
        </Features>
      </ContentWrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const queryResult = await getMembers()

  return {
    props: {
      members: queryResult.results.map(getMemberFromQuery)
    },
    revalidate: 10
  }
}

export default About
