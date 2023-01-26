import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useLocation, matchPath } from 'react-router'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Box,
  Divider,
  Hidden,
  List,
  ListSubheader,
  Typography,
} from '@material-ui/core'

import NavItem from '../NavItem'

import useAuth from 'hooks/useAuth'

import Logo from 'images/logo-ricochet360-sm.png'

import { UsersBar } from './components'

const renderNavItems = ({ items, ...rest }) => {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        [],
      )}
    </List>
  )
}

const reduceChildRoutes = ({
  acc,
  pathname,
  item,
  menuDisabled,
  depth = 0,
}) => {
  const key = (item.id || item.title) + depth

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    })

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
        show={item.show}
        menuDisabled={menuDisabled}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
          menuDisabled: menuDisabled,
        })}
      </NavItem>,
    )
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        show={item.show}
        title={item.title}
        menuDisabled={menuDisabled}
      />,
    )
  }

  return acc
}

const Content = () => {
  const auth = useAuth()
  const location = useLocation()

  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Hidden lgUp>
        <Box p={3} display="flex" justifyContent="center">
          <RouterLink to="/">
            <img src={Logo} alt="logo" width="60px" />
          </RouterLink>
        </Box>
      </Hidden>
      <Box mt={4} mb={4} textAlign="center">
        <Typography variant="h5" color="textPrimary" underline="none">
          {auth?.user?.name || ''}
        </Typography>
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary">
            {auth?.account?.name === 'empty_account' ? '' : auth?.account?.name}
          </Typography>
        </Box>
      </Box>
      <Divider />

      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="25vh"
      >
        <Box p={2}>
          {auth.menuItems &&
            auth.menuItems.map((item) => (
              <List
                key={item.subheader}
                subheader={
                  <ListSubheader disableGutters disableSticky>
                    {item.subheader}
                  </ListSubheader>
                }
              >
                {renderNavItems({
                  items: item.items,
                  pathname: location.pathname,
                })}
              </List>
            ))}
        </Box>
      </Box>
      <Divider />
      <Box my={1} display="flex" justifyContent="center">
        <Typography variant="h6" color="secondary">
          Users
        </Typography>
      </Box>
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Box>
          <UsersBar />
        </Box>
      </PerfectScrollbar>
    </Box>
  )
}

export default Content
