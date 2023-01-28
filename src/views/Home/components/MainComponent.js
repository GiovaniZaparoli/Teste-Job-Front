import React from 'react'

import useFetch from 'hooks/useFetch'
import {
  Card,
  Box,
  Container,
  Typography,
  Grid,
  makeStyles,
  Divider,
} from '@material-ui/core'
import { CallsTable } from './components'
import { Page } from 'components'

import styles from './styles'

import * as service from 'service'

const useStyles = makeStyles(styles)

const MainComponent = () => {
  const classes = useStyles()

  const { response, isLoading, refresh } = useFetch(
    service.RicochetAPI.calls.get,
    {},
    [],
  )

  return (
    <Page title="Calls listing">
      <Container maxWidth={false} className={classes.container}>
        <Box mb={2}>
          <Typography variant="h3">Calls History</Typography>
          <Divider />
        </Box>
        <Box minHeight="72vh">
          <Card>
            <Box display="flex" width="100%" mt={2}>
              <Grid container justifyContent="space-between">
                <CallsTable
                  calls={response?.data?.data}
                  isLoading={isLoading}
                />
              </Grid>
            </Box>
          </Card>
        </Box>
      </Container>
    </Page>
  )
}

export default MainComponent
