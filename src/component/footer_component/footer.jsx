import React from 'react'
import { Box, Typography } from '@mui/material'



function Footer() {
  return (
    <Box 
        sx={{
            display:"flex",
            flexDirection:{xs:'column',md:'row'},
            backgroundColor:"#292C6A",
            justifyContent:"center",
            height:"100px",
            textAlign:"center",
            alignItems:"center",
            color:'#ffffff'
            }}>
          <Typography className='responsive_fontsize16'>
            Copyright@{new Date().getFullYear()} &nbsp;
           by Ghar Niwas - Real Estate in Nepal -Buy, Rent, Sell Property (ghar, jagga) in Nepal. &nbsp;
          </Typography>
          
          <Typography className='responsive_fontsize16'>
            All Right Reserved.
          </Typography>
    </Box>
  )
}

export default Footer
