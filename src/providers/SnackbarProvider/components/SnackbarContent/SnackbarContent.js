import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import clsx from 'clsx'

import {
  Box,
  SnackbarContent as MaterialSnackbarContent,
  Typography,
  withStyles,
} from '@material-ui/core'

import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import WarningIcon from '@material-ui/icons/Warning'
import IconButton from '@material-ui/core/IconButton'

const SnackbarContent = ({
  classes,
  className,
  message,
  onClose,
  variant,
  ...rest
}) => {
  const Icon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  }[variant]

  return (
    <MaterialSnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      classes={{ root: classes.root }}
      message={
        <Box id="client-snackbar" display="flex">
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          <Typography>{message}</Typography>
        </Box>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...rest}
    />
  )
}

SnackbarContent.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
}

export default withStyles(styles)(SnackbarContent)
