export const getBaseURL = (project) => envsBaseUrl[project][env]

const env = process?.env?.REACT_APP_API || 'development'

const envsBaseUrl = {
  api: {
    development: 'http://localhost:80/api',
    production: '',
  },
}
