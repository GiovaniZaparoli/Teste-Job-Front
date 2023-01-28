import React, { useState, Children } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

import {
  Box,
  Button,
  Drawer,
  TextField,
  Typography,
  makeStyles,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core'

import { SorterInput } from 'components'

import styles from './styles'

const useStyles = makeStyles(styles)

const Filters = ({ filter, defaultSort, children }) => {
  const classes = useStyles()
  const [values, setValues] = useState(() => {
    let filters = filter.filters
    delete filters['page']
    return filters
  })

  const setDefaultSortValue = () => {
    switch ({ ...filter.filters }.sort) {
      case '-created_at':
        return 'newly_created'
      case 'created_at ASC':
        return 'older_created'
      default:
        return 'newly_created'
    }
  }

  const { register, handleSubmit } = useForm()
  const [sortValue, setSortValue] = useState(setDefaultSortValue())

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleChangeSort = (event) => {
    const filters = filter.filters
    delete filters.sort

    switch (event.target.value) {
      case 'newly_created':
        setSortValue('newly_created')
        filter.setFilters({ sort: '-created_at', ...filters })
        break
      case 'older_created':
        setSortValue('older_created')
        filter.setFilters({ sort: 'created_at', ...filters })
        break
      default:
        setSortValue('newly_created')
        filter.setFilters({ sort: '-created_at', ...filters })
        break
    }

    filter.setDrawerOpen(false)
  }

  const onSubmit = () => {
    filter.setFilters(values)
    filter.setDrawerOpen(false)
  }

  const clearFilters = () => {
    Children.toArray(children).map((field) => {
      return setValues({ [field?.props?.name]: '' })
    })
    filter.setFilters('')
    filter.setDrawerOpen(false)
  }

  const willClearField = (fieldName) => {
    const newValues = values
    delete newValues[fieldName]

    setValues(newValues)
  }

  return (
    <Drawer
      anchor="right"
      open={filter.drawerOpen}
      onClose={() => filter.setDrawerOpen(false)}
    >
      <Box px={2} py={4} className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Filtros
        </Typography>
        <Box display="flex" alignItems="center">
          <Box>
            <Typography>Order By</Typography>
          </Box>
          <FormControl>
            <Select
              id="sort-select"
              value={sortValue}
              onChange={handleChangeSort}
              input={<SorterInput />}
            >
              <MenuItem value="newly_created">
                <Typography variant="body1" color="secondary">
                  Recently Created
                </Typography>
              </MenuItem>
              <MenuItem value="older_created">
                <Typography variant="body1" color="secondary">
                  Old Created
                </Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          {Children.toArray(children).map(
            (field, index) =>
              field &&
              field.props.textfieldinput &&
              field.props.skip !== 'true' && (
                <div key={index}>
                  <TextField
                    SelectProps={{ native: true }}
                    margin="dense"
                    className={classes.filterField}
                    fullWidth
                    value={values[field.props.name] || ''}
                    select={field.type === 'select'}
                    {...field.props}
                    onChange={(event) => {
                      if (field.props.onChange) field.props.onChange(event)
                      if (field.props.willclearfield)
                        willClearField(field.props.willclearfield)
                      return handleChange(event)
                    }}
                    inputProps={{
                      ref: register,
                      ...field.props.inputProps,
                    }}
                    key={index}
                  />
                </div>
              ),
          )}
          <Button
            className={classes.filterField}
            variant="outlined"
            color="default"
            fullWidth
            type="button"
            onClick={clearFilters}
          >
            Clean Filters
          </Button>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.filterField}
            fullWidth
          >
            Filter
          </Button>
        </form>
      </Box>
    </Drawer>
  )
}

Filters.propTypes = {
  filter: PropTypes.object,
  defaultSort: PropTypes.string,
  children: PropTypes.node,
}

Filters.defaultProps = {
  defaultSort: 'newly_created',
}

export default Filters
