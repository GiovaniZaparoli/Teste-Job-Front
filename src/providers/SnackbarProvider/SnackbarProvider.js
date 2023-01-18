import React from 'react'
import PropTypes from 'prop-types'

import { Snackbar } from '@material-ui/core'

import { SnackbarContent } from './components'
import SnackbarContext from 'contexts/SnackbarContext'

const SnackbarProvider = ({ children }) => {
  const initialSnackbar = {
    visible: false,
    message: '',
    variant: 'error',
    vertical: 'bottom',
    horizontal: 'left',
  }
  const [snackbar, setSnackbar] = React.useState(initialSnackbar)

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, visible: false })
  }

  const handleSnackbarOpen = (params) => {
    setSnackbar({ ...initialSnackbar, ...params, visible: true })
  }

  return (
    <SnackbarContext.Provider
      value={{ snackbar: { open: handleSnackbarOpen } }}
    >
      {children}

      <Snackbar
        anchorOrigin={{
          vertical: snackbar.vertical,
          horizontal: snackbar.horizontal,
        }}
        open={snackbar.visible}
        onClose={handleSnackbarClose}
        autoHideDuration={6000}
      >
        <SnackbarContent
          onClose={handleSnackbarClose}
          variant={snackbar.variant}
          message={snackbar.message}
        />
      </Snackbar>
    </SnackbarContext.Provider>
  )
}

SnackbarProvider.propTypes = {
  children: PropTypes.node,
}

export default SnackbarProvider
