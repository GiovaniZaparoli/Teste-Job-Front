import { setLocale } from 'yup'

setLocale({
  mixed: {
    required: 'This field is required',
    default: 'This field is invalid',
  },
  number: {
    typeError: 'Must be a number',
    integer: 'Must be a integer number',
    positive: 'Enter a positive number',
    min: (params) => `Enter a number greater than ${params.min}`,
    max: (params) => `Enter a number less than ${params.max}`,
    lessThan: (params) => `Enter a number less than ${params.less}`,
    moreThan: (params) => `Enter a number greater than ${params.more}`,
    notEqual: (params) => `Enter a number other than ${params.notEqual}`,
  },
  date: {
    min: (params) => `The date must be greater than ${params.min}`,
    max: (params) => `The date must be less than ${params.min}`,
  },
  string: {
    length: (params) => `must have exactly ${params.length} caracteres`,
    min: (params) => `must have at least ${params.min} caracteres`,
    max: (params) => `must have at most ${params.max} caracteres`,
    email: 'Enter a valid email address',
    url: 'Enter a valid URL',
    trim: 'Remove spaces from the beginning or end',
    lowercase: 'Must be in lowercase',
    uppercase: 'Must be capitalized',
  },
})
