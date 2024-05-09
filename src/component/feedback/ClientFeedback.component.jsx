import React from 'react'
import ClientFeedbackList from './clientFeedbackList'
import { Typography,Box } from '@mui/material'
import HorizontalDivider from "../ui/HorizontalDivider";
const ClientFeedback= () => {
  return (
    <>
    <Box>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "5rem", gap: "1rem"}}>
          <HorizontalDivider />
            <Typography 
                variant="h4"
                sx={{
                 
                  fontSize: "32px",
                  fontWeight: "600",
                  color: "accent.black ",
                  display:"flex",
                  flexDirection:"column",
                //   marginTop: "5rem",
                  textAlign:"center",
                  letterSpacing:"1px"
                  
    
                }}
              
            >
            Clients Feedback
            </Typography>
        <HorizontalDivider/>
    </Box>

        <Box>
            <ClientFeedbackList />
        </Box>
        </Box>
   </>
  )
}
export default ClientFeedback;