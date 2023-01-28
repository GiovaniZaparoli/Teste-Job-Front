import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'
import { useHistory } from 'react-router-dom'

import { TableRow as TableRowMaterial, makeStyles } from '@material-ui/core'

import styles from './styles'

const useStyles = makeStyles(styles)

const TableRow = ({ children, pointer, to, ...rest }) => {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = () => {
    if (!to) {
      return
    }

    history.push(to)
  }

  return (
    <TableRowMaterial
      className={clsx({
        [classes.pointer]: pointer,
      })}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </TableRowMaterial>
  )
}

TableRow.propTypes = {
  pointer: PropTypes.string,
  to: PropTypes.any,
}

export default TableRow
