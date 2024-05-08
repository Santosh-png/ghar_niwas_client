import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Popover from '@mui/material/Popover';
import CustomFilterPanelContent from './filter_panel_content';
import { Box } from '@mui/material';

function ToggleFilter() {
    const [alignment, setAlignment] = React.useState('all status');
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangeToggle = (event, newAlignment) => {
    event.preventDefault();
    setAlignment(newAlignment);
  };

  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default behavior
    setAnchorEl(event.currentTarget);
  };
  

  const handleClose = (event) => {
    event.preventDefault(); // Prevent the default behavior
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
                mt: "9rem",
                gap: "1rem",
                opacity: "80%"
            }}
            >
            <ToggleButton value="all status"
              aria-describedby ={id}
              variant='contained'
              onClick={handleClick}
            >
              All Status
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
                  <Box>
                    <CustomFilterPanelContent/>
                  </Box>
            </Popover>

            <ToggleButton value="for sale" sx={{color: "white"}}>For Sale</ToggleButton>
            <ToggleButton value="for rent" sx={{color: "white"}}>for Rent</ToggleButton>
        </ToggleButtonGroup>
  </>
  )
}

export default ToggleFilter;
