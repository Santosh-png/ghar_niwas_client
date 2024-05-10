import React from 'react'
import ClientFeedbackList from './clientFeedbackList'
import { Typography,Box } from '@mui/material'
import HorizontalDivider from "../ui/HorizontalDivider";
const ClientFeedback= () => {
  return (
    <>
    <Box 
    // sx={{ border:"1px solid yellow"}}
    >
        
        
        <Box 
          sx={{
           display: "flex",
           flexDirection: "row", 
           alignItems: "center", 
           justifyContent: "center", 
          //  marginTop: "2rem",
          // marginBottom: "1rem",
           marginTop:"2 0 3 0", 
           gap: "1rem",
          
          }}
         >  
          {/* <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}></Box> */}
              <HorizontalDivider />
               <Typography 
                variant="h4"
                className='responsive_fontsize32'
                sx={{
                 
                  // fontSize: "32px",
                  fontWeight: "600",
                  color: "primary.main",
                  display:"flex",
                  flexDirection:"column",
                  textAlign:"center",
                  letterSpacing:"1px",
                  // padding:"10px"
                  // marginTop:"2rem"
                }}
              >
           Clients Feedback
          </Typography>
          <HorizontalDivider/>
        </Box>
       
        <Box >
            <ClientFeedbackList />
        </Box>
        </Box>
   </>
  )
}
export default ClientFeedback;