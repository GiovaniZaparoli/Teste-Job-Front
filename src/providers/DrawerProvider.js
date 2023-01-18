import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import DrawerContext from 'contexts/DrawerContext'

const DrawerProvider = ({ children }) => {
  const { pathname } = useLocation()

  const [openedDrawer, setOpenedDrawer] = useState(false)
  const [fixedDrawer, setFixedDrawer] = useState(true)
  const [fullDrawer, setFullDrawer] = useState(false)

  const handleOpenDrawer = () => setOpenedDrawer(true)
  const handleCloseDrawer = () => setOpenedDrawer(false)

  const handleFixDrawer = () => setFixedDrawer(true)
  const handleUnfixDrawer = () => setFixedDrawer(false)

  const handleOpenFullDrawer = () => setFullDrawer(true)
  const handleCloseFullDrawer = () => setFullDrawer(false)

  const showEntireMenu = () => openedDrawer || fixedDrawer

  useEffect(() => {
    if (openedDrawer) handleCloseDrawer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <DrawerContext.Provider
      value={{
        openedDrawer,
        setOpenedDrawer,
        fixedDrawer,
        setFixedDrawer,
        fullDrawer,
        setFullDrawer,
        handleOpenDrawer,
        handleCloseDrawer,
        handleFixDrawer,
        handleUnfixDrawer,
        showEntireMenu,
        handleOpenFullDrawer,
        handleCloseFullDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}

export default DrawerProvider
