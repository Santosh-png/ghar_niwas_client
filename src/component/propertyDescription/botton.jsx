import * as React from 'react';
import Button from '@mui/material/Button';
import {Box} from '@mui/material';
import Stack from '@mui/material/Stack';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ButtonShare() {
  return (
    <div style={{display:'flex',justifyContent:'flex-end',border:'2px solid blue'}}>
    <Stack direction="row" spacing={2} style={{border:'1px solid red'}}>   
      <Button variant="outlined" startIcon={<ShareIcon />}>
        Share
      </Button>
      <Button variant="contained" endIcon={<FavoriteIcon />}>
        Love
      </Button>
    </Stack>
    </div>
  );
}
export default ButtonShare;