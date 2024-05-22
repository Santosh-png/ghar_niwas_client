import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CustomFilterPanelContent from './filter_panel_content';
import { Modal, Typography } from '@mui/material';

function ToggleFilter() {
  const [alignment, setAlignment] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChangeToggle = (event, newAlignment) => {
    setAlignment(newAlignment);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-modal' : undefined;

  return (
    <>
      <ToggleButtonGroup
        color="secondary"
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
        {/* All Status toggle button */}
        <ToggleButton value="all status" aria-describedby={id}>
          <Typography className='responsive_fontsize16' sx={{ color: alignment === 'all status' ? 'white' : 'white' }}>All Status</Typography>
        </ToggleButton>

        {/* For Sale toggle button */}
        <ToggleButton value="for sale" aria-describedby={id}>
          <Typography className='responsive_fontsize16' sx={{ color: alignment === 'for sale' ? 'white' : 'white' }}>For Sale</Typography>
        </ToggleButton>

        {/* For Rent toggle button */}
        <ToggleButton value="for rent" aria-describedby={id}>
          <Typography className='responsive_fontsize16' sx={{ color: alignment === 'for rent' ? 'white' : 'white' }}>For Rent</Typography>
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Modal */}
      <Modal
        id={id}
        open={open}
        // anchorEl={anchorEl} - used for forward referencing (so commented out)
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
          display: {
            xs: "block",
            md: "none"
          }
        }}
      >
        <CustomFilterPanelContent  alignment={alignment} />
      </Modal>
    </>
  );
}

export default ToggleFilter;
