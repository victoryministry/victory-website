import { Box, createStyles, Text } from '@mantine/core'
import header from '~/assets/header.webp'

const useStyles = createStyles((theme) => ({
  header: {
    background: `
    linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${header.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    padding: '200px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    textTransform: 'uppercase'
  },
  subHeaderText: {
    color: 'white',
    fontSize: theme.fontSizes.xl,
    textTransform: 'uppercase'
  }
}))

export default function Header() {
  const { classes } = useStyles()

  return (
    <Box component="header" className={classes.header}>
      <Text align="center" className={classes.headerText}>
        A PLACE FOR OTHERS
      </Text>
      <Text align="center" className={classes.subHeaderText}>
        LOVE. GROW. SERVE. GO.
      </Text>
    </Box>
  )
}
