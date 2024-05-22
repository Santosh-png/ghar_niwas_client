import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Drawer, Divider, Dialog, DialogContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/image/logo.png';
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import './navbar.style.css';
import DetailForm from '../form_components/detail_form';
import AddPropertyDetailForm from "../form_components/add_detail_form";

const itemList = ['Home', 'Add Property', 'Sale', 'Rent', 'Request Property'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [opendetailDialog, setOpendetailDialog] = useState(false);
  const [openAddPropertyDialog, setOpenAddPropertyDialog] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenForm = () => {
    setOpendetailDialog(true);
    setOpenAddPropertyDialog(false); // Ensure the other dialog is closed
    handleCloseNavMenu(); // Close the menu after opening the form
  };

  const handleOpenAddProperty = () => {
    setOpenAddPropertyDialog(true);
    setOpendetailDialog(false); // Ensure the other dialog is closed
    handleCloseNavMenu();
  };

  const drawerWidth = 250;

  return (
    <AppBar position="static" sx={{ background: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ width: "auto", display: "flex", justifyContent: 'flex-end', backgroundColor: '#ffffff' }}>
          <img src={Logo} alt="img" className='responsive_fontsize14' />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000000"
              edge="end"
              sx={{ ...(open && { display: 'flex', left: '89%' }) }}
            >
              <MenuIcon className="responsive_fontsize24" />
            </IconButton>

            {/* mobile view */}
            <Drawer
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
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
                display: { xs: 'flex', md: 'none' },
              }}
            >
              {itemList.map((item) => (
                item === "Request Property" ? (
                  <MenuItem key={item} onClick={handleOpenForm}>
                    <Typography className='responsive_fontsize18' sx={{ fontFamily: 'Roboto Serif', margin: '0px 20px', fontWeight: '600', textAlign: 'center', color: 'primary.main' }}>
                      {item}
                    </Typography>
                  </MenuItem>
                ) : item === "Add Property" ? (
                  <MenuItem key={item} onClick={handleOpenAddProperty}>
                    <Typography className='responsive_fontsize18' sx={{ fontFamily: 'Roboto Serif', margin: '0px 20px', fontWeight: '600', textAlign: 'center', color: 'primary.main' }}>
                      {item}
                    </Typography>
                  </MenuItem>
                ) : (
                  <MenuItem key={item} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" className='itemList'>
                      <Typography className='responsive_fontsize18' sx={{ fontFamily: 'Roboto Serif', margin: '0px 20px', fontWeight: '600', textAlign: 'center', color: 'primary.main' }}>
                        {item}
                      </Typography>
                    </Typography>
                  </MenuItem>
                )
              ))}
              <hr style={{ margin: '20px 0px ' }}></hr>
              {/* social media icons for the mobile view */}
              <Box sx={{ display: 'flex', padding: '0px 20px' }}>
                <IconButton sx={{ backgroundColor: "white" }}>
                  <FacebookIcon sx={{ color: "blue", fontSize: "30px" }} />
                </IconButton>
                <IconButton sx={{ backgroundColor: "white" }}>
                  <YouTubeIcon sx={{ color: "red", fontSize: "30px" }} />
                </IconButton>
                <IconButton sx={{ backgroundColor: "white" }}>
                  <PinterestIcon sx={{ color: "#E60023", fontSize: "30px" }} />
                </IconButton>
                <IconButton sx={{ backgroundColor: "white" }}>
                  <InstagramIcon sx={{ color: "#ffc273cd", fontSize: "30px" }} />
                </IconButton>
                <IconButton sx={{ backgroundColor: "white" }}>
                  <LinkedInIcon sx={{ color: " #0077b5", fontSize: "30px" }} />
                </IconButton>
              </Box>
            </Drawer>
          </Box>

          {/* desktop view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {itemList.map((item) => (
              item === "Request Property" ? (
                <MenuItem key={item} onClick={handleOpenForm} sx={{ padding: '0 10px', marginLeft: '25px', '&:hover': { backgroundColor: '#ffffff' } }}>
                  <Typography className='responsive_fontsize24 itemList' sx={{ fontFamily: 'Roboto Serif', fontWeight: '600', textAlign: 'center', color: "primary.main" }}>
                    {item}
                  </Typography>
                </MenuItem>
              ) : item === "Add Property" ? (
                <MenuItem key={item} onClick={handleOpenAddProperty} sx={{ padding: '0 10px', marginLeft: '25px', '&:hover': { backgroundColor: '#ffffff' } }}>
                  <Typography className='responsive_fontsize24 itemList' sx={{ fontFamily: 'Roboto Serif', fontWeight: '600', textAlign: 'center', color: "primary.main" }}>
                    {item}
                  </Typography>
                </MenuItem>
              ) : (
                <MenuItem key={item} onClick={handleCloseNavMenu} sx={{ padding: '0 9px', marginLeft: '25px', '&:hover': { backgroundColor: '#ffffff' } }}>
                  <Typography textAlign="center" className='itemList'>
                    <Typography className='responsive_fontsize24' sx={{ fontFamily: 'Roboto Serif', fontWeight: '600', textAlign: 'center', color: "primary.main" }}>
                      {item}
                    </Typography>
                  </Typography>
                </MenuItem>
              )
            ))}
           
          </Box>

          {/* for the desktop view */}
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
                  mx: 1
                }}
              />
              <Box sx={{ mx: "0rem", display: "flex", alignItems: "center", paddingBottom: '5px', gap: "0.5rem" }}>
                <IconButton sx={{ backgroundColor: "white", boxShadow: " 0px 4px 4px 0px #292C6A" }}>
                  <InstagramIcon sx={{ color: "orange" }} />
                </IconButton>
                <IconButton sx={{ backgroundColor: "white", boxShadow: " 0px 4px 4px 0px #292C6A", }}>
                  <FacebookIcon sx={{ color: "blue" }} />
                </IconButton>
                <IconButton sx={{ backgroundColor: "white", boxShadow: " 0px 4px 4px 0px #292C6A", }}>
                  <YouTubeIcon sx={{ color: "#FA0505" }} />
                </IconButton>
                <IconButton sx={{ backgroundColor: "white", boxShadow: " 0px 4px 4px 0px #292C6A", }}>
                  <LinkedInIcon sx={{ color: "#78A1DE" }} />
                </IconButton>
                <IconButton sx={{ backgroundColor: "white", boxShadow: " 0px 4px 4px 0px #292C6A", }}>
                  <PinterestIcon sx={{ color: "red" }} />
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
      <Dialog
        open={openAddPropertyDialog}
        onClose={() => setOpenAddPropertyDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <AddPropertyDetailForm />
        </DialogContent>
      </Dialog>
      <Dialog
              open={opendetailDialog}
              onClose={() => setOpendetailDialog(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DetailForm /> {/* Render the form component */}
              </DialogContent>
            </Dialog>
    </AppBar>
  );
}

export default NavBar;
