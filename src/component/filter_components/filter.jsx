import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography, Box } from '@mui/material';


import './filter.css'
import ToggleFilter from './toggle_filter';
import ButtonComponent from '../button_components/button';

function CustomFilterPanelContent() {
  const [property, setProperty] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [maxamount, setMaxAmount] = React.useState('');

  const handleChangeProperty = (event) => {
    setProperty(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };


  const handleChangeMaximum = (event) => {
    setMaxAmount(event.target.value);
  };

  return (
    <div className='fitering'>
    <ToggleFilter />
        <Box className = "filter_section"
            sx={{
                display: {
                    xs: 'column'
                }
            }}
        >
        <Box className="select">
            <Typography>Looking For</Typography>
            <FormControl sx={{mr: '1rem', minWidth: 200 }} size='small'>
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
        <Typography className='responsive_fontsize20'> Locations</Typography>
        <FormControl sx={{mr: "1rem", minWidth: 200 }} size="small">
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
        <FormControl sx={{mr: "1rem", minWidth: 200 }} size="small">
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

        
        <ButtonComponent/>
    </Box>
    </div>
  );
}

export default CustomFilterPanelContent;