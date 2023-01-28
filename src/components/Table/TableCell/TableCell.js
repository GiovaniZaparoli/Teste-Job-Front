import React from 'react'
import PropTypes from 'prop-types'

import {
  Box,
  Tooltip,
  TableCell as TableCellMaterial,
  makeStyles,
} from '@material-ui/core'

import styles from './styles'
const useStyles = makeStyles(styles)

export const DEFAULT_BODY_SKELETON_HEIGHT = 20

const BoxTableCell = ({ children, applyNoWrap, disableTooltip }) => {
  const classes = useStyles()

  if (applyNoWrap) {
    return (
      <Tooltip
        disableFocusListener={disableTooltip}
        disableHoverListener={disableTooltip}
        disableTouchListener={disableTooltip}
        title={children}
      >
        <Box className={classes.overFlow}>{children}</Box>
      </Tooltip>
    )
  }

  return children || <></>
}

const TableCell = ({
  bodySkeletonHeight = DEFAULT_BODY_SKELETON_HEIGHT,
  children,
  applyNoWrap = false,
  disableTooltip = true,
  ...rest
}) => {
  return (
    <TableCellMaterial {...rest}>
      <BoxTableCell applyNoWrap={applyNoWrap} disableTooltip={disableTooltip}>
        {children}
      </BoxTableCell>
    </TableCellMaterial>
  )
}

TableCell.propTypes = {
  bodySkeletonHeight: PropTypes.number,
}

export default TableCell
