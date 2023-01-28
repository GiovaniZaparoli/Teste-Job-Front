import React, { useEffect, useContext } from 'react'

import { TableHead as TableHeadMaterial } from '@material-ui/core'

import TableContext from 'contexts/TableContext'

import { DEFAULT_BODY_SKELETON_HEIGHT } from './../TableCell'

const TableHead = ({ children, ...rest }) => {
  const { update } = useContext(TableContext)

  var rowChildren = children.props.children
  const cols = React.Children.count(rowChildren)
  if (cols === 1) {
    rowChildren = [rowChildren]
  }
  useEffect(() => {
    update({
      cols: cols,
      bodySkeletonHeightArray: rowChildren.map((cell) =>
        cell.props
          ? cell.props.bodySkeletonHeight
          : DEFAULT_BODY_SKELETON_HEIGHT,
      ),
    })
  }, [cols, rowChildren, update])

  return <TableHeadMaterial {...rest}>{children}</TableHeadMaterial>
}

export default TableHead
