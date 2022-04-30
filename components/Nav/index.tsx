import { Box, Burger, createStyles, Image, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import logo from '~/assets/logo.webp'
import { Menu } from '~/types/menu'
import MenuDrawer from './MenuDrawer'
import MenuList from './MenuList'

export const MENUS: Menu[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Articles', href: '/articles' }
]

const useStyles = createStyles((theme) => ({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md
  },

  logo: {
    maxWidth: '60px',
    border: '1px black solid',
    minHeight: '60px'
  },

  burgerRoot: {
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      display: 'none'
    }
  },

  drawerContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.sm
  }
}))

export default function Nav() {
  const { classes } = useStyles()
  const [opened, handler] = useDisclosure(false)

  return (
    <>
      <Box component="nav" className={classes.nav}>
        <Box
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.xs
          })}>
          <Image
            src={logo.src}
            alt="church logo"
            radius="md"
            classNames={{ image: classes.logo }}
          />

          <Title
            sx={(theme) => ({
              fontSize: theme.fontSizes.lg,
              [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
                fontSize: theme.fontSizes.xl
              }
            })}>
            Victory Ministry
          </Title>
        </Box>

        <Burger
          opened={opened}
          onClick={handler.toggle}
          classNames={{ root: classes.burgerRoot }}
        />

        <MenuList menus={MENUS} />
      </Box>

      <MenuDrawer menus={MENUS} opened={opened} onClose={handler.close} />
    </>
  )
}
