const styles = (theme) => ({
  logo: {
    width: '75%',
    height: 'auto',
    marginBottom: theme.spacing(3),
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.white,
    height: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 80,
    paddingTop: 10,
  },
  card: {
    paddingTop: 50,
    paddingBottom: 50,
    overflow: 'visible',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%',
    },
  },
})

export default styles
