import { colors } from '@material-ui/core'
const white = '#FFFFFF'

const palette = {
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: '#212D60',
    light: colors.indigo[400],
  },
  secondary: {
    contrastText: white,
    dark: colors.orange[900],
    main: '#f28903',
    light: colors.orange[400],
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.amber[900],
    main: colors.amber[600],
    light: colors.amber[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: colors.grey[700],
    menu: colors.grey[900],
    secondary: colors.orange[900],
    link: colors.blue[600],
  },
}

export default palette
