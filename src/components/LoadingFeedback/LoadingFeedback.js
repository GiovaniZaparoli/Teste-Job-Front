import React from 'react'

import { Backdrop, CircularProgress } from '@material-ui/core'

import useStyles from './styles'

const LoadingFeedback = ({ open }) => {
  const classes = useStyles()

  return (
    <Backdrop open={open} className={classes.backdrop}>
      <CircularProgress color="primary" />
    </Backdrop>
  )
}

export default LoadingFeedback
