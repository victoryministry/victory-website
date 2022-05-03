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
      <Header title="Renungan" imageHeight="60vh" />

      <Box component="main">
        <Container py="md">
          <Grid columns={3}>
            {reflectionPreviews.map((reflection) => (
              <Grid.Col key={reflection.id} md={1}>
                <Link href={`/reflections/${reflection.id}`} passHref>
                  <Card component="a" shadow="lg" sx={{ minHeight: 160 }}>
                    <Text weight="bold" size="xl">
                      {reflection.data.title}
                    </Text>
                    <Text>{new Date(reflection.data.date).toDateString()}</Text>
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
