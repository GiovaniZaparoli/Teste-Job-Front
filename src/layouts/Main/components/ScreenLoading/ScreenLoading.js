import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core'

import logo from 'images/logo-ricochet360-sm.png'
import styles from './styles'

const useStyles = makeStyles(styles)

const ScreenLoading = ({ loaded, children }) => {
  const classes = useStyles()

  return (
    <>
      <div className={`${classes.root} ${loaded && classes.rootLoaded}`}>
        <div className={`${classes.bg} ${loaded && classes.bgLoaded}`} />
        <figure className={`${classes.logo} ${loaded && classes.logoLoaded}`}>
          <img alt="Logo" src={logo} width="100%" />
        </figure>
      </div>

      {loaded && children}
    </>
  )
}

ScreenLoading.propTypes = {
  loaded: PropTypes.bool.isRequired,
  children: PropTypes.any,
}

export default ScreenLoading
