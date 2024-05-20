
import React from 'react';
import { Typography,Box, Grid, TextField, Button, IconButton,} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

// files
// import IconComponents from '../icon_component/icon_component';
import ButtonComponent from '../button_components/button';
import VerticalDivider from '../ui/divider';

function AddPropertyLand() {
  const type = [
    {
      value: 'plotted',
      label: 'Plotted'
    },
    {
      value: 'non-plotted',
      label: 'Non Plotted'
    },
  ]

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
  ]
  
  return (
    <div>
      {/* <IconComponents/> */}

      {/* Actual form */}
        <Box sx={{
            backgroundColor: 'accent.white',
            gap:"2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem 1rem"

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
            <Grid item xs={12} md={6} lg={3}>
            <FormControl
              size="small"
              fullWidth
            >
                <Box
                 sx={{ maxWidth: { xs: "100%", md: "100%" } ,display: 'grid',
                 gridTemplateColumns: 'repeat(2,1fr)', gap:'12px', 
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
                  label='Twist (Moda)'
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
                  label='Road Size'
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
                  
                </Box>
              </FormControl>
          </Grid>
        </Box>

        {/* description box */}
        <Box>
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
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              defaultValue="Write any additional information."
            /> 
                </FormControl>
            </Grid>
        </Box>


         {/* file upload gallery and map */}
         <Box sx={{
          display: {xs: "Column",sm: 'flex', md: "flex", lg: "flex"}
         }}
         
         >


          {/* gallery */}
          <Box sx={{mb: "1rem"}}>
            <Typography variant='h6'
                className='responsive_fontsize20'
                fontWeight='bold'
                marginBottom='12px'
                sx={{
                  opacity: "70%"
                }}
              >
                  Gallery
              </Typography>
              <Grid item xs={12} md={6} lg={3}>
                <FormControl
                  size="small"
                  fullWidth>
                  <Box
                  sx={{ maxWidth: { xs: "100%", md: "100%" } ,display: 'grid',
                  gridTemplateColumns: 'repeat(2,1fr)', gap:'12px'
                    }}
                  >
                  <Box sx={{
                    display: 'flex',
                    justifyContent: "center",
                    padding: "0.5rem",
                    ml: "0.5rem",
                    border: "1px solid black",
                    borderRadius: "5px",
                    opacity: "70%"
                  }}
                  > 
                        <Button component="label"
                          >
                            <AddToPhotosIcon className='gallery'
                              sx={{
                                height: "60px",
                                width: "60px",
                                mr: '0.8rem'
                              }}
                            />
                            <input
                              type="file"
                              hidden
                            />
                        </Button>
                        
                      <VerticalDivider/>

                      <Button component="label">
                            <VideoCallIcon className='gallery' sx={{
                                height: "60px",
                                width: "60px"
                              }}/>
                            <input
                              type="file"
                              hidden
                            />
                        </Button>
                    </Box>
                  </Box>
                  </FormControl>      
              </Grid>
          </Box>

          {/* map */}
          <Box
          >
          <Typography variant='h6'
              className='responsive_fontsize20'
              fontWeight='bold'
              marginBottom='12px'
              sx={{
                opacity: "70%"
              }}
            >
                Map
            </Typography>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl
                size="small"
                fullWidth>
                <Box
                 sx={{ maxWidth: { xs: "100%", md: "100%" } ,display: 'grid',
                 gridTemplateColumns: 'repeat(2,1fr)', gap:'12px'
                  }}
                >
                <Box sx={{
                  display: 'flex',
                  border: "1px solid black",
                  borderRadius: "5px",
                  opacity: "70%",
                  height:"auto",
                  width: "auto"
                }}
                >
                    {/* <Button component="label"> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28271.991916311705!2d85.29495851139528!3d27.655502971182738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb177f078f1cd9%3A0xb514415c5a76afb3!2sKusunti%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1715060575540!5m2!1sen!2snp" 
                            // width="100%"
                            // height="200" 
                            style={{ border: "0" }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                      {/* </Button> */}
                  </Box>
                </Box>
                </FormControl>      
            </Grid>
        </Box>
         </Box>
      </Box>
    </div>
  )
}

export default AddPropertyLand;
