import React from 'react';
import { Box, Button, Dialog, Typography } from '@mui/material';

// material icons
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LandscapeIcon from '@mui/icons-material/Landscape';

// button component 
import ButtonComponent from '../button_components/button';


function IconComponents() {
  return (
    <>    
        <Box
            sx={{
                display :"flex",
                flexDirection: "column",
                gap: "0.5rem",
                p: "2rem 2rem 0.5rem 2rem",
                borderBottomColor: ' 1px solid black'
            }}
        >

            <Typography variant='h3'
                className='responsive_fontsize64'
                sx={{
                    color:'primary.main',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}    
            >
                    Add Your Property
            </Typography>

            {/* icons */}
            <Box sx={{
                display: {
                    sm: 'flex', xs: 'column'
                },
                padding: "1rem",
                gap: "1.5rem",
                alignItems : 'center',
                justifyContent: "center"
            }}> 

            {/* home */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: 'center',
                }}>
                    <HomeWorkIcon 
                    sx={{
                        height: {xs: "35px", md: "60px", lg: "70px"},
                        width: {xs: "40px", md: "60px", lg: "80px"},
                        color: "secondary.main",
                        }}/>
                    {/* <ButtonComponent className='responsive_fontsize24' */}
                      <Button
                        sx={{
                            display: "flex",
                            justifyContent :"center",
                            alignItems: 'center'
                        }}
                      >
                        <ButtonComponent>
                        HOME
                        </ButtonComponent>
                        </Button>
                </Box>  

                {/* apartment */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <ApartmentIcon 
                       sx={{
                        height: {xs: "35px", md: "60px", lg: "70px"},
                        width: {xs: "40px", md: "60px", lg: "80px"},
                        color: "secondary.main",
                        }} 
                    />
                    <Button
                        sx={{
                            display: "flex",
                            justifyContent :"center",
                            alignItems: 'center'
                        }}
                    >
                        <ButtonComponent>APARTMENT</ButtonComponent>
                    </Button>
                </Box>
                
                {/* land */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <LandscapeIcon 
                    sx={{
                        height: {xs: "35px", md: "60px", lg: "70px"},
                        width: {xs: "40px", md: "60px", lg: "80px"},
                        color: "secondary.main",
                    }}/>
                    <ButtonComponent>LAND</ButtonComponent>
                </Box>
                </Box>
        </Box>
    </>
  )
}

export default IconComponents
