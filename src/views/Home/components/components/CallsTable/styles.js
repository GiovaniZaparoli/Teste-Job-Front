import { colors } from '@material-ui/core'

const styles = (theme) => ({
  container: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  ringing: {
    borderRadius: '20px',
    backgroundColor: colors.orange[500],
    color: colors.common.white,
    fontWeight: 700,
    height: '21px',
  },
  completed: {
    borderRadius: '20px',
    backgroundColor: colors.green[500],
    color: colors.common.white,
    fontWeight: 700,
    height: '21px',
  },
  noAnswer: {
    borderRadius: '20px',
    backgroundColor: colors.red[500],
    color: colors.common.white,
    fontWeight: 700,
    height: '21px',
  },
})

export default styles
