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
        <Box sx={{marginTop:"80px"}}>
        {/* first box */}
  
        <Box
          sx={{
            // backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "68px",
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