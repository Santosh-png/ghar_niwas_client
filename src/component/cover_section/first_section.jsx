import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { motion } from 'framer-motion';

import './first_section.css';
import PropertyFilter from '../filter_components/property_filter';

function FirstSection() {

  const ariaLabel = { 'aria-label': 'description' };

  const [scrollY, setScrollY] = useState(0);
  const [textColor, setTextColor] = useState("#ffffff"); 

  const text = "SELL, BUY, AND RENT YOUR PROPERTIES".split("")

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundPositionY = `${-scrollY / 2}px`;

  return (
    <>
        <Box className="HeroSection" style={{ backgroundPositionY }}>
        <Box className="header-content">
            <Typography
              variant="h1"
              className='responsive_fontsize64' 
              sx={{
                fontFamily: "Roboto Slab",
                fontWeight: 'bold',
                color: "#fbaf1a"
              }}
            >
              {
                text.map((el, i) => (
                  <motion.span
                  initial={{ opacity: 0, color: "#ffffff" }} // Initial color set to white
                  animate={{ opacity: 1, color: "#fbaf1a" }} // Animate color change
                  transition={{
                    duration: 0.5,
                    delay: i/8,
                  }}
                  key={i}
                  >{el}{""}</motion.span>
                ))
              }
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
