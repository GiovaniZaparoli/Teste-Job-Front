import * as yup from 'yup'

export const schemaForgotPassword = yup.object().shape({
  password: yup.string().required().min(6),
  cPassword: yup
    .string()
    .required()
    .min(6)
    .oneOf([yup.ref('password'), null], "Passwords Don't match."),
})

export default schemaForgotPassword
