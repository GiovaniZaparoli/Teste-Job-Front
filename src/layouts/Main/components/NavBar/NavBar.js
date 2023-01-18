import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import PropTypes from 'prop-types'
import { Drawer, Hidden, makeStyles } from '@material-ui/core'

import styles from './styles'

import { Content } from './components'

const useStyles = makeStyles(styles)

const NavBar = ({ openMobile, onMobileClose }) => {
  const classes = useStyles()
  const location = useLocation()

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose()
    }
    // eslint-disable-next-line
  }, [location.pathname])

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <Content />
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          <Content />
        </Drawer>
      </Hidden>
    </>
  )
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
}

export default NavBar
