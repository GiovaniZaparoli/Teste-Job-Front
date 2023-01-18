import { useContext } from 'react'

import AuthContext from 'contexts/AuthContext'

const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthContext.Provider')
  }

  return {
    isLoading: context.isLoading,
    setIsLoading: context.setIsLoading,
    loaded: context.loaded,
    setLoaded: context.setLoaded,
    user: context.user,
    menuItems: context.menuItems,
    loadDataWithAnimation: context.loadDataWithAnimation,
  }
}

export default useAuth
