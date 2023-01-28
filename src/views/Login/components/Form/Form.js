import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { Box, Button, TextField, Link, Hidden } from '@material-ui/core'

import { PasswordInputField } from 'components'
import * as service from 'service'
import schemas from '../../schemas'
import useAuth from 'hooks/useAuth'
import useSnackbar from 'hooks/useSnackbar'

export const Form = () => {
  const [loading, setLoading] = useState(false)

  const auth = useAuth()
  const snackbar = useSnackbar()

  const { control, handleSubmit, errors } = useForm({
    validationSchema: schemas.login,
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      await service.RicochetAPI.auth.login(data)
      await auth.loadDataWithAnimation()
    } catch (error) {
      snackbar.open({
        message: 'Email or Password is invalid!',
        variant: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={
            <TextField
              label="Email"
              type="email"
              color="primary"
              variant="outlined"
              error={!!errors.email}
              helperText={errors?.email?.message}
              fullWidth
            />
          }
          control={control}
          name="email"
          mode="onBlur"
        />
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
        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Button
            color="secondary"
            type="submit"
            variant="contained"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Enter'}
          </Button>
          <Hidden smDown>
            <Link
              component={RouterLink}
              to="/sign-up"
              variant="body2"
              color="textLink"
            >
              Sign up
            </Link>
            <Link
              component={RouterLink}
              to="/new-password"
              variant="body2"
              color="textLink"
            >
              Forgot You Password?
            </Link>
          </Hidden>
        </Box>
        <Hidden mdUp>
          <Box mt={2}>
            <Link
              component={RouterLink}
              to="/sign-up"
              variant="body2"
              color="textLink"
            >
              Sign up
            </Link>
          </Box>

          <Box mt={2}>
            <Link
              component={RouterLink}
              to="/new-password"
              variant="body2"
              color="textLink"
            >
              Forgot You Password?
            </Link>
          </Box>
        </Hidden>
      </form>
    </>
  )
}

export default Form
