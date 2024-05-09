import React from 'react'
import { Box, Typography } from '@mui/material';

function FilteredSection(props) {
    const { children, value, index, ...other } = props;

  return (
    <div>
        <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
    </div>
  )
}

export default FilteredSection
