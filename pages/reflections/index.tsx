import { Box, Card, Container, createStyles, Grid, Text } from '@mantine/core'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Nav from '~/components/Nav'
import { reflectionPreviews } from '~/helpers/server/contents'
import { ReflectionPreview } from '~/types'

interface ReflectionsIndexProps {
  reflectionPreviews: ReflectionPreview[]
}

const useStyles = createStyles((theme) => ({}))

const ReflectionsIndex: NextPage<ReflectionsIndexProps> = ({
  reflectionPreviews
}) => {
  const { classes } = useStyles()

  return (
    <>
      <Nav />
      <Header title="Renungan" />

      <Box component="main">
        <Container py="md">
          <Grid>
            {reflectionPreviews.map((reflection) => (
              <Grid.Col key={reflection.id}>
                <Link href={`/reflections/${reflection.id}`} passHref>
                  <Card component="a" shadow="lg">
                    <Text weight="bold">{reflection.data.title}</Text>
                  </Card>
                </Link>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  )
}

export default ReflectionsIndex

export const getStaticProps: GetStaticProps<
  ReflectionsIndexProps
> = async () => {
  return {
    props: {
      reflectionPreviews: reflectionPreviews.map((reflection) => ({
        ...reflection,
        data: {
          ...reflection.data,
          date: new Date(reflection.data.date).getTime()
        }
      }))
    }
  }
}
