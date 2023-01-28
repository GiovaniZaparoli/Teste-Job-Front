import api from 'service/api'

const RicochetAPI = api.create('api', true)

const me = async () => {
  return await RicochetAPI.get('/user/me')
}

const create = async ({ ...data }) => {
  return await RicochetAPI.post('/register', data)
}

const get = async () => {
  return await RicochetAPI.get('/users')
}

const updatePassword = async ({ ...data }) => {
  return await RicochetAPI.post('/password/reset', data)
}

const users = {
  me,
  create,
  get,
  updatePassword,
}

export default users
