import React from 'react'

import NewPasswordForm from './components/Form'
import routes from 'Routes'

import { Redirect } from 'react-router-dom'

import styles from './styles'
import { Card, makeStyles, Container, Box, Typography } from '@material-ui/core'

import logo from 'images/logo-ricochet360-sm.png'

import { useLocation } from 'react-router-dom'
import qs from 'query-string'

const useStyles = makeStyles(styles)

const ForgotPassword = () => {
  const classes = useStyles()
  const location = useLocation()
  const search = qs.parse(location.search)

  if (!search.token) {
    return (
      <Redirect
        to={{
          pathname: routes.root,
          state: {
            error:
              'You cannot access this page to reset your password. Make sure you are using the correct URL.',
          },
        }}
      />
    )
  }

  const defaultValues = {
    password: '',
    cPassword: '',
    token: search.token,
  }

  return (
    <Card className={classes.root}>
      <Box justifyContent="center" display="flex">
        <img alt="Logo" src={logo} width="100%" className={classes.logo} />
      </Box>
      <Box justifyContent="center" display="flex">
        <Container maxWidth="md">
          <Typography variant="h4" color="textPrimary">
            Register your new password!
          </Typography>
          <Box className={classes.card}>
            <Box mt={3}>
              <NewPasswordForm
                defaultValues={defaultValues}
                email={search?.email}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Card>
  )
}

export default ForgotPassword
