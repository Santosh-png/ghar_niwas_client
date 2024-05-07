import React from 'react'
import { Box} from '@mui/material'

function VerticalDivider({children}) {
 
  return (
   
   <Box sx={{display:"flex",
             alignItems:"center",
             justifyContent:"center"
             }}>
     <Box  sx={{
           width:"2px",
           backgroundColor:"#292C6A",
           height:"30px",
           margin:"10px"
      }}/>
            
    {children}
     
     <Box sx={{ 
                textAlign:"center",
                width:"50px",
                backgroundColor:"accent.main" ,
                height:"1px"
              }}/>
            
    
  </Box>

   
  )
}

export default VerticalDivider
