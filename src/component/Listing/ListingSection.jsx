import React from "react";
import Divider from '@mui/material/Divider';

import {
    Box,
    Typography
} from "@mui/material";
import Listing from "./listingService";
import HorizontalDivider from "../ui/HorizontalDivider";
function ListSection(){
    return(
        <Box sx={{marginTop:"80px", width:"100%"}}>
        {/* first box */}
  
        <Box
          sx={{
            // backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "68px",
            width:'100%'
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
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
             Listing
          </Typography>
          <HorizontalDivider />
          </Box>
        </Box>
        {/* second Box */}
        <Box sx={{ display: "flex", width: "100%", flexDirection: "row" }}>
          <Listing/>
  
        </Box>
      </Box>
    )
}
export default ListSection;