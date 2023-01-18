import { createTheme } from '@material-ui/core'
import { ptBR } from '@material-ui/core/locale'

import typography from './typography'
import palette from './palette'

const theme = createTheme(
  {
    typography,
    palette,
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    props: {
      MuiTextField: {
        variant: 'outlined',
      },
      MuiPaper: {
        variant: 'outlined',
      },
    },
  },
  ptBR,
)

export default theme
