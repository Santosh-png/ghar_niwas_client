import React from 'react';
import { Button} from '@mui/material';

function ButtonComponent({ children, ...props }) {
  return (
    <div>
        <Button variant="contained" 
        className='responsive_fontsize20'
                sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    padding: "0.3rem 1rem",                   
                    minWidth:{
                      xs: 65, sm: 90, md: 120
                    },
                    fontFamily: 'Roboto Serif',
                }}
            >
                      {children}
            </Button>
    </div>
  )
}

export default ButtonComponent;
