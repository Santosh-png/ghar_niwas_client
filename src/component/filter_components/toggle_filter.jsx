import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Popover from '@mui/material/Popover';

import filter_data from './filter_data';
import CustomFilterPanelContent from './filter_panel_content';
import PremiumSection from '../premiumListing/premiumListingSection';
import PremiumCard from '../premiumListing/PremiumCard';

function ToggleFilter() {
    const [alignment, setAlignment] = React.useState('all status');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [filteredData, setFilteredData] = useState(filter_data);

  const handleChangeToggle = (event, newAlignment) => {
      setAlignment(newAlignment);
      filterData(newAlignment);
  };

  const handleAllStatusClick = (e) => {
    setAlignment(prevAlignment => prevAlignment === 'all status' ? null : 'all status'); 
    setAnchorEl(e.currentTarget)
    filterData('all status')
  };
  

  const filterData = (status) => {
    if(status === 'all status') {
      setFilteredData(filter_data);
    }
    else if(status === 'sale'){
      setFilteredData(filter_data);
    }
    else{
      const filtered = filter_data.filter(item => item.status === status);
      setFilteredData(filtered);
    }
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
                mt: "9rem",
                opacity: "80%"
            }}
            >
            <ToggleButton value="all status"
              aria-describedby ={id}
              onClick={handleAllStatusClick} 
              sx={{
                color: alignment === 'all status' ? 'white' : 'white', // Change color if selecteD
              }}
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
              <CustomFilterPanelContent/>
            </Popover>

            <ToggleButton value="for sale" sx={{color: "white"}}>
              For Sale</ToggleButton>
            <ToggleButton value="for rent" sx={{color: "white"}}>for Rent</ToggleButton>
        </ToggleButtonGroup>


        {/* Displaying filtered data */}
        {filteredData.map(item => (
          <div key={item.id}>
            {/* <a href={PremiumCard} target= ''>hello</a> */}
          </div>
        ))}
  </>
  )
}

export default ToggleFilter;
