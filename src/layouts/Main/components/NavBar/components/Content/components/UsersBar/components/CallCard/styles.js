import { colors } from '@material-ui/core'

const styles = (theme) => ({
  onlineChip: {
    backgroundColor: colors.green[400],
    color: '#FFFFFF',
  },
  callButton: {
    backgroundColor: colors.green[500],
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: colors.green[300],
      color: '#FFFFFF',
    },
  },
  hangUpButton: {
    backgroundColor: colors.red[500],
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: colors.red[300],
      color: '#FFFFFF',
    },
  },
  cardSize: {
    width: '95%',
    backgroundColor: colors.grey[100],
  },
  muteButton: {
    backgroundColor: colors.grey[500],
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: colors.grey[300],
      color: '#FFFFFF',
    },
  },
})

export default styles
