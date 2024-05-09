import React from "react";
import Divider from '@mui/material/Divider';

import {
    Box,
    Typography
} from "@mui/material";
import FeaturedList from '../card/cardServices';
import HorizontalDivider from "../ui/HorizontalDivider";
function FeaturedSection(){
    return(
        <Box sx={{marginTop:"20px",border:'1px solid red',
          backgroundColor:'greenyellow'
        }}>
      {/* first box */}

      {/* <Box
        sx={{
          // backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
        }}
      > */}
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",marginBottom:'1rem', marginTop:'30px',
          backgroundColor:"palegreen"
        }}>
        <HorizontalDivider />
        <Typography className="responsive_fontsize32"
          sx={{
            // color: "secondary.secondary_600",
            fontWeight:"bold",
            padding:"10px",
            textAlign:"center",
            letterSpacing:"1px",
            color:'primary.main',
           
          }}
        >
          Featured Listing
        </Typography>
        <HorizontalDivider />
        {/* </Box> */}
      </Box>
      {/* second Box */}
      <Box sx={{ display: "flex", width: "100%", flexDirection: "row" }}>
        <FeaturedList/>
      </Box>
    </Box>
    )
}
export default FeaturedSection;