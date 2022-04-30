import { Button, createStyles } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu } from '~/types/menu'

export type MenuListProps = {
  menus: Menu[]
}

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

export default function MenuList({ menus }: MenuListProps) {
  const { classes } = useStyles()
  const { pathname } = useRouter()

  return (
    <div className={classes.menuList}>
      {menus.map(({ href, label }, index) => (
        <Link href={href} key={index} passHref>
          <Button
            variant={href === pathname ? 'light' : 'subtle'}
            component="a"
            uppercase
            size="md">
            {label}
          </Button>
        </Link>
      ))}
    </div>
  )
}
