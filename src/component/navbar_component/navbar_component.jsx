import * as React from 'react';
import {AppBar,Box,Toolbar,IconButton,Typography,Menu ,Container,Button,MenuItem}from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/image/logo.png'
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import './navbar.style.css'
import VerticalDivider from '../ui/orange-divider'

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
        <Toolbar disableGutters >

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
              <MenuIcon />
            </IconButton>

            {/* mobile view  */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                
              }}
              
            >
              {itemList.map((item) => (
                <MenuItem key={item} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" className='itemList'>{item}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            
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
                className='itemList'
              >
                {item}
              </Button>
            ))}
          </Box>
          
         {/* for the mobile view  */}
          <Box sx={{ flexGrow: 0 }}>
          
          <Box>
            <VerticalDivider>
            <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)",margin:1}}
                >
                    <FacebookIcon sx={{color:"blue"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)",margin:1}}
                >
                    <YouTubeIcon sx={{color:"red"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)",margin:1}}
                >
                    <PinterestIcon sx={{color:"#E60023"}}/>

                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)",margin:1}}
                >
                    <InstagramIcon sx={{color:"#405DE6"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)",margin:1}}
                >
                    <LinkedInIcon sx={{color:" #0077b5"}}/>
                </IconButton>
                </VerticalDivider>   
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;