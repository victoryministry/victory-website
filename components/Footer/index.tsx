import { Icon } from '@iconify/react'
import { ActionIcon, Box, createStyles, Text } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  socials: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.gray[2],
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md
  },

  copyright: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing.md,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.sm,
    backgroundColor: theme.colors.dark[9],
    color: theme.colors.gray[0]
  }
}))

export default function Footer() {
  const { classes } = useStyles()

  return (
    <Box component="footer">
      <Box className={classes.socials}>
        <ActionIcon size="md" color="dark">
          <Icon icon="carbon:logo-youtube" width="80%" height="80%" />
        </ActionIcon>
        <ActionIcon size="md" color="dark">
          <Icon icon="carbon:logo-facebook" width="80%" height="80%" />
        </ActionIcon>
        <ActionIcon size="md" color="dark">
          <Icon icon="carbon:logo-instagram" width="80%" height="80%" />
        </ActionIcon>
        <ActionIcon size="md" color="dark">
          <Icon icon="carbon:email" width="80%" height="80%" />
        </ActionIcon>
        <ActionIcon size="md" color="dark">
          <Icon icon="carbon:phone" width="80%" height="80%" />
        </ActionIcon>
      </Box>

      <Box className={classes.copyright}>
        <Text>Victory Ministry</Text>

        <Text>victoryministrybgr@gmail.com </Text>
      </Box>
    </Box>
  )
}
