import { Box, Typography } from '@mui/material'
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


import './first_section.css';
import PropertyFilter from '../filter_components/property_filter';

function FirstSection() {

  const ariaLabel = { 'aria-label': 'description' };

  return (
    <>
        <Box className="HeroSection">
            <Box className= "header-line">
              <Typography
              variant='h1'
              className='responsive_fontsize64'
                sx={{
                  fontFamily: "Roboto Slab",
                  color: "secondary.main",
                  fontWeight: "bold", 
                }}
              >
                SELL, BUY, RENT YOUR PROPERTIES
              </Typography>
              <Typography
              className='responsive_fontsize32'
                sx={{
                  color: "accent.white",
                  fontWeight: "medium",
                  fontFamily: "Roboto Serif ",
                }}
              >
                An innovative way of finding the place of your choice.                
              </Typography>
              <Typography
              className='responsive_fontsize32'
                sx={{
                  color: "accent.white",
                  fontWeight: "medium",
                  fontFamily: "Roboto Serif ",
                }}
              >
                 A place of recognizing your style of living a life.
              </Typography>


            {/* search for properties based on keyword like house, land, flat, apartment, room, studio, studio apartment, 1BHK, 2BHK, 3BHK, single, double and so on  */}
            <Box className= "search_bar">
            <SearchIcon style={{marginTop: '0.2rem', opacity: "50%"}}/>
            {/* <Typography> */}
            <InputBase
              sx={{fontSize: "16px"}}
              placeholder="Search By City, State "
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            {/* </Typography> */}
            </Box>
          </Box>

            <PropertyFilter/>
        </Box>



    </>
  )
}

export default FirstSection
