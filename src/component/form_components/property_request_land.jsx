import React, { useState }  from "react";
import HouseIcon from '@mui/icons-material/House';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LandscapeIcon from '@mui/icons-material/Landscape';

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
} from "@mui/material";




function PropertyRequest() {

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
          <IconButton 
           >           
            <HouseIcon  />
          </IconButton>
          <IconButton  
            >
            <ApartmentIcon/>
          </IconButton>
          <IconButton 
           sx={{backgroundColor:"white",boxShadow:" 0px 4px 4px 0px #292C6A"}}>
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
                    // defaultValue="Hello World"
                 />
                  <TextField
                    // required
                    size="small"
                    id="outlined-required"
                    label="zone"
                    // defaultValue="Hello World"
                 />
                  <TextField
                    // required
                    size="small"
                    id="outlined-required"
                    label="District"
                    // defaultValue="Hello World"
                 />
                  <TextField
                    // required
                    size="small"
                    id="outlined-required"
                    label="Municipality"
                    // defaultValue="Hello World"
                 />
                  <TextField
                  size="small"
                    // required
                    id="outlined-required"
                    label="Ward"
                    // defaultValue="Hello World"
                 />
                  <TextField
                    // required
                    size="small"
                    id="outlined-required"
                    label="Landmark"
                    
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
                  <MenuItem value="">commercial</MenuItem>
                  <MenuItem value="">non commercial</MenuItem>               
                </Select>
             
               </FormControl>
                <TextField  
                    // required
                    size="small"
                    id="outlined-required"
                    sx={{ maxWidth: { xs: "100%", md: "12rem" }}}
                    label="Road Size"/>

                <TextField  
                  //  required
                   size="small"
                   id="outlined-required"
                   label="Area(sq.ft)"
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
                  <MenuItem value="">North</MenuItem>
                  <MenuItem value="">South</MenuItem>
                  <MenuItem value="">East</MenuItem>
                  <MenuItem value="">West</MenuItem>
                 
                  
                </Select>
               </FormControl> 
               <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "12rem" }}}
              >
                <InputLabel>Sewage</InputLabel>
               <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Sewage"
                  // onChange={handleChange}
                >
                  <MenuItem value="">Yes</MenuItem>
                  <MenuItem value="">No</MenuItem>
                 
                  
                </Select>
               </FormControl> 
               <FormControl
               size="small"
               fullWidth
               sx={{ maxWidth: { xs: "100%", md: "12rem" }}}
              >
                <InputLabel>Sewage</InputLabel>
               <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
               label="Sewage"
                  // onChange={handleChange}
                >
                  <MenuItem value="">Yes</MenuItem>
                  <MenuItem value="">No</MenuItem>
                 
                  
                </Select>
               </FormControl> 
                <FormControl  
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" }}}>   

                <InputLabel>Electricity</InputLabel>
                <Select
                fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={WardNumber}
                  label="Electricity"
                  type="text"
                >
                  <MenuItem value="">Yes</MenuItem>
                  <MenuItem value="">No</MenuItem>                  
                </Select>
              </FormControl>
              <FormControl  
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" }}}>   

                <InputLabel>Drinking Water</InputLabel>
                <Select
                fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={WardNumber}
                  label="Drinking Water"
                  type="text"
                >
                  <MenuItem value="">Yes</MenuItem>
                  <MenuItem value="">No</MenuItem>                  
                </Select>
              </FormControl>
           

          
            <FormControl   
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" }}}>
                <InputLabel>Urgent</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={urgency}
                  label="Urgent"
                  type="text"
                >
                  <MenuItem value="">Very Urgent</MenuItem>
                  <MenuItem value="">not Urgent</MenuItem>
                                                    
                </Select>

            </FormControl>
            </Grid>
           
            <Grid item xs={12} md={6} sx={{display:'flex',margin:'20px'}}>   
            <InputLabel>Price Range</InputLabel>
                <TextField 
                  id="standard-basic" 
                  size="small" 
                  sx={{ maxWidth: { xs: "100%", md: "7rem" }}}
                  variant="standard" />
                <InputLabel>To</InputLabel>
                <TextField 
                  id="standard-basic" 
                  size="small" 
                  variant="standard"
                  sx={{ maxWidth: { xs: "100%", md: "7rem" }}} />

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
    </Box>
    </Box>
  );
}

export default PropertyRequest;
