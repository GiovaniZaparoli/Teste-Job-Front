import React from 'react'

import Page from 'components/Page'

import styles from './styles'
import {
  makeStyles,
  Container,
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
} from '@material-ui/core'

import LockIcon from '@material-ui/icons/Lock'
import logo from 'images/logo-ricochet360-sm.png'
import Form from './components/Form'

const useStyles = makeStyles(styles)

const Login = () => {
  const classes = useStyles()

  return (
    <Page className={classes.root} title="Sign up">
      <Container maxWidth="xl">
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Avatar className={classes.icon}>
              <LockIcon fontSize="large" />
            </Avatar>
            <Box justifyContent="start" display="flex">
              <img
                alt="Logo"
                src={logo}
                width="100%"
                className={classes.logo}
              />
            </Box>
            <Typography variant="h3" color="textPrimary">
              Create your account
            </Typography>
            <Box mt={3}>
              <Form />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  )
}

export default Login
