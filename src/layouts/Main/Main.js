import { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Box } from '@material-ui/core'
import useAuth from 'hooks/useAuth'
import DrawerProvider from 'providers/DrawerProvider'

import { NavBar, TopBar, ScreenLoading } from './components'
import styles from './styles'

const useStyles = makeStyles(styles)

const Main = ({ children }) => {
  const classes = useStyles()
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const auth = useAuth()

  return (
    <DrawerProvider>
      <ScreenLoading loaded={auth.loaded}>
        <Box className={classes.root}>
          <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} withSidebar />
          <NavBar
            onMobileClose={() => setMobileNavOpen(false)}
            openMobile={isMobileNavOpen}
          />
          <Box className={classes.wrapper}>
            <Box className={classes.contentContainer}>
              <Box className={classes.content}>{children}</Box>
            </Box>
          </Box>
        </Box>
      </ScreenLoading>
    </DrawerProvider>
  )
}

Main.propTypes = {
  children: PropTypes.any,
}

export default Main
