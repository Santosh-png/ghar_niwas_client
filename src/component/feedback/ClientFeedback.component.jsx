import React from 'react'
import ClientFeedbackList from './clientFeedbackList'
import { Typography,Box } from '@mui/material'
// import ClientAvatarList from './clientAvatarList'
const ClientFeedback= () => {
  return (
   <Box >
       
            <Typography 
                variant="h4"
                sx={{
                 
                  fontSize: "32px",
                  fontWeight: "600",
                  color: "primary.main",
                  display:"flex",
                  flexDirection:"column",
                  marginTop: "5rem",
                  textAlign:"center",
                  
    
                }}
              
            >
            Clients Feedback</Typography>

        <Box>
            <ClientFeedbackList />
           
            {/* <ClientAvatarList/> */}
        </Box>
   </Box>
  )
}
export default ClientFeedback;