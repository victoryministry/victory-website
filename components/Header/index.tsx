import { Box, createStyles, Text } from '@mantine/core'
import header from '~/assets/header.webp'

export type HeaderProps = {
  title: string
  subtitle?: string
  imageSrc?: string
  imageHeight?: string | number
}

const useStyles = createStyles(
  (
    theme,
    { imageHeight, imageSrc }: Pick<HeaderProps, 'imageHeight' | 'imageSrc'>
  ) => ({
    header: {
      background: `
        linear-gradient(
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)
        ),
        url(${imageSrc || header.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: imageHeight || '100vh',
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
  })
)

export default function Header({
  title,
  subtitle,
  imageHeight,
  imageSrc
}: HeaderProps) {
  const { classes } = useStyles({ imageHeight, imageSrc })

  return (
    <Box component="header" className={classes.header}>
      <Text align="center" className={classes.headerText}>
        {title}
      </Text>
      <Text align="center" className={classes.subHeaderText}>
        {subtitle}
      </Text>
    </Box>
  )
}
