import React from 'react'
import { Box, Typography } from '@mui/material';
import './contact.style.css'
import Map from '../../assets/image/map.png'

function Contact(){
 return(
    <>
    <Box sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        color:'#292C6A'
    }}>
     <Typography >
            <h3 className='responsive_fontsize24'>Quick Links</h3>
            <ul className='responsive_fontsize20'>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>FAQs</li></a>
                <a href="#"><li>Land for Sale</li></a>
                <a href="#"><li>Advertisements</li></a>
                <a href="#"><li>Contact Us</li></a>
                
            </ul>
        </Typography> 
       
        <Typography className='vertical-divider'>
            <h3 className='responsive_fontsize24'>Properties</h3>
            <ul className='responsive_fontsize20'>
                <a href="#"><li>House for Sale/Rent</li></a>
                <a href="#"><li>Land for Sale/Rent</li></a>
                <a href="#"><li>Apartment for Sale/Rent</li></a>
            
            </ul>
        </Typography> 
        <Box className='vertical-divider'></Box>
        <Typography >
            <h3 className='responsive_fontsize24'>Contact Info</h3>
            <ul className='responsive_fontsize20'>
                <li>Kusunti 13</li>
                <li>Lalitpur,Nepal</li>
                <li>Call/SMS/Whatsapp</li>
                <li>01-1234567,+9779877735741</li>
                <li> <img src={Map} alt="map" /></li>
            </ul>
        </Typography> 

    </Box>
    </>
 );

}
export default Contact