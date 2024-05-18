import React, { useState }  from "react";
import HouseIcon from '@mui/icons-material/House';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LandscapeIcon from '@mui/icons-material/Landscape';
import LandForm from './property_request_land'
import HomeForm from './request_property'
import {
  Box,
  Typography,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Button,
  Grid,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";




function PropertyRequest() {
    const [openLandForm,setOpenLandForm]=useState(false);
    const[openHomeForm,setOpenHomeForm]=useState(false);

    const handleLandForm=(e)=>{
        e.preventDefault();
        setOpenLandForm(true);

    }
    const handleHomeForm=(e)=>{
       e.preventDefault();
       setOpenHomeForm(true);
    }

  return (
    <Box sx={{
      textAlign:"center",
      border:'1px solid black',
      padding:'10px'

    }}>
      {/* Heading */}
      <Box
        
      >
        <Box>
          <Typography
            className="responsive__fontsize18"
            sx={{
              fontWeight: "600",
              lineHeight: "21px",
              color: "primary.main",
              textTransform: "uppercase",
            }}
          >
            Request Property
          </Typography>
          
        </Box>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <IconButton onClick={handleHomeForm}
           >           
            <HouseIcon  />
          </IconButton>
          <IconButton  
            sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px #292C6A"}}>
            <ApartmentIcon/>
          </IconButton>
          <IconButton onClick={handleLandForm}>
            <LandscapeIcon/>
          </IconButton>
  
        </Box>
       
      </Box>
      {/* Actual Form */}
      <Box sx={{ mt: "1rem" }}>
        <form >
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Grid item xs={12} md={6}>
          
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "25rem" },display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',margin:'20px',gap:'10px'
                
               }}
                
              >                
                  <TextField
                   fullWidth
                    // required
                    size="small"
                    id="outlined-required"
                    label="provinces"
                    sx={{ maxWidth: { xs: "90%", md: "12rem" }}}
                    // defaultValue="Hello World"
                 />
                  <TextField
                    // required
                    size="small"
                    id="outlined-required"
                    label="zone"
                    sx={{ maxWidth: { xs: "90%", md: "12rem" }}}
                    // defaultValue="Hello World"
                 />
                  <TextField
                    // required
                    size="small"
                    id="outlined-required"
                    label="District"
                    sx={{ maxWidth: { xs: "90%", md: "12rem" }}}
                    // defaultValue="Hello World"
                 />
                  <TextField
                    // required
                    size="small"
                    id="outlined-required"
                    label="Municipality"
                    sx={{ maxWidth: { xs: "90%", md: "12rem" }}}
                    // defaultValue="Hello World"
                 />
                  <TextField
                  size="small"
                    // required
                    id="outlined-required"
                    label="Ward"
                    sx={{ maxWidth: { xs: "90%", md: "12rem" }}}
                    // defaultValue="Hello World"
                 />
                  <TextField
                    // required
                    size="small"
                    id="outlined-required"
                    label="Landmark"
                    sx={{ maxWidth: { xs: "90%", md: "12rem" }}}
                    // defaultValue="Hello World"
                 />

              </FormControl>
            </Grid>
          
            
            <InputLabel id="demo-simple-select-label">Property Detail</InputLabel>
            <Grid item xs={12} md={6} sx={{ display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',alignItems:'center',margin:'20px',gap:'10px'}}>
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "12rem" }}}
                
              >      
              <InputLabel id="demo-simple-select-label">Type</InputLabel>

                <Select
                fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={requestType}
                  label= "Type"
                  type="text"
                  

                >
                  <MenuItem value="commercial">commercial</MenuItem>
                  <MenuItem value="non commercial">non commercial</MenuItem>               
                </Select>
             
               </FormControl>
                <TextField  
                    // required
                    size="small"
                    id="outlined-required"
                    sx={{ maxWidth: { xs: "100%", md: "12rem" }}}
                    label="Total Floor"/>

                <TextField  
                  //  required
                   size="small"
                   id="outlined-required"
                   label="Area(sq.ft)"
                   type="text"
                   sx={{ maxWidth: { xs: "100%", md: "12rem" }}}
                />
                <TextField 
                // required
                size="small"
                id="outlined-required"
                label="BHK"
                type="text"
                sx={{ maxWidth: { xs: "100%", md: "12rem" }}}
                />

              <FormControl
               size="small"
               fullWidth
               sx={{ maxWidth: { xs: "100%", md: "12rem" }}}
              >
                <InputLabel>Facing</InputLabel>
               <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
               label="Facing"
                  // onChange={handleChange}
                >
                  <MenuItem value="North">North</MenuItem>
                  <MenuItem value="South">South</MenuItem>
                  <MenuItem value="East">East</MenuItem>
                  <MenuItem value="West">West</MenuItem>
                 
                  
                </Select>
               </FormControl> 
                <TextField 
                    size="small"
                    id="outlined-required"
                    sx={{ maxWidth: { xs: "100%", md: "12rem" }}}
                    label="Property Age"/>


                <FormControl  
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" }}}>   

                <InputLabel>Furnishing</InputLabel>
                <Select
                fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={WardNumber}
                  label="Furnishing"
                  type="text"
                >
                  <MenuItem value="Non">Non</MenuItem>
                  <MenuItem value="Full">Full</MenuItem>                  
                </Select>
              </FormControl>
           

            <TextField
            //  required
                    size="small"
                    id="outlined-required"
                    label="Road Size"
                    sx={{ maxWidth: { xs: "100%", md: "12rem" }}}
              />

          
            <FormControl   
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" }}}>
                <InputLabel>Urgency</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={urgency}
                  label="Urgency"
                  type="text"
                >
                  <MenuItem value="Very Urgent">Very Urgent</MenuItem>
                  <MenuItem value="not Urgent">not Urgent</MenuItem>
                                                    
                </Select>

            </FormControl>
            </Grid>

            <InputLabel>Price Range</InputLabel>
            <Grid item xs={12} md={6} sx={{display:'flex',textAlign:'center' ,alignItems:'center',justifyContent:'center',margin:'20px'}}>   
            
                <TextField 
                  id="standard-basic" 
                  size="small" 
                  sx={{ maxWidth: { xs: "40%", md: "7rem" },margin:'0 10px'}}
                  variant="standard" />
                <InputLabel>To</InputLabel>
                <TextField 
                  id="standard-basic" 
                  size="small" 
                  variant="standard"
                  sx={{ maxWidth: { xs: "40%", md: "7rem" },margin:'0 10px'}} />

            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" } ,margin:'10px 0px'}}
              >
                <TextField
                    id="standard-multiline-static"                  
                    multiline
                    rows={3}
                    // variant="outlined"
                    placeholder="Description"
        />
               
              </FormControl>
            </Grid>
           
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "secondary.main", color: "white" }}

              >
                Request
              </Button>
            </Grid>
          
    </form>
    <Dialog 
      open={openLandForm}
      onClose={() => setOpenLandForm(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
        <DialogContent>
            <LandForm/>
        </DialogContent>
    </Dialog>
    {/* for the Home Form */}
    <Dialog
       open={openHomeForm}
       onClose={()=>setOpenHomeForm(false)}
       aria-labelledby="alert-dialog-title"
       aria-describedby="alert-dialog-description"
    >
      <DialogContent>
         <HomeForm/>
      </DialogContent>
    </Dialog>
    </Box>
    </Box>
  );
}

export default PropertyRequest;
