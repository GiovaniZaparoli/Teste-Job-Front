import { useContext } from 'react'

import SnackbarContext from 'contexts/SnackbarContext'

const useSnackbar = () => {
  const snackbarContext = useContext(SnackbarContext)

  if (snackbarContext === undefined) {
    throw new Error(
      'useSnackbar must be used within a SnackbarContext.Provider',
    )
  }

  return snackbarContext.snackbar
}

export default useSnackbar
