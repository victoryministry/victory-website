import {
  Box,
  Burger,
  Button,
  createStyles,
  Drawer,
  Image,
  Stack,
  Text,
  Title
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import logo from '~/assets/logo.webp'
import MenuList from './MenuList'

const MENUS = ['home', 'about', 'gallery', 'blog']

const useStyles = createStyles((theme) => ({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md
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
            sx={{
              maxWidth: '60px',
              border: '1px black solid',
              minHeight: '60px'
            }}
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

        <MenuList />
      </Box>

      <Drawer
        opened={opened}
        onClose={handler.close}
        position="right"
        overlayOpacity={0.55}
        overlayBlur={3}>
        <Box className={classes.drawerContent}>
          <Stack spacing="sm">
            {MENUS.map((menu, index) => (
              <Link
                href={{
                  pathname: `/${menu}`
                }}
                key={index}
                passHref>
                <Button variant="subtle" component="a" uppercase size="md">
                  {menu}
                </Button>
              </Link>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </>
  )
}
