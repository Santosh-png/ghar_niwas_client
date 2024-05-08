import React from 'react';
import { Button} from '@mui/material';

function ButtonComponent() {
  return (
    <div>
        <Button variant="contained" 
                sx={{
                    // display: {xs: 'none', md: "flex"},
                    backgroundColor: "primary.main",
                    color: "white",
                    minWidth: 150,
                    fontStyle:"inherit",
                    mt: "2rem"
                }}
            >
                Filter
            </Button>
    </div>
  )
}

export default ButtonComponent;
