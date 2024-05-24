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
      <Button className='responsive_fontsize14' sx={{height:{xs:"26px",sm:"30px",md:"33px"},width:{xs:"78px",sm:"85px",md:"100px"}}} variant="outlined" startIcon={<ShareIcon />}>
        Share
      </Button>
      <Button className='responsive_fontsize14' sx={{height:{xs:"26px",sm:"30px",md:"33px"},width:{xs:"78px",sm:"85px",md:"100px"}}} variant="contained" endIcon={<FavoriteIcon />}>
        Love
      </Button>
    </Stack>
    </div>
  );
}
export default ButtonShare;