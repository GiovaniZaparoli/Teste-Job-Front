import React, { useContext } from 'react'

import {
  TableBody as TableBodyMaterial,
  TableRow,
  TableCell,
  Box,
  Typography,
} from '@material-ui/core'

import GenerateSkeleton from './../GenerateSkeleton'
import TableContext from 'contexts/TableContext'

const EmptyRow = () => {
  const { state } = useContext(TableContext)

  return state.emptyMessage ? (
    <TableRow>
      <TableCell colSpan={100}>
        <Box py={1}>
          <Typography variant="overline">{state.emptyMessage}</Typography>
        </Box>
      </TableCell>
    </TableRow>
  ) : null
}

const TableBody = ({ children, ...rest }) => {
  const { state } = useContext(TableContext)

  if (state.isLoading) {
    return (
      <TableBodyMaterial {...rest}>
        <GenerateSkeleton
          rows={5}
          cols={state.cols}
          skeletonHeightArray={state.bodySkeletonHeightArray}
        />
      </TableBodyMaterial>
    )
  }

  return (
    <TableBodyMaterial {...rest}>
      {React.Children.count(children) ? children : <EmptyRow />}
    </TableBodyMaterial>
  )
}

export default TableBody
