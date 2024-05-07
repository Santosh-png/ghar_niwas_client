import { Box, Typography } from '@mui/material'
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


import './first_section.css';
import CustomFilterPanelContent from '../filter_components/filter';

function FirstSection() {

  const ariaLabel = { 'aria-label': 'description' };

  return (
    <>
        <Box className="HeroSection">
            <Box className= "header-line">
              <Typography
              variant='h1'
              className='responsive_fontSize64'
                sx={{
                  fontFamily: "Roboto Slab",
                  color: "secondary.main",
                  fontWeight: "bold", 
                }}
              >
                SELL, BUY, RENT YOUR PROPERTIES
              </Typography>
              <Typography
              variant='h3'
              className='responsive_fontSize32'
                sx={{
                  color: "accent.white",
                  fontWeight: "medium",
                  fontFamily: "Roboto Serif ",
                  textAlign: 'center',
                }}
              >
                An innovative way of finding the place of your choice.                
              </Typography>
              <Typography
              variant='h3'
              className='responsive_fontSize32'
                sx={{
                  color: "accent.white",
                  fontWeight: "medium",
                  fontFamily: "Roboto Serif ",
                  textAlign: 'center',
                }}
              >
                 A place of recognizing your style of living a life.
              </Typography>
            </Box>

            <Box className= "search_bar">
            <SearchIcon style={{marginTop: '0.4rem', opacity: "50%"}}/>
            <InputBase
              sx={{fontSize: "20px"}}
              placeholder="Search By City, State "
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            </Box>

            <CustomFilterPanelContent/>
        </Box>



    </>
  )
}

export default FirstSection
