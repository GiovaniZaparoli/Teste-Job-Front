import React, { forwardRef } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

import styles from './styles'

const useStyles = makeStyles(styles)

const Page = forwardRef(({ title, children, ...rest }, ref) => {
  const classes = useStyles()
  return (
    <Box className={classes.root} ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  )
})

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default Page
