const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'noWrap',
    marginRight: theme.spacing(4),
  },
  success: {
    backgroundColor: theme.palette.success.main,
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: theme.palette.warning.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
})

export default styles
