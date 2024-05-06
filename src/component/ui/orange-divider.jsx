import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function FlexDivider() {
  return (
    <Box
      sx={{
        display: 'flex',
       
        border: '3px solid black '
      }}
    >
      <Divider orientation="vertical" variant="middle"  />
    
    </Box>
  );
}
