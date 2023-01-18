const styles = (theme) => ({
  root: {
    background: theme.palette.background.default,
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '430px',
    padding: theme.spacing(2),
  },
})

export default styles
