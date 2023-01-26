import * as yup from 'yup'

export const schemaSignUp = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  password: yup.string().required().min(8),
  cPassword: yup
    .string()
    .required()
    .min(8)
    .oneOf([yup.ref('password'), null], 'Passwords do not match.'),
})

export default schemaSignUp
