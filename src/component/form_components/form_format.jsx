import React from 'react';
import { Box, Typography } from '@mui/material';
import IconComponents from '../icon_component/icon_component';
import AddPropertyHome from './add_property_house';

function FormFormat() {
  return (
    <div>
      <Box>
        <IconComponents/>
        <AddPropertyHome/>
      </Box>
    </div>
  )
}

export default FormFormat

