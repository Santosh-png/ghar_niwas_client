import React, { useState }  from "react";
import HouseIcon from '@mui/icons-material/House';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ApartmentForm from "./property_request_apartment"
import LandForm from './property_request_land'
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
  DialogContent
} from "@mui/material";




function PropertyRequest() {
  const[openApartmentForm,setOpenApartmentForm]=useState(false);
  const[OpenLandForm,setOpenLandForm]=useState(false)

  const handleApartmentForm=(e)=>{
    e.preventDefault();
    setOpenApartmentForm(true)
   
  }
 
  const handleLandForm=(e)=>{
    e.preventDefault();
    setOpenLandForm(true)
  }

  return (
    <Box sx={{
      // textAlign:"center",
      padding:'10px'

    }}>
      {/* Heading */}
     
      {/* Actual Form */}
      <Box sx={{ mt: "1rem" }} className="responsive_fontsize16">
        <form >
           <Box>
            <Typography variant='h3'
              className='responsive_fontsize26'
              marginBottom='12px'
            > Location </Typography>
            <Grid item xs={12} md={6} lg={3}>
            <FormControl size="small" fullWidth>
                <Box
                 sx={{ maxWidth: { xs: "100%", md: "100%" } ,display: 'grid',
                 gridTemplateColumns: 'repeat(2,1fr)', gap:'12px'
                }}
                >
                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='Province'
                  />
                  
                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='Zone'
                  />
                  
                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='District'
                  />

                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='Municipality'
                  />

                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='Ward'
                  />

                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='Landmark'
                  />
                </Box>
              </FormControl>
          </Grid>
        </Box>
            
        <Typography variant='h3'
              className='responsive_fontsize26'
              // fontWeight='bold'
              margin='12px'
            > Property Detail
          </Typography>
            <Grid item xs={12} md={6} 
                sx={{  maxWidth: { xs: "100%", md: "100%" } ,display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)', gap:'12px'}}>
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "100%" }}}
                
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
                  <MenuItem value="Commercial">commercial</MenuItem>
                  <MenuItem value="Non Commercial">non commercial</MenuItem>               
                </Select>
             
               </FormControl>
                <TextField  
                    // required
                    size="small"
                    id="outlined-required"
                    sx={{ maxWidth: { xs: "100%", md: "100%" }}}
                    label="Total Floor"/>

                <TextField  
                  //  required
                   size="small"
                   id="outlined-required"
                   label="Area(sq.ft)"
                   type="text"
                   sx={{ maxWidth: { xs: "100%", md: "100%" }}}
                />
                <TextField 
                // required
                size="small"
                id="outlined-required"
                label="BHK"
                type="text"
                sx={{ maxWidth: { xs: "100%", md: "100%" }}}
                />

              <FormControl
               size="small"
               fullWidth
               sx={{ maxWidth: { xs: "100%", md: "100%" }}}
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
                    sx={{ maxWidth: { xs: "100%", md: "100%" }}}
                    label="Property Age"/>


                <FormControl  
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "100%" }}}>   

                <InputLabel>Furnishing</InputLabel>
                <Select
                fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={WardNumber}
                  label="Furnishing"
                  sx={{ maxWidth: { xs: "100%", md: "100%" }}}
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
                    sx={{ maxWidth: { xs: "100%", md: "100%" }}}
              />

          
            <FormControl   
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "100%" }}}>
                <InputLabel>Urgency</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={urgency}
                  label="Urgency"
                  sx={{ maxWidth: { xs: "100%", md: "100%" }}}
                  type="text"
                >
                  <MenuItem value="Very Urgent">Very Urgent</MenuItem>
                  <MenuItem value="not Urgent">not Urgent</MenuItem>
                                                    
                </Select>

            </FormControl>
            </Grid>
            <Typography variant='h2'
              className='responsive_fontsize18'
              margin='12px'
            > Price Range </Typography>
          
            <Grid item xs={12} md={6} sx={{display:'flex', textAlign:'center' ,alignItems:'center',justifyContent:'center',margin:'20px'}}>   
             
                <TextField 
                  id="standard-basic" 
                  size="small" 
                  sx={{ maxWidth: { xs: "30%", md: "7rem" },margin:'0 10px'}}
                  variant="standard" />
                <InputLabel>To</InputLabel>
                <TextField 
                  id="standard-basic" 
                  size="small" 
                  variant="standard"
                  sx={{ maxWidth: { xs: "30%", md: "7rem" },margin:'0 10px'}} />

            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "70%",sm:"50%", md: "50%" } ,margin:{xs:'10px 45px',sm:'10px 125px',md:'10px 125px'},textAlign:'center'}}
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
      open={openApartmentForm}
      onClose={() => setOpenApartmentForm(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <ApartmentForm/> {/* Render the form component */}
      </DialogContent>
    </Dialog>

    <Dialog
      open={OpenLandForm}
      onClose={() => setOpenLandForm(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <LandForm/> {/* Render the form component */}
      </DialogContent>
    </Dialog>
    </Box>
    </Box>
  );
}

export default PropertyRequest;
