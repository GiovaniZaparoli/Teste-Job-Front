import React from 'react'

import { Box, Container, Typography, Grid, makeStyles } from '@material-ui/core'

import styles from './styles'

import celebratingSVG from 'images/celebrating.svg'

const useStyles = makeStyles(styles)

const MainComponent = () => {
  const classes = useStyles()

  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        textAlign="justify"
        minHeight="72vh"
      >
        <Grid container justifyContent="space-between">
          <Grid item md={5} lg={5} sm={12} xs={12}>
            <Box mt={2} mb={5}>
              <Typography variant="h1" className={classes.title}>
                Bem-vindo!
              </Typography>
              <Box mt={5}>
                <Box>
                  <Typography variant="subtitle1" color="textPrimary">
                    Phasellus hendrerit quam sit amet libero aliquam placerat.
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="subtitle1" color="textPrimary">
                    Cras at augue pulvinar, venenatis magna quis, porttitor
                    lectus.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} lg={6} sm={12} xs={12}>
            <img
              alt="Em desenvolvimento"
              src={celebratingSVG}
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default MainComponent
