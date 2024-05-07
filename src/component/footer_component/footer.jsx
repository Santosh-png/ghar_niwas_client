import React from 'react'
import { Box, Typography } from '@mui/material'
import VerticalDivider from '../ui/orange-divider'


function Footer() {
  return (
    <Box 
        sx={{
            display:"flex",
            backgroundColor:"#292C6A",
            justifyContent:"center",
            height:"100px",
            textAlign:"center",
            alignItems:"center",
            color:'#ffffff'
            }}>
          <Typography className='responsive_fontsize16'>
            Copyright@{new Date().getFullYear()} &nbsp;
          </Typography>
          
          <Typography className='responsive_fontsize16'>
           by Ghar Niwas - Real Estate in Nepal -Buy, Rent, Sell Property (ghar, jagga) in Nepal. &nbsp;
          </Typography>
          
          <Typography className='responsive_fontsize16'>
            All Right Reserved.
          </Typography>
    </Box>
  )
}

export default Footer
