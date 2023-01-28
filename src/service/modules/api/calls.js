import api from 'service/api'

const RicochetAPI = api.create('api', true)

const get = async ({ ...params }) => {
  return await RicochetAPI.get('/calls', { params })
}

const calls = {
  get,
}

export default calls
