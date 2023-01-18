import React, { useRef, useState } from 'react'
import {
  Avatar,
  Box,
  ButtonBase,
  Menu,
  MenuItem,
  makeStyles,
} from '@material-ui/core'

import styles from './styles'

import * as service from 'service'

import useAuth from 'hooks/useAuth'

import { routes } from 'Routes'

const useStyles = makeStyles(styles)

const Account = () => {
  const classes = useStyles()
  const ref = useRef(null)
  const auth = useAuth()
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogout = () => {
    service.RicochetAPI.auth.logout()
    service.history.push(routes.root)
  }

  const avatarLetters = (auth?.user?.name || 'User')
    .split(' ')
    .map((word) => word[0])
    .join('')

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <Avatar className={classes.avatar}>
          {avatarLetters[0]}
          {avatarLetters[avatarLetters.length - 1]}
        </Avatar>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem onClick={handleLogout}>Sair</MenuItem>
      </Menu>
    </>
  )
}

export default Account
