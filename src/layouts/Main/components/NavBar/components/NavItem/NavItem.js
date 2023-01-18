import { useState } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import {
  Button,
  Collapse,
  ListItem,
  makeStyles,
  Typography,
} from '@material-ui/core'

import PropTypes from 'prop-types'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import styles from './styles'

const useStyles = makeStyles(styles)

const NavItem = ({
  title,
  href,
  depth,
  children,
  show,
  menuDisabled = false,
  icon: Icon,
  open: isOpen,
  info: Info,
  ...rest
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(isOpen)
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  let paddingLeft = 8

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth
  }

  const btnStyle = { paddingLeft }

  if (children) {
    return (
      <ListItem className={classes.item} disableGutters key={title} {...rest}>
        <Button
          className={classes.button}
          onClick={handleToggle}
          style={btnStyle}
          fullWidth
          disableElevation={true}
          classes={{
            label: classes.buttonLabel,
          }}
          disabled={menuDisabled}
        >
          {Icon && <Icon className={classes.icon} size="20" />}
          <span className={classes.title}>{title}</span>
          {open ? (
            <ExpandLessIcon size="small" color="inherit" />
          ) : (
            <ExpandMoreIcon size="small" color="inherit" />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    )
  }

  return (
    <ListItem className={classes.itemLeaf} disableGutters key={title} {...rest}>
      <Button
        activeClassName={classes.active}
        className={(classes.buttonLeaf, `depth-${depth}`)}
        component={RouterLink}
        exact
        style={btnStyle}
        fullWidth
        to={href}
        classes={{
          label: classes.buttonLabel,
        }}
        disabled={menuDisabled}
      >
        {Icon && <Icon className={classes.icon} size="20" />}
        <Typography variant="body2" className={classes.title}>
          {title}
        </Typography>
        {Info && <Info className={classes.info} />}
      </Button>
    </ListItem>
  )
}

NavItem.propTypes = {
  children: PropTypes.node,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  info: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
}

NavItem.defaultProps = {
  open: false,
}

export default NavItem
