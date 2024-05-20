import React from 'react'
import ClientFeedbackList from './clientFeedbackList'
import { Typography,Box } from '@mui/material'
import HorizontalDivider from "../ui/HorizontalDivider";
const ClientFeedback= () => {
  return (
    <>
    <Box 
    sx={{padding:"2rem"}}
    >
        
        
        <Box 
          sx={{
           display: "flex",
           flexDirection: "row", 
           alignItems: "center", 
           justifyContent: "center", 
          //  marginTop: "30px",
          // marginBottom: "4rem",
           marginTop:"-30px", 
           gap: "1rem",
           

          
          
          }}
         >  
          {/* <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}></Box> */}
              <HorizontalDivider />
               <Typography 
                // variant="h4"
                className='responsive_fontsize32'
                sx={{
                 
                  // fontSize: "32px",
                  fontWeight: "600",
                  color: "primary.main",
                  display:"flex",
                  flexDirection:"column",
                  textAlign:"center",
                  letterSpacing:"1px",
                  padding:"0px",
                  // marginTop:"9rem"
                  // marginBottom:"2rem"
                 
                }}
              >
           Clients Feedback
          </Typography>
          <HorizontalDivider/>
        </Box>
       
        <Box
          // sx={{ display: "flex", width: "100%", flexDirection: "row" }}
          >
            <ClientFeedbackList />
        </Box>
        </Box>
   </>
  )
}
export default ClientFeedback;