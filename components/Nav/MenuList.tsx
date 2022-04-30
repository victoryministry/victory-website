import { Button, createStyles } from '@mantine/core'
import Link from 'next/link'
import { MENUS } from '.'

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
      {MENUS.map(({ href, label }, index) => (
        <Link href={href} key={index} passHref>
          <Button variant="subtle" component="a" uppercase size="md">
            {label}
          </Button>
        </Link>
      ))}
    </div>
  )
}
