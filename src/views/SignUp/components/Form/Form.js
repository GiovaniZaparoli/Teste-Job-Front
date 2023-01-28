import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { Box, Button, TextField, Link, Hidden } from '@material-ui/core'

import { PasswordInputField } from 'components'
import * as service from 'service'
import schemas from '../../schemas'
import useAuth from 'hooks/useAuth'
import useSnackbar from 'hooks/useSnackbar'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

export const Form = () => {
  const [loading, setLoading] = useState(false)

  const auth = useAuth()
  const snackbar = useSnackbar()

  const { control, handleSubmit, errors } = useForm({
    validationSchema: schemas.signUp,
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      cPassword: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      data.phone = `+${data.phone}`
      await service.RicochetAPI.users.create(data)
      await service.RicochetAPI.auth.login({
        email: data.email,
        password: data.password,
      })
      await auth.loadDataWithAnimation()
    } catch (error) {
      snackbar.open({
        message: 'Something went wrong, please try again later.',
        variant: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={3}>
          <Controller
            as={
              <TextField
                label="Name"
                type="text"
                color="primary"
                variant="outlined"
                error={!!errors.name}
                helperText={errors?.name?.message}
                fullWidth
              />
            }
            control={control}
            name="name"
            mode="onBlur"
          />
        </Box>
        <Box mb={1}>
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
        </Box>
        <Box mt={1}>
          <Controller
            control={control}
            name="phone"
            as={
              <PhoneInput
                specialLabel="Phone"
                color="secondary"
                country="br"
                variant="outlined"
                enableAreaCodeStretch
                error={!!errors.phone}
                helperText={errors?.phone?.message}
                inputStyle={{
                  width: '100%',
                }}
              />
            }
            mode="onBlur"
          />
        </Box>
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
              label="Confirm Password"
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
          <Button
            color="secondary"
            type="submit"
            variant="contained"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </Button>
          <Hidden smDown>
            <Link
              component={RouterLink}
              to="/login"
              variant="body2"
              color="textLink"
            >
              Already Have An Account?
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
              to="/login"
              variant="body2"
              color="textLink"
            >
              Already Have An Account?
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
