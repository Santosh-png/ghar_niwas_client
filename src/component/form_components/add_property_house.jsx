import React, { useState } from 'react';
import { Typography,Box, Grid, TextField, Button,} from '@mui/material';
import IconComponents from '../icon_component/icon_component';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ButtonComponent from '../button_components/button';

function AddPropertyHome() {

  const [selected, setSelected] = React.useState('');

  const handleSelect = (event) => {
    setSelected(event.target.value);
  }

  const type = [
    {
      // value: 'none'
    },
    {
      value: 'commercial',
      label: 'Commercial'
    },
    {
      value: 'non-commercial',
      label: 'Non Commercial'
    },
  ]

  const facing = [
    {
      // value: 'none'
    },
    {
      value: 'north',
      label: 'North'
    },
    {
      value: 'south',
      label: 'South'
    },
    {
      value: 'east',
      label: 'East'
    },
    {
      value: 'west',
      label: 'West'
    },
  ]
  
  return (
    <div>
      <IconComponents/>

      {/* Actual form */}
        <Box sx={{
            backgroundColor: 'accent.white',
            gap:"2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem 2rem"

        }}>


          {/* Location */}
        <Box>
          <Typography variant='h4'
            className='responsive_fontsize26'
            fontWeight='bold'
            marginBottom='12px'
            
          >
              Location/Address
          </Typography>
          <Grid item xs={12} md={6} lg={3}
          >
            <FormControl
              size="small"
              fullWidth
            >
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


        {/* Property Details */}
        <Box>
        <Typography variant='h4'
            className='responsive_fontsize26'
            fontWeight='bold'
            marginBottom='12px'
            sx={{opacity: "90%"}}
          >
              Property Details
          </Typography>
          <Grid item xs={12} md={6} lg={3}
          >
            <FormControl
              size="small"
              fullWidth
            >
                <Box
                 sx={{ maxWidth: { xs: "100%", md: "100%" } ,display: 'grid',
                 gridTemplateColumns: 'repeat(2,1fr)', gap:'12px'
                }}
                >
                <TextField
                  id="outlined-select-type-select"
                  select
                  label="Type"
                  defaultValue= ''
                  SelectProps={{
                    native: true,
                  }}
                  fullWidth
                  size='small'
                >
                  {
                    type.map((option) => (
                      <option key= {option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  }
                </TextField>
                  
                <TextField
                  fullWidth
                  size='small'
                  id='outlined-required'
                  label='Total Floor'
                />
                
                <TextField
                  fullWidth
                  size='small'
                  id='outlined-required'
                  label='Property Area(aana)'
                />
                
                <TextField
                  fullWidth
                  size='small'
                  id='outlined-required'
                  label='Bedrooms'
                />

                <TextField
                  fullWidth
                  size='small'
                  id='outlined-required'
                  label='Kitchen'
                />

                <TextField
                  id="outlined-select-facing-select"
                  select
                  label="Facing"
                  defaultValue= ''
                  SelectProps={{
                    native: true,
                  }}
                  fullWidth
                  size='small'
                >
                  {
                    facing.map((option) => (
                      <option key= {option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  }
                </TextField>
                </Box>
              </FormControl>
          </Grid>
        </Box>


        {/* Price and amenities */}
        <Box>
        <Typography variant='h6'
            className='responsive_fontsize20'
            fontWeight='bold'
            marginBottom='12px'
            sx={{
              opacity: "70%"
            }}
          >
              Price Range
          </Typography>
          <Grid item xs={12} md={6} lg={3}
          >
            <FormControl
              size="small"
              fullWidth
            >
                <Box
                 sx={{ maxWidth: { xs: "100%", md: "100%" } ,display: 'grid',
                 gridTemplateColumns: 'repeat(2,1fr)', gap:'12px'
                }}
                >
                  
                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='Total Price'
                  />
                  

                  <FormControl sx={{ml: "2rem"}}> 
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={selected}
                    onChange={handleSelect}
                  >
                    <FormControlLabel value="fixed" control={<Radio />} label="Fixed" />
                    <FormControlLabel value="negotiable" control={<Radio />} label="Negotiable" />
                  </RadioGroup>
                </FormControl>
                </Box>
              </FormControl>
          </Grid>
        </Box>


        {/* furnishing */}
        <Box>
          <Typography variant='h4'
              className='responsive_fontsize24'
              fontWeight='bold'
              marginBottom='12px'
              sx={{
                opacity: "70%"
              }}
            >
                Furnishing
            </Typography>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl
                size="small"
                fullWidth
              >
                  <Box
                    sx={{ maxWidth: { xs: "100%", md: "100%" } ,
                    }}
                  >
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={selected}
                        onChange={handleSelect}
                        defaultValue="furnished"
                      >
                        <FormControlLabel value="furnished" control={<Radio />} label="Furnished"/> 
                        <FormControlLabel value="non-furnished" control={<Radio />} label="Non-Furnished" />
                        <FormControlLabel value="semi-furnished" control={<Radio />} label="Semi-Furnished" />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </FormControl>
            </Grid>
        </Box>

        {/* parking */}
        <Box>
          <Typography variant='h4'
              className='responsive_fontsize24'
              fontWeight='bold'
              marginBottom='12px'
              sx={{
                opacity: "70%"
              }}
            >
                Parking
            </Typography>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl
                size="small"
                fullWidth
              >
                  <Box
                  sx={{ maxWidth: { xs: "100%", md: "100%"}
                  }}
                  >
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={selected}
                        onChange={handleSelect}
                        defaultValue="furnished"
                      >
                        <FormControlLabel value="bike" control={<Radio />} label="Bike 2+"/> 
                        <FormControlLabel value="car" control={<Radio />} label="Car 2+" />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </FormControl>
            </Grid>
        </Box>

        {/* Bathrooms */}
        <Box>
          <Typography variant='h4'
              className='responsive_fontsize24'
              fontWeight='bold'
              marginBottom='12px'
              sx={{
                opacity: "70%"
              }}
            >
                Bathrooms
            </Typography>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl
                size="small"
                fullWidth
              >
                  <Box
                  sx={{ maxWidth: { xs: "100%", md: "100%"}
                  }}
                  >
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={selected}
                        onChange={handleSelect}
                        defaultValue="attached"
                      >
                        <FormControlLabel value="attached" control={<Radio />} label="Attached 2+"/> 
                        <FormControlLabel value="common" control={<Radio />} label="Common 2+" />
                      </RadioGroup>
                      
                    </FormControl>
                  </Box>
                </FormControl>

            </Grid>
        </Box>

        {/* Amenitites */}
        <Box
        >
          <Typography variant='h4'
              className='responsive_fontsize24'
              fontWeight='bold'
              marginBottom='12px'
              sx={{
                opacity: "70%"
              }}
            >
                Amenities
            </Typography>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl
                size="small"
                fullWidth
              >
                  <Box
                  sx={{ maxWidth: { xs: "100%", md: "100%"},
                  }}
                  >
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={selected}
                        onChange={handleSelect}
                        defaultValue="attached"
                        sx={{
                          border: "1px solid black",
                          borderRadius: "5px",
                          display: "flex",
                          padding:"1rem"
                        }}
                      >
                        <FormControlLabel value="attached" control={<Radio />} label="Attached 2+"/> 
                        <FormControlLabel value="common" control={<Radio />} label="Common 2+" />
                        <FormControlLabel value="attached" control={<Radio />} label="Attached 2+"/> 
                        <FormControlLabel value="common" control={<Radio />} label="Common 2+" />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </FormControl>
            </Grid>
        </Box>

        {/* description box */}
        <Box
        >
          <Typography variant='h4'
              className='responsive_fontsize24'
              fontWeight='bold'
              marginBottom='12px'
              sx={{
                opacity: "70%"
              }}
            >
                Description
            </Typography>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl
                size="small"
                fullWidth
              >

                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='If any more details'
                  />
                </FormControl>
            </Grid>
        </Box>
          <ButtonComponent >Submit</ButtonComponent>
      </Box>
    </div>
  )
}

export default AddPropertyHome;
