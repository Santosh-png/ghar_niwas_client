import React from "react";
import Divider from '@mui/material/Divider';
import {
    Box,
    Typography
} from "@mui/material";
import PremiumList from "./premiumListingService";
import HorizontalDivider from "../ui/HorizontalDivider";
// import PremiumCard from "./PremiumCard";
function PremiumSection() {
    return (
        <Box sx={{marginTop:"0px",border:'1px solid red',backgroundColor:"red"}}>
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
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",marginBottom:'2rem',}}>
          <HorizontalDivider />
          <Typography className="responsive_fontsize32"
            sx={{
              color: "secondary.secondary_600",
              fontWeight:"bold",
              padding:"0px",
              textAlign:"center",
              letterSpacing:"1px",
            }}
          >
            Premium Listing
          </Typography>
          <HorizontalDivider />
          </Box>
        </Box>
        {/* second Box */}
        <Box sx={{ display: "flex", width: "100%", flexDirection: "row" }}>
          <PremiumList/>
  
        </Box>
      </Box>
    );
}
export default PremiumSection;