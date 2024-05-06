import * as React from 'react';
import {AppBar,Box,Toolbar,IconButton,Typography,Menu }from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/image/logo.png'
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const pages = ['Home', 'Add Property', 'Rent','Rent','Request Property'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <img src={Logo} alt="img" />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Box >
            <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)",margin:'10px'}}
                >
                    <FacebookIcon sx={{color:"blue"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)",margin:'10px'}}
                >
                    <YouTubeIcon sx={{color:"red"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)",margin:'10px'}}
                >
                    <PinterestIcon sx={{color:"#E60023"}}/>

                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)",margin:'10px'}}
                >
                    <InstagramIcon sx={{color:"#405DE6"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px  rgba(33, 108, 222, 1)",margin:'10px'}}
                >
                    <LinkedInIcon sx={{color:" #0077b5"}}/>
                </IconButton>
            </Box>

           
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
