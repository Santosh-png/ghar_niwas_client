import React from 'react'
import { Box, Typography } from '@mui/material';
import './contact.style.css'

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
       <div className='vertical-divider'></div>
        <Typography >
            <h3 className='responsive_fontsize24'>Properties</h3>
            <ul className='responsive_fontsize20'>
                <a href="#"><li>House for Sale/Rent</li></a>
                <a href="#"><li>Land for Sale/Rent</li></a>
                <a href="#"><li>Apartment for Sale/Rent</li></a>
            
            </ul>
        </Typography> 
        <div className='vertical-divider'></div>
        <Typography >
            <h3 className='responsive_fontsize24'>Contact Info</h3>
            <ul className='responsive_fontsize20'>
                <li>Kusunti 13</li>
                <li>Lalitpur,Nepal</li>
                <li>Call/SMS/Whatsapp</li>
                <li>01-1234567,+9779877735741</li>
                
            </ul>

            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28271.991916311705!2d85.29495851139528!3d27.655502971182738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb177f078f1cd9%3A0xb514415c5a76afb3!2sKusunti%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1715060575540!5m2!1sen!2snp" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </Typography> 
       

    </Box>
    </>
 );

}
export default Contact