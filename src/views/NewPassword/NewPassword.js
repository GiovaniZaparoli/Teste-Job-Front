import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import ForgotPasswordForm from './components/Form'

import styles from './styles'
import {
  Card,
  makeStyles,
  Container,
  Box,
  Typography,
  Divider,
  Link,
} from '@material-ui/core'

import logo from 'images/logo-ricochet360-sm.png'

const useStyles = makeStyles(styles)

const ForgotPassword = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <Container maxWidth="md">
          <Box>
            <img alt="Logo" src={logo} width="100%" className={classes.logo} />
          </Box>
          <Typography variant="h3" color="textPrimary">
            Hello!
          </Typography>
          <Typography variant="subtitle1">
            Enter your email to recover your password
          </Typography>
          <Box mt={3}>
            <ForgotPasswordForm />
          </Box>
          <Box my={2}>
            <Divider />
          </Box>
          <Link
            component={RouterLink}
            to="/"
            variant="body2"
            color="textSecondary"
          >
            Go Back
          </Link>
        </Container>
      </Card>
    </Box>
  )
}

export default ForgotPassword
