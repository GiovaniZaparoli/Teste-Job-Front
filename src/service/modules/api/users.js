import api from 'service/api'

const RicochetAPI = api.create('api', false)

const me = async () => {
  return await RicochetAPI.get('/user/me')
}

const create = async ({ ...data }) => {
  return await RicochetAPI.post('/register', data)
}

const get = async () => {
  return await RicochetAPI.get('/users')
}

const users = {
  me,
  create,
  get,
}

export default users
