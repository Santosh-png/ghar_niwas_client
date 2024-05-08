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
           height:"45px",
           mr:"15px",
           marginTop:'10px'
      }}/>
            
    {children}    
     
  </Box> 
  )
}

export default VerticalDivider;
