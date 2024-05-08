import * as React from 'react';
import {AppBar,Box,Toolbar,IconButton,Typography,Menu ,Container,Button,MenuItem, Drawer}from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/image/logo.png'
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import './navbar.style.css'
import VerticalDivider from '../ui/divider'
const itemList = ['Home', 'Add Property', 'Sale','Rent','Request Property'];


function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static"  sx={{background:'#FFFFFF'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters  className="apply-maxwidth"
         sx={{py:"0",width:"100%"}}>
         
          <img src={Logo} alt="img"  className='logo-pic'/>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000000"
                           
            >
              <MenuIcon sx={{backgroundColor:"red"}}/>
            </IconButton>
           
            {/* mobile view  */}

            <Drawer
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              onClose={handleCloseNavMenu}
              anchor="right"
              open={Boolean(anchorElNav)}
              keepMounted
              sx={{
                display: { xs: 'block', md: 'none' }
                              
              }}
              
            >
              {itemList.map((item) => (
                <MenuItem key={item} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" className='responsive_fontsize20'>{item}
                  </Typography>
                </MenuItem>
              ))}
            </Drawer>
            </Box> 
          

          {/* desktop view  */}          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {itemList.map((item) => (
              <Button
                key={item}
                onClick={handleCloseNavMenu}
                sx={{ marginX:4,
                     color:'292c6a',
                     fontWeight:600,
                     display: 'block' }}
                className='responsive_fontsize20'
              >
                {item}
              </Button>
            ))}
          </Box>

         {/* for the mobile view  */}
          <Box sx={{ flexGrow: 0 }}>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <VerticalDivider/>
            <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px #292C6A",margin:1}}
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;