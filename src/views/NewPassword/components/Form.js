import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'

import { Box, Button, TextField } from '@material-ui/core'

import { routes } from 'Routes'
import * as service from 'service'
import schemas from '../schemas'
import useSnackbar from 'hooks/useSnackbar'

export const Form = () => {
  const history = useHistory()
  const snackbar = useSnackbar()

  const { control, handleSubmit, errors } = useForm({
    validationSchema: schemas.forgotPassword,
    defaultValues: {
      email: '',
    },
  })

  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)

    try {
      await service.RicochetAPI.auth.forgotPassword(data)

      snackbar.open({
        message:
          "We've sent you an email with a link to recover your password.",
        variant: 'success',
      })
      history.push(routes.root)
    } catch (error) {
      debugger
      setLoading(false)

      if (error?.response?.status === 404) {
        snackbar.open({
          message: 'User not found',
          variant: 'error',
        })

        return
      }

      snackbar.open({
        message: 'An error occurred! Try again!',
        variant: 'error',
      })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={
            <TextField
              label="Email"
              color="primary"
              variant="outlined"
              error={!!errors.email}
              helperText={errors && errors.email && errors.email.message}
              fullWidth
            />
          }
          control={control}
          name="email"
          mode="onChange"
        />
        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Button
            color="primary"
            type="submit"
            variant="contained"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Recovery'}
          </Button>
        </Box>
      </form>
    </>
  )
}

export default Form
