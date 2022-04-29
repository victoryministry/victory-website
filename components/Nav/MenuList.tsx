import {
  Burger,
  Button,
  createStyles,
  Drawer,
  Image,
  Stack
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import logo from '~/assets/logo.webp'

const MENUS = ['home', 'about', 'gallery', 'blog']

const useStyles = createStyles((theme) => ({
  menuList: {
    display: 'none',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.xs,

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      display: 'flex'
    }
  }
}))

export default function MenuList() {
  const { classes } = useStyles()

  return (
    <div className={classes.menuList}>
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
    </div>
  )
}
