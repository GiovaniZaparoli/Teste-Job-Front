import React from 'react'

import { makeStyles } from '@material-ui/core'

import { ScreenLoading } from 'layouts/Main/components'

import styles from './styles'
import useAuth from 'hooks/useAuth'

const useStyles = makeStyles(styles)

const Auth = ({ children }) => {
  const classes = useStyles()
  const auth = useAuth()

  return (
    <ScreenLoading loaded={auth.loaded}>
      <div className={classes.root}>
        <main className={classes.wrapper}>{children}</main>
      </div>
    </ScreenLoading>
  )
}

export default Auth
