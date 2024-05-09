import * as React from 'react';
import {AppBar,Box,Toolbar,IconButton,Typography,Menu ,Container,Button,MenuItem, Drawer,Divider}from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/image/logo.png'
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import './navbar.style.css'

// import VerticalDivider from '../ui/divider'
const itemList = ['Home', 'Add Property', 'Sale','Rent','Request Property'];


function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
 
const drawerWidth=250;
  return (
    <AppBar position="static"  sx={{background:'#FFFFFF'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters  
        className="apply-maxwidth"
         sx={{
          width:"auto", display: "flex", justifyContent: 'flex-end'}}>
         
          <img src={Logo} alt="img"  className='logo-pic' 
            sx={{width:{xs:'190px',sm:'200px',md:'250px'}, 
                height:{xs:'190px',sm:'200px',md:'250px'} ,
                }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000000"
              edge="end"
              sx={{ ...(open && { display: 'flex', left:'89%'}) }}             
            >
              <MenuIcon sx={{fontSize:'40px'}}/>
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
                width: drawerWidth,
                flexShrink: 1,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                },
                display:{xs:'flex', md:'none'},
               
              }}
              
            >
              {itemList.map((item) => (
                <MenuItem key={item} onClick={handleCloseNavMenu} >

                  <Typography textAlign="center" className='itemList'>
                  <Typography className='responsive_fontsize18' 
                    sx={{ fontFamily:'Roboto Serif',margin:'0px 20px',fontWeight:'600',textAlign:'center' 
                  }}>  
                    {item}
                  </Typography>  
                  </Typography>
                </MenuItem>
              ))}
             <hr style={{margin:'20px 0px '}}></hr>
              {/* social media icons for the mobile view */}
              <Box 
                sx={{
                  display: 'flex',
                  padding:'0px 20px'
                                 
                  }}>
               <IconButton 
                    sx={{backgroundColor:"white"}}
                >
                    <FacebookIcon sx={{color:"blue",fontSize:"30px"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white"}}
                >
                    <YouTubeIcon sx={{color:"red",fontSize:"30px"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white"}}
                >
                    <PinterestIcon sx={{color:"#E60023",fontSize:"30px"}}/>

                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white"}}
                >
                    <InstagramIcon sx={{color:"#ffc273cd",fontSize:"30px"}}/>
                </IconButton>
                <IconButton 
                    sx={{backgroundColor:"white"}}
                >
                    <LinkedInIcon sx={{color:" #0077b5",fontSize:"30px"}}/>
                </IconButton>
                </Box>
            </Drawer>
            </Box> 
          

          {/* desktop view  */}  
                  
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }} >
            {itemList.map((item) => (
              
              <Button
                className='responsive_fontsize20'
                key={item}
                onClick={handleCloseNavMenu}
                sx={{
                      // mx:1,
                      color:'292c6a',
                      fontWeight:600,
                      display: 'flex',
                      fontFamily: "Roboto Serif",
                      padding:'20px',
                      left:'5%'
                    }}
                
              >
               <Typography className='itemList  responsive_fontsize20' sx={{fontWeight:'600',}}> 
                {item}
                </Typography> 
              </Button>
            ))}
          </Box>

         {/* for the desktop view  */}
          <Box sx={{ flexGrow: 0 }}>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Divider
               className='responsive_fontsize18'
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                borderLeftWidth: 1.5,
                borderColor: "#232323",
                height: "35px",
                mx:1
              
                
              }}
            />
            <Box sx={{ mx: "0rem", display: "flex", alignItems: "center", gap: "0.5rem"}} >
            <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px #292C6A"
                    
                  }}
                >
              <InstagramIcon sx={{color:"orange"}}  />
            </IconButton> 
            <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px #292C6A",}}
                >
              <FacebookIcon sx={{color:"blue"}}/>
            </IconButton>
            <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px #292C6A",}}
                >  
              <YouTubeIcon sx={{color:"#FA0505"}} />
            </IconButton>
            <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px #292C6A",}}
                >  
              <LinkedInIcon sx={{color:"#78A1DE"}}/>
            </IconButton>
            <IconButton 
                    sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px #292C6A",}}
                >  
              <PinterestIcon sx={{color:"red"}} />
            </IconButton>  
                
             
            </Box>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                borderLeftWidth: 1.5,
                borderColor: "#232323",
                height: "35px",
                mx: 1
                
              }}
            />
           
          </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;