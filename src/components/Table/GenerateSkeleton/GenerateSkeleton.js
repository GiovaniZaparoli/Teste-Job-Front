import React from 'react'
import PropTypes from 'prop-types'

import { TableRow, TableCell } from '@material-ui/core'

import { Skeleton } from '@material-ui/lab'

import { DEFAULT_BODY_SKELETON_HEIGHT } from './../TableCell'

const GenerateSkeleton = ({ rows, cols, skeletonHeightArray = [] }) => {
  return Array(rows)
    .fill()
    .map((item, indexRow) => (
      <TableRow hover key={indexRow}>
        {Array(cols)
          .fill()
          .map((item, indexCell) => (
            <TableCell key={indexCell}>
              <Skeleton
                variant="rect"
                width="100%"
                height={
                  skeletonHeightArray[indexCell] || DEFAULT_BODY_SKELETON_HEIGHT
                }
              />
            </TableCell>
          ))}
      </TableRow>
    ))
}

GenerateSkeleton.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  skeletonHeightArray: PropTypes.arrayOf(PropTypes.number),
}

export default GenerateSkeleton
