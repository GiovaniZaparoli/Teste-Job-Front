import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Table as TableMaterial } from '@material-ui/core'

import TableContext from 'contexts/TableContext'

const Table = ({
  isLoading,
  emptyMessage,
  noWrap = false,
  children,
  ...rest
}) => {
  const [state, setState] = useState({
    emptyMessage,
    isLoading,
    cols: 0,
    bodySkeletonHeightArray: [],
  })

  const update = useCallback(
    (data) => setState((state) => ({ ...state, ...data })),
    [setState],
  )

  useEffect(() => update({ isLoading }), [update, isLoading])

  return (
    <TableContext.Provider value={{ state, update }}>
      <TableMaterial {...rest}>{children}</TableMaterial>
    </TableContext.Provider>
  )
}

Table.propTypes = {
  emptyMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  noWrap: PropTypes.bool,
}

export default Table
