import React from 'react';
import { Box, Typography } from '@mui/material';

function FormFormat() {
  return (
    <div>
      <Box>
    <Box
        sx={{
            Padding: "2rem"
        }}
    >
        <Typography variant='h2' 
            fontWeight='bold'
            textAlign='center'
            color='primary.main'
            className='responsive_fontsize26'
            sx={{
                backgroundColor:"white",
            }}
        >
            Add Your Property
        </Typography>
    </Box>
    </Box>
    </div>
  )
}

export default FormFormat

