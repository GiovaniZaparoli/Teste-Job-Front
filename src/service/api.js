import axios from 'axios'
import humps from 'humps'
import qs from 'qs'
import { getBaseURL } from './env'
import * as service from './index'

import history from 'service/history'
import { routes } from 'Routes'

export const create = (projectTag, treatError = true) => {
  let api = axios.create({ baseURL: getBaseURL(projectTag) })
  let authToken = ''

  api.interceptors.request.use((reqConfig) => {
    authToken = `Bearer ${service.RicochetAPI.auth.getToken()}`

    reqConfig.headers.Authorization = `${authToken}`
    reqConfig.headers.crossDomain = true
    reqConfig.data = humps.decamelizeKeys(reqConfig.data)
    reqConfig.params = humps.decamelizeKeys(reqConfig.params)

    reqConfig.paramsSerializer = (params) => {
      return qs.stringify(params, {
        arrayFormat: 'brackets',
        encode: false,
      })
    }

    return reqConfig
  })

  api.interceptors.response.use(
    (resp) => humps.camelizeKeys(resp),
    (error) => {
      if (treatError) {
        if (error && error.response && 401 === error.response.status) {
          service.RicochetAPI.auth.logout()
          return Promise.reject(humps.camelizeKeys(error))
        }
        if (error && error.response && 404 === error.response.status) {
          if (!error?.params?.listAnswersOrigin) {
            history.push(routes.notFound)
            return Promise.reject(humps.camelizeKeys(error))
          }
        }
      }
      return Promise.reject(humps.camelizeKeys(error))
    },
  )

  return api
}

export default { create }
