export const getBaseURL = (project) => envsBaseUrl[project][env]

const env = 'production'

const envsBaseUrl = {
  api: {
    development: 'https://giovani-job-test-api.herokuapp.com/api',
    production: 'https://giovani-job-test-api.herokuapp.com/api',
  },
}
