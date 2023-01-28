import api from 'service/api'

const RicochetAPI = api.create('api', true)

const token = async () => {
  return await RicochetAPI.get('/twilio/token')
}

const twilio = {
  token,
}

export default twilio
