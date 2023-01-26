import React, { useState, useEffect } from 'react'

import * as service from 'service'
import AuthContext from 'contexts/AuthContext'

import { PhoneCall as CallIcon } from 'react-feather'

const AuthProvider = ({ children }) => {
  const [loaded, setLoaded] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    if (service.RicochetAPI.auth.isAuthenticated()) {
      loadDataWithAnimation()
    }
    // eslint-disable-next-line
  }, [])

  const loadOut = () => {
    setLoaded(true)
    setIsLoading(false)
    setUser(null)
  }

  const loadData = async () => {
    let response = await service.RicochetAPI.users.me()
    setUser(response?.data?.data)

    const menuItens = [
      {
        subheader: 'Ricochet JobTest',
        items: [
          {
            title: 'Calls',
            icon: CallIcon,
            href: '/home',
          },
        ],
      },
    ]
    setMenuItems(menuItens)
  }

  const loadDataWithAnimation = async () => {
    setIsLoading(true)
    setLoaded(false)

    try {
      await loadData()
    } finally {
      setLoaded(true)
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        loaded,
        setLoaded,
        isLoading,
        setIsLoading,
        user,
        loadOut,
        menuItems,
        loadDataWithAnimation,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
