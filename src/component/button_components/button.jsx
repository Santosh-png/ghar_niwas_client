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
                    minWidth: 150,
                    fontFamily: 'Roboto Serif',
                    // mt: "2rem"
                }}
            >
                      {children}
            </Button>
    </div>
  )
}

export default ButtonComponent;
