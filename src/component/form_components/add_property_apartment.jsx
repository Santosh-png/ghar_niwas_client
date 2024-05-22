
import React from 'react';
import { Typography,Box, Grid, TextField, Button, IconButton,} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

import VerticalDivider from '../ui/divider';
import FileUpload from '../icon_component/file_upload_cotent';

function AddPropertyApartment() {
  const [selected, setSelected] = React.useState('');
  const handleSelect = (event) => {
    setSelected(event.target.value);
  }
  const type = [
    {
      value: 'commercial',
      label: 'Commercial'
    },
    {
      value: 'non-commercial',
      label: 'Non Commercial'
    },
  ];

  const facing = [
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
  ];
  return (
    <div>
      {/* Actual form */}
    <Box sx={{
        backgroundColor: 'accent.white',
        gap:"2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem 0.5rem"
        }}>

          {/* Location */}
          <Box>
            <Typography variant='h4'
              className='responsive_fontsize26'
              fontWeight='bold'
              marginBottom='12px'
            > Location/Address </Typography>
            <FormControl size="small" fullWidth>
                <Box
                 sx={{display: 'grid',
                 gridTemplateColumns: {xs:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(2,1fr)'}, gap:'12px'
               }}>
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
        </Box>

        {/* Property Details */}
        <Box>
        <Typography variant='h4'
            className='responsive_fontsize26'
            fontWeight='bold'
            marginBottom='12px'
            sx={{opacity: "90%"}}
          > Property Details </Typography>
            <FormControl size="small" fullWidth>
                <Box
                 sx={{display: 'grid',
                 gridTemplateColumns: {xs:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(2,1fr)'}, gap:'12px'
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
            <FormControl size="small" fullWidth >
                <Box
                 sx={{display: 'grid',
                 gridTemplateColumns: {xs:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(2,1fr)'},
               }}
                > 
                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='Total Price'
                  />
                  <FormControl> 
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
              <FormControl size="small"  fullWidth >
                  <Box sx={{display: 'grid',
                 gridTemplateColumns: {xs:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(2,1fr)'}, gap:'12px'
               }}>
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
              <FormControl size="small" fullWidth >
                  <Box sx={{display: 'grid',
                 gridTemplateColumns: {xs:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(2,1fr)'}, gap:'12px'
               }}>
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
              <FormControl size="small" fullWidth>
                  <Box sx={{display: 'grid',
                 gridTemplateColumns: {xs:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(2,1fr)'},
               }}>
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
        </Box>

        {/* Amenitites */}
        <Box>
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
              <FormControl size="small" fullWidth>
                  <Box sx={{display: 'grid',
                 gridTemplateColumns: {xs:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(2,1fr)'}, gap:'12px'
               }}>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={selected}
                        onChange={handleSelect}
                        defaultValue="attached"
                        sx={{
                          borderRadius: "5px",
                          display: "flex",
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
        </Box>

        {/* description box */}
        <Box>
          <Typography variant='h4'
              className='responsive_fontsize24'
              fontWeight='bold'
              marginBottom='12px'
              sx={{opacity: "70%"}}
            > Description </Typography>
                <FormControl size="small" fullWidth>
                    <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue="Write any additional information."
                    /> 
                </FormControl>
        </Box>
          {/* gallery */}
          <Box sx={{mb: "1rem" }}>
            <Typography variant='h6'
                className='responsive_fontsize20'
                fontWeight='bold'
                marginBottom='12px'
                sx={{
                  opacity: "70%"
                }}
              > Gallery </Typography>
                <FormControl size="small" fullWidth>
                <Box>
                    <FileUpload/>
                  </Box>
                </FormControl>
          </Box>

          {/* map */}
          <Box>
            <Typography variant='h6'
                className='responsive_fontsize20'
                fontWeight='bold'
                marginBottom='12px'
                sx={{
                    opacity: "70%"
                }}
                >Map</Typography>
                    <FormControl size="small" fullWidth>
                        <Box >
                            <Box sx={{ 
                             display: 'flex',
                              borderRadius: "5px",
                              opacity: "70%",
                              height:"auto",
                              maxWidth:"100%",
                              width:"100%",
                              overflow: "hidden",
                              border: '1px solid black'
                            }}
                            >
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28271.991916311705!2d85.29495851139528!3d27.655502971182738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb177f078f1cd9%3A0xb514415c5a76afb3!2sKusunti%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1715060575540!5m2!1sen!2snp" 
                                style={{borderRadius:"5px", border: "0", width:"100%"}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </Box>
                        </Box>
                </FormControl>  
        </Box>
    </Box>
    </div>
  )
}
export default AddPropertyApartment;
