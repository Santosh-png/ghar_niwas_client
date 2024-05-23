import React from 'react';
import { Button} from '@mui/material';

function ButtonComponent({  onClick, children, ...props }) {
  return (
    <div>
        <Button variant="contained" 
          onClick={onClick}
          className='responsive_fontsize20'
                sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    padding: "0.3rem 1rem",                   
                    minWidth:{
                      xs: 65, sm: 90, md: 120
                    },
                    fontFamily: 'Roboto Serif',
                    '&:hover': {
                      backgroundColor: 'secondary.main',
                    },
                }}
            >
                      {children}
            </Button>
    </div>
  )
}

export default ButtonComponent;
