import api from 'service/api'

import * as service from 'service'

const RicochetAPI = api.create('api', false)

const login = async (data) => {
  const loginResponse = await RicochetAPI.post('/login', data)
  const token = loginResponse?.data?.data?.token
  setToken(token)
  return loginResponse
}

// const forgotPassword = async (data) => {
//   const response = await api.post('/users/password', {
//     api_user: data,
//   })

//   return response
// }

const setToken = (token) => {
  sessionStorage.setItem('AUTH_TOKEN', token)
}

const removeToken = () => {
  sessionStorage.removeItem('AUTH_TOKEN')
}

const getToken = () => {
  return sessionStorage.getItem('AUTH_TOKEN')
}

const logout = () => {
  removeToken()
  service.history.push('/')
}

const isAuthenticated = () => {
  const token = getToken()
  return !!token
}

const auth = {
  login,
  logout,
  getToken,
  setToken,
  removeToken,
  isAuthenticated,
}

export default auth
