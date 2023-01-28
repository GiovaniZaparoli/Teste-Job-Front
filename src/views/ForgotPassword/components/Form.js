import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'

import useAuth from 'hooks/useAuth'
import useSnackbar from 'hooks/useSnackbar'

import { Box, Button } from '@material-ui/core'

import { PasswordInputField } from 'components'
import { routes } from 'Routes'
import * as service from 'service'
import schemas from '../schemas'

export const Form = ({ defaultValues, email }) => {
  const [loading, setLoading] = useState(false)

  const history = useHistory()
  const auth = useAuth()
  const snackbar = useSnackbar()

  const { control, handleSubmit, errors } = useForm({
    validationSchema: schemas.forgotPassword,
    defaultValues: defaultValues,
  })

  const onSubmit = async (data) => {
    setLoading(true)

    data.token = defaultValues.token
    data.email = email

    try {
      await service.RicochetAPI.users.updatePassword(data)

      const login = {
        email: data?.email,
        password: data?.password,
      }
      await service.RicochetAPI.auth.login(login)
      snackbar.open({
        message: 'Password changed successfully',
        variant: 'success',
      })

      setTimeout(auth.loadDataWithAnimation(), 2000)
    } catch (error) {
      history.push(routes.root, {
        error: 'Invalid email or password!',
      })
    }
  }

  const handleSubmitForm = (event) => {
    handleSubmit(onSubmit)(event)
  }

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <Controller
          as={
            <PasswordInputField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              error={!!errors.password}
              helperText={errors?.password?.message}
              fullWidth
            />
          }
          control={control}
          name="password"
          mode="onBlur"
        />
        <Controller
          as={
            <PasswordInputField
              label="Password Confirmation"
              type="password"
              variant="outlined"
              margin="normal"
              error={!!errors.cPassword}
              helperText={errors?.cPassword?.message}
              fullWidth
            />
          }
          control={control}
          name="cPassword"
          mode="onBlur"
        />
        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Button color="primary" type="submit" variant="contained">
            {loading ? 'Loading...' : 'Register new password'}
          </Button>
        </Box>
      </form>
    </>
  )
}

export default Form
