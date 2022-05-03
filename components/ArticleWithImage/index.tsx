import { Container, createStyles, Divider, Grid, Image } from '@mantine/core'
import { ReactNode } from 'react'

export type ArticleProps = {
  textOnRight?: boolean
  imageSrc?: string
  children?: ReactNode
  withDivider?: boolean
}

const useStyles = createStyles(
  (theme, { textOnRight }: Pick<ArticleProps, 'textOnRight'>) => ({
    wrapper: {
      [`@media (min-width: ${theme.breakpoints.md}px)`]: {
        textAlign: textOnRight ? 'right' : 'left'
      }
    }
  })
)

export default function ArticleWithImage({
  textOnRight,
  imageSrc,
  children,
  withDivider
}: ArticleProps) {
  const { classes } = useStyles({ textOnRight })

  return (
    <Container>
      <Grid className={classes.wrapper} py="md" columns={3} align="center">
        <Grid.Col md={2} offsetMd={textOnRight ? 1 : 0}>
          {children}
        </Grid.Col>

        <Grid.Col md={1} offsetMd={textOnRight ? -3 : 0}>
          <Image src={imageSrc} alt="about our church" />
        </Grid.Col>
      </Grid>

      {withDivider && <Divider />}
    </Container>
  )
}