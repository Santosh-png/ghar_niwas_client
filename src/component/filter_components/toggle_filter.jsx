import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ButtonComponent from '../button_components/button';

function ToggleFilter() {
    const [alignment, setAlignment] = React.useState('web');

  const handleChangeToggle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
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
            <ToggleButton value="all status" sx={{color: "white"}}>All Status</ToggleButton>
            <ToggleButton value="for sale" sx={{color: "white"}}>For Sale</ToggleButton>
            <ToggleButton value="for rent" sx={{color: "white"}}>for Rent</ToggleButton>
        </ToggleButtonGroup>
  </>
  )
}

export default ToggleFilter
