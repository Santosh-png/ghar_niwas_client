import React from 'react';
import { Box, Typography } from '@mui/material';
import IconComponents from '../icon_component/icon_component';

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

    <IconComponents/>
    </Box>
    </div>
  )
}

export default FormFormat

