/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import qs from 'query-string'
import { useLocation, useHistory } from 'react-router-dom'

const useFilter = (initialFilter) => {
  const location = useLocation()
  const history = useHistory()
  const search = qs.parse(location.search)

  const [filters, setFilters] = useState({ ...initialFilter, ...search })
  const [drawerOpen, setDrawerOpen] = useState(false)
  useEffect(() => {
    const updatedFilters = Object.keys(filters)
      .filter((key) => !!filters[key])
      .reduce((obj, key) => ((obj[key] = filters[key]), obj), {})

    history.replace(location.pathname + '?' + qs.stringify(updatedFilters))
  }, [filters])
  return { filters, setFilters, drawerOpen, setDrawerOpen }
}

export default useFilter
