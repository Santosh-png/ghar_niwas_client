import * as React from 'react';
import Button from '@mui/material/Button';
import {Box} from '@mui/material';
import Stack from '@mui/material/Stack';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ButtonShare() {
  return (
    <div style={{display:'flex',marginTop:'10px'}}>
    <Stack direction="row" spacing={2} >   
      <Button className='responsive_fontsize14' variant="outlined" startIcon={<ShareIcon />}>
        Share
      </Button>
      <Button className='responsive_fontsize14' variant="contained" endIcon={<FavoriteIcon />}>
        Love
      </Button>
    </Stack>
    </div>
  );
}
export default ButtonShare;