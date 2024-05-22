
import React from 'react';
import { Typography,Box, Grid, TextField, Button, IconButton,} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

import VerticalDivider from '../ui/divider';

function AddPropertyHome() {
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
        alignItems: "center",
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
                
                <Grid container sx={{display: "flex",
        // justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",  xs: "100%", md: "100%"}}>
                <Grid item xs={12} sm = {6} md={3} lg={2} fullWidth>
                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='Province'
                  />
                  </Grid>

                  <Grid item xs={12} sm = {6} md={3} lg={2}>
                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='Zone'
                  />
                  </Grid>
                  
                  <Grid item xs={12} sm = {6} md={3} lg={2}>
                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='District'
                  />
                  </Grid>
                
                <Grid item xs={12} sm = {6} md={3} lg={2}>
                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='Municipality'
                  />
                </Grid>

                <Grid item xs={12} sm = {6} md={3} lg={2}>
                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='Ward'
                  />
                </Grid>

                <Grid item xs={12} sm = {6} md={3} lg={2}>
                  <TextField
                    fullWidth
                    size='small'
                    id='outlined-required'
                    label='Landmark'
                  />
                </Grid>

            </Grid>
            </FormControl>
        </Box>
        </Box>
    </div>
  )
}
export default AddPropertyHome;
