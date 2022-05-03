import {
  Container,
  createStyles,
  Divider,
  Grid,
  Text,
  Title
} from '@mantine/core'
import { ReactNode } from 'react'

export type ArticleProps = {
  textOnRight?: boolean
  title?: string
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

export default function Article({
  textOnRight,
  title,
  children,
  withDivider
}: ArticleProps) {
  const { classes } = useStyles({ textOnRight })

  return (
    <Container>
      <Grid py="md" columns={2} className={classes.wrapper}>
        <Grid.Col md={1} offsetMd={textOnRight ? 1 : 0}>
          <Title order={2} sx={{ whiteSpace: 'break-spaces' }}>
            {title}
          </Title>
        </Grid.Col>

        <Grid.Col md={1} offsetMd={textOnRight ? -2 : 0}>
          <Text>{children}</Text>
        </Grid.Col>
      </Grid>

      {withDivider && <Divider />}
    </Container>
  )
}
