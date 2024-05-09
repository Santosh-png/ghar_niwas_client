import React from 'react'
import ClientFeedbackList from './clientFeedbackList'
import { Typography,Box } from '@mui/material'
const ClientFeedback= () => {
  return (
   <Box>
        <Box>
            <Typography>Clients Feedback</Typography>
        </Box>
        <Box>
            <ClientFeedbackList />
        </Box>
   </Box>
  )
}
export default ClientFeedback;