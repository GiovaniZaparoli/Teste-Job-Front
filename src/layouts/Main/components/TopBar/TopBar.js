import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import clsx from 'clsx'
import PropTypes from 'prop-types'

import {
  AppBar,
  IconButton,
  Toolbar,
  SvgIcon,
  Box,
  makeStyles,
  Hidden,
} from '@material-ui/core'

import { Account } from './components'

import { Menu as MenuIcon } from 'react-feather'

import styles from './styles'
import Logo from 'images/logo-ricochet360-sm.png'
import { routes } from 'Routes'

const useStyles = makeStyles(styles)

const TopBar = ({
  className,
  onMobileNavOpen = () => {},
  withSidebar = false,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Box>
          {withSidebar ? (
            <>
              <Hidden mdDown>
                <RouterLink to={routes.home}>
                  <img
                    alt="Logo"
                    src={Logo}
                    className={classes.logo}
                    width="100%"
                  />
                </RouterLink>
              </Hidden>
              <Hidden lgUp>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  onClick={onMobileNavOpen}
                >
                  <SvgIcon fontSize="small">
                    <MenuIcon />
                  </SvgIcon>
                </IconButton>
              </Hidden>
            </>
          ) : (
            <RouterLink to={routes.home}>
              <img
                alt="Logo"
                src={Logo}
                className={classes.logo}
                width="100%"
              />
            </RouterLink>
          )}
        </Box>
        <Account />
      </Toolbar>
    </AppBar>
  )
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
}

export default TopBar
