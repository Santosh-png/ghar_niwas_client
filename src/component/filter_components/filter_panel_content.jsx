import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography, Box} from '@mui/material';


import './filter.css'
import ButtonComponent from '../button_components/button';

function CustomFilterPanelContent() {
  const [property, setProperty] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [maxamount, setMaxAmount] = React.useState('');

  const handleChangeProperty = (event) => {
    event.preventDefault();
    setProperty(event.target.value);
  };

  const handleChangeLocation = (event) => {
    event.preventDefault();
    setLocation(event.target.value);
  };


  const handleChangeMaximum = (event) => {
    event.preventDefault();
    setMaxAmount(event.target.value);
  };

  return (
    <div className='fitering'>
      <Box className="filter_section" sx={{
        display: {md: "flex"},
        gap: "2rem"
        }}>
        <Box className="select" >
            <Typography>Looking For</Typography>
            <FormControl sx={{minWidth: 200 }} size='small'>
                <InputLabel id="demo-select-small-label">Property Type</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={property}
                    label="Property"
                    onChange={handleChangeProperty}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Land</MenuItem>
                <MenuItem value={20}>House</MenuItem>
                <MenuItem value={30}>Apartment</MenuItem>
                <MenuItem value={30}>Flat</MenuItem>
            </Select>
            </FormControl>
        </Box>


        <Box className="select">
            <Typography> Locations</Typography>
            <FormControl sx={{ minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">All Cities</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={location}
                label="All Citites"
                onChange={handleChangeLocation}
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Kathmandu</MenuItem>
                <MenuItem value={20}>Bhaktapur</MenuItem>
                <MenuItem value={30}>Lalitpur</MenuItem>
            </Select>
            </FormControl>
        </Box>

        <Box className="select">
            <Typography>Price Range</Typography>
            <FormControl sx={{minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Price Range</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={maxamount}
                label="Amount"
                onChange={handleChangeMaximum}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>$Ten</MenuItem>
                <MenuItem value={20}>$Twenty</MenuItem>
                <MenuItem value={30}>$hirty</MenuItem>
            </Select>
            </FormControl>
        </Box>
          <ButtonComponent>Filter</ButtonComponent>
      </Box>
    </div>
  );
}

export default CustomFilterPanelContent;