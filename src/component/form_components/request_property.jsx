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
          <IconButton>           
            <HouseIcon/>
          </IconButton>
          <IconButton>
            <ApartmentIcon/>
          </IconButton>
          <IconButton>
            <LandscapeIcon/>
          </IconButton>
  
        </Box>
       
      </Box>
      {/* Actual Form */}
      <Box sx={{ mt: "1rem" }}>
        <form >
         
            <Grid item xs={12} md={6}>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" },display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)'
                
               }}
                
              >                
                  <TextField
                    required
                    id="outlined-required"
                    label="provinces"
                    // defaultValue="Hello World"
                 />
                  <TextField
                    required
                    id="outlined-required"
                    label="zone"
                    // defaultValue="Hello World"
                 />
                  <TextField
                    required
                    id="outlined-required"
                    label="District"
                    // defaultValue="Hello World"
                 />
                  <TextField
                    required
                    id="outlined-required"
                    label="Municipality"
                    // defaultValue="Hello World"
                 />
                  <TextField
                    required
                    id="outlined-required"
                    label="Ward"
                    // defaultValue="Hello World"
                 />
                  <TextField
                    required
                    id="outlined-required"
                    label="Landmark"
                    // defaultValue="Hello World"
                 />

              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
            <InputLabel id="demo-simple-select-label">Property Detail</InputLabel>
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" }, display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)'}}
                
              >
                
                
               
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={requestType}
                  label="Type"
                  type="text"

                >
                  <MenuItem value="">commercial</MenuItem>
                  <MenuItem value="">2</MenuItem>               
                </Select>
                <TextField>Total Floor</TextField>
                <TextField>Property Area(sq.ft)</TextField>
                <TextField>BHK</TextField>
               
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={municipality}
                  label="Facing"
                   
                
                >
                  <MenuItem value="">North</MenuItem>
                  <MenuItem value="">South</MenuItem>
                  <MenuItem value="">East</MenuItem>
                  <MenuItem value="">West</MenuItem>
                 
                  
                </Select>
                <TextField required
                    id="outlined-required"
                    label="Property Age"/>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={WardNumber}
                  label="Furnishing"
                  type="text"
                >
                  <MenuItem value="">Non</MenuItem>
                  <MenuItem value="">Full</MenuItem>                  
                </Select>
              </FormControl>
            </Grid>
            <TextField
            //  required
                    id="outlined-required"
                    label="Road Size"
              />

           <Grid>
            <FormControl  sx={{ maxWidth: { xs: "100%", md: "14rem" },display:'flex',margin:'20px 0px' }}>
                <InputLabel>Urgency</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={urgency}
                  label="Urgency"
                  type="text"
                >
                  <MenuItem value="">Very Urgent</MenuItem>
                  <MenuItem value="">not Urgent</MenuItem>
                                                    
                </Select>

            </FormControl>
           </Grid>            
            <Grid item xs={12} md={6}>
              <InputLabel>Price Range</InputLabel>
              <TextField id="outlined-basic" variant="outlined" />
              <InputLabel>to</InputLabel>
              <TextField id="outlined-basic"  variant="outlined" />
            </Grid>


            <Grid item xs={12} md={6}>
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" } ,margin:'10px 0px'}}
              >
                <InputLabel id="demo-simple-select-label">
                  Description
                </InputLabel>
                <TextField
                    id="standard-multiline-static"                  
                    multiline
                    rows={4}
                 
                    variant="outlined"
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
