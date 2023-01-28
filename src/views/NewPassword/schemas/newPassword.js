import * as yup from 'yup'

export const newPassword = yup.object().shape({
  email: yup.string().email().required(),
})

export default newPassword
