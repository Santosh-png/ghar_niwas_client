import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


function SearchBar() {
  const [property, setProperty] = React.useState('');

  
  const handleChangeProperty = (event) => {
    event.preventDefault();
    setProperty(event.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', 
      boxShadow:"4px 4px 7px #292C6A",
      width: '100%',marginBottom:'20px'
      }}
    >
      <FormControl sx={{minWidth:{xs:"100px",md:"200px"}}} size='small'>
                <InputLabel sxid="demo-select-small-label">Property Type</InputLabel>
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


      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Type a Keyword"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary.main" sx={{ p: '10px' }} aria-label="directions">
        <p className='responsive_fontsize24'>Search</p>
      </IconButton>
    </Paper>
  );
}
export default SearchBar;