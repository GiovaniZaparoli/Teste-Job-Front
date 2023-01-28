import React from 'react'
import PropTypes from 'prop-types'

import { Button, Tooltip } from '@material-ui/core'

import { Filter } from 'react-feather'

const FilterButton = ({ setDrawerOpen }) => {
  return (
    <Tooltip title="Filters">
      <Button
        onClick={() => setDrawerOpen(true)}
        startIcon={<Filter width="18" />}
        variant="outlined"
      >
        Filters
      </Button>
    </Tooltip>
  )
}

FilterButton.propTypes = {
  setDrawerOpen: PropTypes.func,
}

FilterButton.defaultProps = {
  setDrawerOpen: () => {},
}

export default FilterButton
