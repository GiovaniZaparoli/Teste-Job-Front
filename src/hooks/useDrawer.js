import { useContext } from 'react'

import DrawerContext from 'contexts/DrawerContext'

const useDrawer = () => {
  const context = useContext(DrawerContext)

  if (context === undefined) {
    throw new Error('useDrawer must be used within a DrawerContext.Provider')
  }

  return {
    openedDrawer: context.openedDrawer,
    setOpenedDrawer: context.setOpenedDrawer,
    fixedDrawer: context.fixedDrawer,
    setFixedDrawer: context.setFixedDrawer,
    fullDrawer: context.fullDrawer,
    setFullDrawer: context.setFullDrawer,
    handleOpenDrawer: context.handleOpenDrawer,
    handleCloseDrawer: context.handleCloseDrawer,
    handleFixDrawer: context.handleFixDrawer,
    handleUnfixDrawer: context.handleUnfixDrawer,
    showEntireMenu: context.showEntireMenu,
    handleOpenFullDrawer: context.handleOpenFullDrawer,
    handleCloseFullDrawer: context.handleCloseFullDrawer,
  }
}

export default useDrawer
