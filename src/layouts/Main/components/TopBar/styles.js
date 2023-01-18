import { colors } from '@material-ui/core'

const white = '#FFFFFF'

const styles = (theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    height: '60px',
    backgroundColor: theme.palette.primary.light,
  },
  logo: {
    fontSize: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100px',
    },
  },
  toolbar: {
    minHeight: 60,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  helpChip: {
    backgroundColor: colors.green[500],
    color: white,
    fontSize: 14,
    fontWeight: 500,
    minWidth: 85,
    height: 39,
    borderRadius: 100,
    '&:hover': {
      backgroundColor: colors.green[600],
      cursor: 'pointer',
    },
  },
  iconChip: {
    color: white,
    fontSize: 24,
    height: 21,
    width: 21,
  },
})

export default styles
