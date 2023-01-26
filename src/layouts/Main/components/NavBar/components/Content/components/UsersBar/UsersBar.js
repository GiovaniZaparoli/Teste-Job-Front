import React, { useEffect, useState } from 'react'
import { Box, Drawer, Hidden, makeStyles, Typography } from '@material-ui/core'

import * as service from 'service'
import { LoadingFeedback } from 'components'
import { CallCard } from './components'
import { Device } from '@twilio/voice-sdk'

const UsersBar = () => {
  const [users, setUsers] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [muted, setMuted] = useState(false)
  const [onPhone, setOnPhone] = useState(false)
  const [device, setDevice] = useState(null)
  const [call, setCall] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    service.RicochetAPI.users
      .get()
      .then((response) => setUsers(response?.data?.data))
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    setIsLoading(true)

    service.RicochetAPI.twilio
      .token()
      .then((response) => {
        const twilio = new Device(response?.data?.token)

        setDevice(twilio)
      })
      .finally(() => {
        setIsLoading(false)
      })

    // eslint-disable-next-line
  }, [])

  const handleToggleCall = async (user, setInCall) => {
    if (!onPhone) {
      setMuted(false)
      setOnPhone(true)
      setInCall(true)
      console.log(user?.phone)
      const callInstance = await device.connect({
        params: { To: user?.phone },
      })
      setCall(callInstance)
    } else {
      setOnPhone(false)
      setInCall(false)
      setCall(null)
      device.disconnectAll()
    }
  }

  const handleToggleMute = () => {
    var mute = !muted
    setMuted(mute)
    call.mute(mute)
  }

  return (
    <>
      <LoadingFeedback open={isLoading} />
      {users && device && (
        <Box mt={2}>
          {users?.map((user) => (
            <CallCard
              key={user?.id}
              user={user}
              muted={muted}
              handleToggleCall={handleToggleCall}
              handleToggleMute={handleToggleMute}
            />
          ))}
        </Box>
      )}
    </>
  )
}

export default UsersBar
