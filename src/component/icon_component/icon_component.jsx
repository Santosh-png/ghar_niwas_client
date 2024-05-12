import React from 'react'

// material icons
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LandscapeIcon from '@mui/icons-material/Landscape';
import { Box, Button, Typography } from '@mui/material';
import ButtonComponent from '../button_components/button';



function IconComponents() {
  return (
    <div>
        <Box sx={{
                display: "flex", 
                backgroundColor: "secondary.main",
                padding: "2rem",
                gap: "1rem"
            }}> 

            {/* home */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <HomeWorkIcon sx={{
                        height: "80px",
                        width: "80px",
                        color: "primary.main"
                        }}/>
                    <ButtonComponent className='responsive_fontsize24'>HOME</ButtonComponent>
                </Box>
                

                {/* apartment */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <ApartmentIcon sx={{
                        height: "80px",
                        width: "80px",
                        color: "primary.main"
                        }}/>
                    <ButtonComponent  className='responsive_fontsize24 button'>APARTMENT</ButtonComponent>
                </Box>
                
                {/* land */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <LandscapeIcon sx={{
                        height: "80px",
                        width: "80px",
                        color: "primary.main"
                    }}/>
                    <ButtonComponent className='responsive_fontsize24 button'>LAND</ButtonComponent>
                </Box>
            </Box>
    </div>
  )
}

export default IconComponents
