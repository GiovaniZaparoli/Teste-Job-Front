import React, { useState } from 'react'

import {
  Typography,
  Chip,
  Card,
  Box,
  CardContent,
  IconButton,
  makeStyles,
  Grid,
} from '@material-ui/core'
import styles from './styles'
import { PhoneForwarded, PhoneOff, MicOff, Mic } from 'react-feather'

import helpers from 'helpers'

const useStyles = makeStyles(styles)

const CallCard = ({ user, muted, handleToggleCall, handleToggleMute }) => {
  const classes = useStyles()
  const [inCall, setInCall] = useState(false)

  return (
    <Box display="flex" justifyContent="center" my={1}>
      <Card className={classes.cardSize}>
        <Box>
          <CardContent>
            <Grid container>
              <Grid item xl={8} md={12}>
                <Typography color="primary" variant="h6">
                  {user?.name}
                </Typography>
              </Grid>
              <Grid item xl={4} md={12}>
                <Box display="flex" justifyContent="flex-end">
                  <Chip
                    label={user?.status.toUpperCase()}
                    className={helpers.users.chipStatusColor(
                      user?.status,
                      classes,
                    )}
                    size="small"
                  />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <Box display="flex" justifyContent="center" mb={1}>
            {inCall ? (
              <>
                <Box mx={1}>
                  <IconButton
                    aria-label="Hang up Call"
                    className={classes.hangUpButton}
                    onClick={() => handleToggleCall(user, setInCall)}
                  >
                    <PhoneOff size={14} />
                  </IconButton>
                </Box>
                {muted ? (
                  <IconButton
                    aria-label="Turn on mic"
                    className={classes.muteButton}
                    onClick={() => handleToggleMute()}
                  >
                    <MicOff size={14} />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label="Turn of mic"
                    className={classes.muteButton}
                    onClick={() => handleToggleMute()}
                  >
                    <Mic size={14} />
                  </IconButton>
                )}
              </>
            ) : (
              <>
                {user?.status === 'online' && (
                  <IconButton
                    aria-label="Make a Call"
                    className={classes.callButton}
                    onClick={() => handleToggleCall(user, setInCall)}
                  >
                    <PhoneForwarded size={14} />
                  </IconButton>
                )}
              </>
            )}
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

export default CallCard
