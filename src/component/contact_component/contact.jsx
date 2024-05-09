import React from 'react'
import { Box, Typography} from '@mui/material';
import './contact.style.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import Divider from '@mui/material/Divider';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Contact(){
 return(
    <>
    <Box sx={{
        display:{xs:'flex', md:'flex'},
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent:'space-evenly',
        color:'#292C6A',
        marginTop:'30px',
        textAlign:'center'
    }}>
     <Box sx={{paddingLeft:'50px'}}>
        <Box className='itemTitle' >
            <Typography variant className='responsive_fontsize24'>Quick Links</Typography>
        </Box>    
            <ul className='responsive_fontsize18'>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>FAQs</li></a>
                <a href="#"><li>Land for Sale</li></a>
                <a href="#"><li>Advertisements</li></a>
                <a href="#"><li>Contact Us</li></a>
                
            </ul>
            < Box sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2,1fr)'                 
                  }}>
              {/* icons for the mobile view */}
            <Box sx={{display: { xs: 'block', md: 'none' }}}>
            
            <IconButton 
                    sx={{backgroundColor:"white", boxShadow:" 0px 4px 4px 0px #292C6A",margin:1}}
                >
                    <FacebookIcon sx={{color:"blue"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px #292C6A",margin:1}}
                >
                    <YouTubeIcon sx={{color:"red"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px #292C6A",margin:1}}
                >
                    <PinterestIcon sx={{color:"#E60023"}}/>

                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px #292C6A",margin:1}}
                >
                    <InstagramIcon sx={{color:"#405DE6"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  #292C6A",margin:1}}
                >
                    <LinkedInIcon sx={{color:" #0077b5"}}/>
                </IconButton>
               
            </Box>
            </Box> 
        </Box> 
        <Divider orientation="horizontal" flexItem sx={{margin:'20px',display: { xs: 'flex', md: 'none' }}}/>
        <Divider orientation="vertical" variant="middle"  flexItem sx={{margin:'20px 20px 200px 20px', backgroundColor:'accent.black',display:{xs:'none',md:'flex'}}}/>
       
        <Box sx={{paddingLeft:'50px'}} >
            <Box className='itemTitle'>
            <Typography variant='' className='responsive_fontsize24'>Properties</Typography>
            </Box>
            <ul className='responsive_fontsize18'>
                <a href="#"><li>House for Sale/Rent</li></a>
                <a href="#"><li>Land for Sale/Rent</li></a>
                <a href="#"><li>Apartment for Sale/Rent</li></a>
            
            </ul>
        </Box> 

        <Divider orientation="horizontal" flexItem sx={{margin:'20px',display: { xs: 'flex', md: 'none' }}} />
        <Divider orientation="vertical" flexItem 
            sx={{margin:'15px 0px 200px 0px', backgroundColor:'accent.black',display:{xs:'none',md:'flex'}}}/>

        <Box sx={{padding:'0 50px',overflow:'hidden'}}>
            <Box className='itemTitle'>
            <Typography  variant='' className='responsive_fontsize24'>Contact Info</Typography>
            </Box>
            <ul className='responsive_fontsize18'>
               
                <li>
                        <LocationOnIcon/>
                     Kusunti 13 Lalitpur,Nepal
                </li>
                <li> 
                        <CallIcon />
                    
                        01-1234567
                  </li>  
                <li><WhatsAppIcon/>
                +9779877735741
                </li>
               
                
                
            </ul>

            <Box className='map'> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28271.991916311705!2d85.29495851139528!3d27.655502971182738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb177f078f1cd9%3A0xb514415c5a76afb3!2sKusunti%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1715060575540!5m2!1sen!2snp" width="100%" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>
        </Box> 
       

    </Box>
    </>
 );

}
export default Contact