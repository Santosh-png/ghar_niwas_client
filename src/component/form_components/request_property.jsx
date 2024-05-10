// import { useState } from "react";
// import { useState } from "react";
import React  from "react";

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
} from "@mui/material";


function PropertyRequest() {

  return (
    <div>
      {/* Heading */}
      <Box
        sx={{
          textAlign:"center"
        }}
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
       
      </Box>
      {/* Actual Form */}
      <Box sx={{ mt: "1rem" }}>
        <form >
         
            <Grid item xs={12} md={6}>
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                
              >
                <InputLabel id="demo-simple-select-label">Request Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={requestType}
                  label="Request Type"

                  // onChange={handleChange}
                >
                  <MenuItem value="">Buy</MenuItem>
                  <MenuItem value="female">Rent</MenuItem>
                  
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" },display:'flex',margin:'20px 0px' }}
                
              >
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                {/* <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={province}
                  label="Location"

                  // onChange={handleChange}
                >
                  <MenuItem value="">Lalitpur,kusunti</MenuItem>
                  <MenuItem value="">Kathmandu,kalanki</MenuItem>
                  
                </Select> */}
               
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={requestType}
                  label="province"
                  type="number"

                >
                  <MenuItem value="">1</MenuItem>
                  <MenuItem value="">2</MenuItem>
                  <MenuItem value="">3</MenuItem>
                  <MenuItem value="">4</MenuItem>
                  <MenuItem value="">5</MenuItem>
                  <MenuItem value="">6</MenuItem>
                  <MenuItem value="">7</MenuItem>
                  
                </Select>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={district}
                  label="District"

                >
                  <MenuItem value="">Lalitpur</MenuItem>
                  <MenuItem value="">Bardiya</MenuItem>
                  <MenuItem value="">Kaski</MenuItem>
                  <MenuItem value="">Baglung</MenuItem>
                  <MenuItem value="">Chitwan</MenuItem>
                  
                </Select>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={municipality}
                  label="Municipality"
                   
                
                >
                  <MenuItem value="">Madhyabindu</MenuItem>
                  <MenuItem value="">Bharatpur</MenuItem>
                 
                  
                </Select>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={WardNumber}
                  label="Ward No."
                  type="number"
                >
                  <MenuItem value="">1</MenuItem>
                  <MenuItem value="">2</MenuItem>
                  <MenuItem value="">3</MenuItem>
                  <MenuItem value="">4</MenuItem>
                 
                  
                </Select>
              </FormControl>
            </Grid>
            <Grid>
                <FormControl sx={{ maxWidth: { xs: "100%", md: "14rem" },display:'flex',margin:'20px 0px' }}>
                <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
                <Select
                fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                //   value={PropertyType}
                  label="Property Type"
                  type="text"
                >
                  <MenuItem value="">House</MenuItem>
                  <MenuItem value="">Apartment</MenuItem>
                  <MenuItem value="">Land</MenuItem>
                                   
                </Select>

                </FormControl>
            </Grid>
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
                Request in
              </Button>
            </Grid>
          
    </form>
    </Box>
    </div>
  );
}

export default PropertyRequest;
