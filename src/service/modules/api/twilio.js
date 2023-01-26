import api from 'service/api'

const RicochetAPI = api.create('api', false)

const token = async () => {
  return await RicochetAPI.get('/twilio/token')
}

const twilio = {
  token,
}

export default twilio
