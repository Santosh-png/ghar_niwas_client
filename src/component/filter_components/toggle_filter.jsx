import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Popover from '@mui/material/Popover';

import CustomFilterPanelContent from './filter_panel_content';
import { Typography } from '@mui/material';

function ToggleFilter() {
    const [alignment, setAlignment] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangeToggle = (event, newAlignment) => {
      setAlignment(newAlignment);
  };

  const handleAllStatusClick = (e) => {
    setAlignment(prevAlignment => prevAlignment === 'all status' ? null : 'all status'); 
    setAnchorEl(e.currentTarget)
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return(
  <>
        <ToggleButtonGroup
            color='secondary'
            value={alignment}
            exclusive
            onChange={handleChangeToggle}
            aria-label="Platform"
            sx={{
                background: "#656A29",
                mt: "6rem",
                opacity: "80%"
            }}
        >

          {/* all status toggle button  */}
            <ToggleButton value="all status"
              aria-describedby ={id}
              onClick={handleAllStatusClick} 
              sx={{
                color: alignment === 'all status' ? 'white' : 'white', // Change color if selecteD
              }}
              >
              <Typography className='responsive_fontsize16' >All Status</Typography>
            </ToggleButton>
            <Popover
              id={id}
              open= {open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left', // Align with the left side of the button
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left', // Align with the left side of the button
              }}
              sx={{
                display:{
                  md: "none"
                }
              }}
            >
              <CustomFilterPanelContent/>
            </Popover>


          {/* For sale toggle button */}
            <ToggleButton value="all status"
              aria-describedby ={id}
              onClick={handleAllStatusClick} 
              sx={{
                color: alignment === 'all status' ? 'white' : 'white', // Change color if selecteD
              }}
              >
              <Typography className='responsive_fontsize16' >For Sale</Typography>
            </ToggleButton>
            <Popover
              id={id}
              open= {open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left', // Align with the left side of the button
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left', // Align with the left side of the button
              }}
              sx={{
                display:{
                  md: "none"
                }
              }}
            >
              <CustomFilterPanelContent/>
            </Popover>
            

            {/* For rent toggle button */}
            <ToggleButton value="all status"
              aria-describedby ={id}
              onClick={handleAllStatusClick} 
              sx={{
                color: alignment === 'all status' ? 'white' : 'white', // Change color if selecteD
              }}
              >
              <Typography className='responsive_fontsize16' >For Rent</Typography>
            </ToggleButton>
            <Popover
              id={id}
              open= {open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left', // Align with the left side of the button
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left', // Align with the left side of the button
              }}
              sx={{
                display:{
                  md: "none"
                }
              }}
            >
              <CustomFilterPanelContent/>
            </Popover>

            
        </ToggleButtonGroup>
  </>
  )
}

export default ToggleFilter;
