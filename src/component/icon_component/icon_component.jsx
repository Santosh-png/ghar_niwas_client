import React from 'react';
import { useState } from 'react';
import { Box, Button, Typography} from '@mui/material';

// material icons
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LandscapeIcon from '@mui/icons-material/Landscape';

// button component 
import ButtonComponent from '../button_components/button';
import AddPropertyHome from '../form_components/add_property_house';
import AddPropertyApartment from '../form_components/add_property_apartment';
import AddPropertyLand from '../form_components/add_property_land';


function IconComponents() {
        const [selectedForm, setSelectedForm] = useState('home');

        const handleClickOpen = (form) => {
            setSelectedForm(form);
        };

        const handleClose = () => {
            setOpen(false);
            setSelectedForm(null);
        };

        const renderForm = () => {
            switch (selectedForm) {
            case 'home':
                return <Box>
                    <AddPropertyHome/>
                </Box>;
            case 'apartment':
                return <Box>
                    <AddPropertyApartment/>
                </Box>;
            case 'land':
                return <Box>
                    <AddPropertyLand/>
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
                className='responsive_fontsize64'
                sx={{
                    color:'primary.main',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    mb: "0.8rem"
                }}    
            >
                    Add Your Property
            </Typography>

            {/* icons */}
            <Box sx={{
                display: "flex",
                padding: "10px",
                alignItems : 'center',
                justifyContent: "center",
                gap: "2rem"
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
                        height: {md: "40px", lg: "50px"},
                        width: {md: "30px", lg: "40px"},
                        color: "secondary.main",
                        display: {xs: "none", md: "flex"}
                        }}/>
                         <ButtonComponent onClick={() => handleClickOpen('home')}> 
                            HOME 
                         </ButtonComponent> 
                </Box>  

                {/* apartment */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <ApartmentIcon 
                       sx={{
                        height: {md: "40px", lg: "50px"},
                        width: {md: "30px", lg: "40px"},
                        color: "secondary.main",
                        display: {xs: "none" ,md: "flex"}
                        }} 
                    />
                        <ButtonComponent onClick={() => handleClickOpen('apartment')}>APARTMENT</ButtonComponent>
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
                        height: {md: "40px", lg: "50px"},
                        width: {md: "30px", lg: "40px"},
                        color: "secondary.main",
                        display: {xs: "none", md: "flex"}
                    }}/>
                        <ButtonComponent onClick={() => handleClickOpen('land')}>LAND</ButtonComponent>
                </Box>
            </Box>

                {/* Render form based on selected icon */}
                <Box>
                    {renderForm()}
                </Box>

                {/* add peroperty button */}
                <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1rem"
                    }}>
                    <ButtonComponent >Add Property</ButtonComponent>
                </Box>
        </Box>
    </>
  )
}

export default IconComponents
