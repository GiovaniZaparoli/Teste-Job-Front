import React from 'react'
import { useHistory } from 'react-router-dom'

import { makeStyles, Grid, Typography, Box, Button } from '@material-ui/core'

import styles from './styles'
import { routes } from 'Routes'

const useStyles = makeStyles(styles)

const NotFound = () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <Box className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item md={8} xs={12}>
          <Box className={classes.content}>
            <img
              alt="In Development"
              className={classes.image}
              src="/images/404.svg"
            />
            <Box my={5}>
              <Typography variant="h2">404: Page Not Found</Typography>
            </Box>
            <Box className={classes.subtitle}>
              <Typography variant="subtitle2">
                You tried some unknown path or came here by mistake. Whatever it
                is, try using navigation.
              </Typography>
            </Box>
            <Box mt={6}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => history.push(routes.home)}
              >
                Back to start
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default NotFound
