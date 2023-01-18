import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'

import {
  ThemeProvider,
  withStyles,
  createGenerateClassName,
} from '@material-ui/styles'
import { useLocation, Router } from 'react-router-dom'

import 'configs/yup/locale'

import theme from 'theme'
import 'react-perfect-scrollbar/dist/css/styles.css'

import AuthProvider from 'providers/AuthProvider'
import SnackbarProvider from 'providers/SnackbarProvider'

import Routes from './Routes'
import history from 'service/history'

import { MuiPickersUtilsProvider } from '@material-ui/pickers'

import MomentUtils from '@date-io/moment'

const defaultGenerateClassName = createGenerateClassName({
  disableGlobal: true,
  productionPrefix: 'c',
})

const App = () => (
  <JssProvider generateClassName={defaultGenerateClassName}>
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider locale="pt-br" utils={MomentUtils}>
        <SnackbarProvider>
          <Router history={history}>
            <ScrollToTop />
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </Router>
        </SnackbarProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </JssProvider>
)

const styles = {
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      height: '100%',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    body: {
      backgroundColor: '#f4f6f8',
      height: '100%',
    },
    a: {
      textDecoration: 'none',
    },
    '#root': {
      height: '100%',
    },
  },
}

function ScrollToTop() {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default withStyles(styles)(App)
