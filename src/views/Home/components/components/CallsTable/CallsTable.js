import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from 'components/Table'

import { LoadingFeedback } from 'components'

import { Box, Typography, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import helpers from 'helpers'
import styles from './styles'

const useStyles = makeStyles(styles)

const TableRowCall = ({ call, ...rest }) => {
  const classes = useStyles()

  return (
    <TableRow {...rest}>
      <TableCell>{call?.id}</TableCell>
      <TableCell>
        <Typography>{call?.createdAt}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{call?.callSid}</Typography>
      </TableCell>
      <TableCell>
        <Chip
          size="small"
          className={helpers.calls.chipStatusColor(call?.status, classes)}
          label={call?.status}
        />
      </TableCell>
      <TableCell>
        <Typography>{call?.duration}</Typography>
      </TableCell>
      <TableCell>
        <Typography>System Number</Typography>
      </TableCell>
      <TableCell>
        <Typography>{call?.receiverUser?.name}</Typography>
      </TableCell>
    </TableRow>
  )
}

const CallsTable = ({ calls, isLoading, onEvent }) => {
  return (
    <>
      <LoadingFeedback open={isLoading} />
      <Box width="100%">
        <PerfectScrollbar
          options={{ wheelPropagation: false, useBothWheelAxes: true }}
        >
          <Table
            size="medium"
            emptyMessage="No one call is found"
            isLoading={isLoading}
            noWrap
          >
            <TableHead>
              <TableRow>
                <TableCell width="10%">Identifier</TableCell>
                <TableCell width="10%">Created At</TableCell>
                <TableCell width="20%">Call Identifier</TableCell>
                <TableCell width="10%">Status</TableCell>
                <TableCell width="10%">Duration</TableCell>
                <TableCell width="20%">From User</TableCell>
                <TableCell width="20%">To User</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {calls &&
                calls.map((call) => (
                  <TableRowCall call={call} key={call.id} hover />
                ))}
            </TableBody>
          </Table>
        </PerfectScrollbar>
      </Box>
    </>
  )
}

export default CallsTable
