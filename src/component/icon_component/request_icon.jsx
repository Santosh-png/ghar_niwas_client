import React from 'react';
import { useState } from 'react';
import { Box, Button, Typography} from '@mui/material';

// material icons
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LandscapeIcon from '@mui/icons-material/Landscape';

// button component 
import ButtonComponent from '../button_components/button';
import Homeform from '../form_components/request_property';
import RequestPropertyApartment from '../form_components/property_request_apartment';
import RequestPropertyLand from '../form_components/property_request_land';

function RequestIconComponents() {
        const [selectedForm, setSelectedForm] = useState('home');
       
        const handleClickOpen = (form) => {
            
            setSelectedForm(form);
        };

        const renderForm = () => {
            switch (selectedForm) {
            case 'home':
                return <Box>
                    <Homeform/>
                </Box>;
            case 'apartment':
                return <Box>
                    <RequestPropertyApartment/>
                </Box>;
            case 'land':
                return <Box>
                    <RequestPropertyLand/>
                </Box>;
            default:
                return null;
            }
        };
  return (
    <>    
        <Box
            sx={{
                display :"flex",
                flexDirection: "column",
                borderBottomColor: ' 1px solid black'
            }}
        >

            <Typography variant='h3'
                className='responsive_fontsize32'
                sx={{
                    color:'primary.main',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}    
            >
                    Request Your Property
            </Typography>

            {/* icons */}
            <Box sx={{
                display: {
                    sm: 'flex', xs: 'column'
                },
                gap: "1rem",
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
                        height: {xs: "35px", md: "40px", lg: "50px"},
                        width: {xs: "40px", md: "50px", lg: "70px"},
                        color: "secondary.main",
                        }}/>
                    {/* <ButtonComponent className='responsive_fontsize24' */}
                     
                        <ButtonComponent   onClick={() => handleClickOpen('home')}>
                            HOME
                        </ButtonComponent>
                      
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
                        height: {xs: "35px", md: "40px", lg: "50px"},
                        width: {xs: "40px", md: "50px", lg: "70px"},
                        color: "secondary.main",
                        }} 
                    />
                   
                        <ButtonComponent  onClick={() => handleClickOpen('apartment')}>APARTMENT</ButtonComponent>
                    
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
                        height: {xs: "35px", md: "40px", lg: "50px"},
                        width: {xs: "40px", md: "50px", lg: "70px"},
                        color: "secondary.main",
                    }}/>
                    
                        <ButtonComponent onClick={() => handleClickOpen('land')}>LAND</ButtonComponent>
                   
                </Box>
                </Box>

               
                <Box >
                    {renderForm()}
                </Box>

              
        </Box>
    </>
  )
}

export default RequestIconComponents