import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function RequestForm() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 500,
        border: "1px solid #9e9e99",
        boxShadow: "5px 5px 5px #292C6A",
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2, // Adds space between items
      }}
    >
      <Typography className='responsive_fontsize24' sx={{ color: "primary.main", fontWeight: "600", textAlign: "center" }}>
        Contact Us For More Information
      </Typography>
      <TextField fullWidth placeholder="Name" id="name" variant="outlined" />
      <TextField fullWidth placeholder="Email" id="email" variant="outlined" />
      <TextField fullWidth placeholder="Phone Number" id="PhnNo" variant="outlined" />
      <TextField
        id="multiline"
        placeholder="I like this property..."
        multiline
        rows={4}
        fullWidth
        variant="outlined"
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Button variant="contained">Send Message</Button>
      </Box>
    </Box>
  );
}

export default RequestForm;
