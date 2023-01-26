export const getBaseURL = (project) => envsBaseUrl[project][env]

const env = 'development'

const envsBaseUrl = {
  api: {
    development: 'https://giovani-job-test-api.herokuapp.com/api',
    production: '',
  },
}
