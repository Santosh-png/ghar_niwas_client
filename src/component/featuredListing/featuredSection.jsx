import React from "react";
import Divider from '@mui/material/Divider';

import {
    Box,
    Typography
} from "@mui/material";
import FeaturedList from './featuredListingService';
import HorizontalDivider from "../ui/HorizontalDivider";
function FeaturedSection(){
    return(
        <Box sx={{marginTop:"20px",border:'1px solid red'}}>
      {/* first box */}

      <Box
        sx={{
          // backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",marginBottom:'2rem'}}>
        <HorizontalDivider />
        <Typography
          sx={{
            fontSize: "32px",
            color: "secondary.secondary_600",
            fontFamily: "fontFamily",
            fontWeight:"bold",
            padding:"10px",
            textAlign:"center",
            letterSpacing:"1px",
          }}
        >
          Featured Listing
        </Typography>
        <HorizontalDivider />
        </Box>
      </Box>
      {/* second Box */}
      <Box sx={{ display: "flex", width: "100%", flexDirection: "row" }}>
        <FeaturedList/>

      </Box>
    </Box>
    )
}
export default FeaturedSection;