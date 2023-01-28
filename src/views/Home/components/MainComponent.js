import React from 'react'

import useFetch from 'hooks/useFetch'
import usePagination from 'hooks/usePagination'
import useFilter from 'hooks/useFilter'

import { Skeleton } from '@material-ui/lab'

import {
  Card,
  Box,
  Container,
  Typography,
  Grid,
  makeStyles,
  Divider,
  TablePagination,
} from '@material-ui/core'
import { CallsTable } from './components'
import { Page, Filters, FilterButton } from 'components'

import styles from './styles'

import * as service from 'service'

const useStyles = makeStyles(styles)

const MainComponent = () => {
  const classes = useStyles()
  const filter = useFilter()

  const { perPage, page, handleChangePage, handleChangeRowsPerPage } =
    usePagination(5)

  const { response, isLoading } = useFetch(
    service.RicochetAPI.calls.get,
    {
      perPage,
      page,
      ...{ ...filter.filters },
    },
    [page, perPage, filter.filters],
  )

  return (
    <Page title="Calls listing">
      <Container maxWidth={false} className={classes.container}>
        <Box mb={2}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h3">Calls History</Typography>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" justifyContent="flex-end">
                <FilterButton setDrawerOpen={filter.setDrawerOpen} />
              </Box>
            </Grid>
          </Grid>
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
            <Box px={2} display="flex" justifyContent="flex-end">
              {!isLoading && response ? (
                <TablePagination
                  component="div"
                  count={response.data.paginate.total}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  page={page - 1}
                  rowsPerPage={perPage}
                  rowsPerPageOptions={[5, 10, 25, 100]}
                  nextIconButtonProps={{ size: 'small' }}
                  backIconButtonProps={{ size: 'small' }}
                />
              ) : (
                <Box py="11px">
                  <Skeleton variant="rect" width={200} height={30} />
                </Box>
              )}
            </Box>
          </Card>
          <Filters filter={filter}>
            <input textfieldinput="true" label="Identifier" name="filter[id]" />
            <input
              textfieldinput="true"
              label="Call Identifier"
              name="filter[callSid]"
            />
            <select textfieldinput="true" label="Status" name="filter[status]">
              <option value=""></option>
              <option value="ringing">Ringing</option>
              <option value="completed">Completed</option>
              <option value="no-answer">No Answer</option>
            </select>
          </Filters>
        </Box>
      </Container>
    </Page>
  )
}

export default MainComponent
