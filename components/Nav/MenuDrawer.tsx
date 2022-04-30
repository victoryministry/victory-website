import { Box, Button, createStyles, Drawer, Stack } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu } from '~/types/menu'

export type MenuDrawerProps = {
  menus: Menu[]
  opened: boolean
  onClose: () => void
}

const useStyles = createStyles((theme) => ({
  drawerContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.sm
  }
}))

export default function MenuDrawer({
  menus,
  onClose,
  opened
}: MenuDrawerProps) {
  const { classes } = useStyles()
  const { pathname } = useRouter()

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      position="right"
      overlayOpacity={0.55}
      overlayBlur={3}>
      <Box className={classes.drawerContent}>
        <Stack spacing="sm">
          {menus.map(({ href, label }, index) => (
            <Link href={href} key={index} passHref>
              <Button
                variant={href === pathname ? 'light' : 'subtle'}
                onClick={onClose}
                component="a"
                uppercase
                size="md">
                {label}
              </Button>
            </Link>
          ))}
        </Stack>
      </Box>
    </Drawer>
  )
}
