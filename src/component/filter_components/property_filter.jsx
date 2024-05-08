import React from 'react';
import { Box } from '@mui/material';

import ToggleFilter from './toggle_filter'
import CustomFilterPanelContent from './filter_panel_content'

function PropertyFilter() {
  return (
    <div>
        <ToggleFilter />
        <Box
            sx={{
                display: {
                    xs: "none" , md : 'flex'
                }
            }}
        >
            <CustomFilterPanelContent />
        </Box>
    </div>
  )
}

export default PropertyFilter
