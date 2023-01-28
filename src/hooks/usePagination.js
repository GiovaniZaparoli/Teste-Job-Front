/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import qs from 'query-string'
import { useLocation, useHistory } from 'react-router-dom'

const usePagination = (initialPerPage) => {
  const location = useLocation()
  const history = useHistory()
  const search = qs.parse(location.search)
  const page = parseInt(search.page) || 1

  const [query, setQuery] = useState({ page, ...search })
  const [perPage, setRowsPerPage] = useState(initialPerPage)

  const handleChangePage = (event, newPage) => {
    setQuery({ ...search, page: newPage + 1 })
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    handleChangePage({}, 0)
  }

  useEffect(() => {
    history.replace(location.pathname + '?' + qs.stringify(query))
  }, [history, location.pathname, query])

  return { page, perPage, handleChangePage, handleChangeRowsPerPage }
}

export default usePagination
