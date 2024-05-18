import React from "react";
import {
    Box,
    Typography
} from "@mui/material";
import HorizontalDivider from "../ui/HorizontalDivider";
import CenteredCarousel from "./CenteredCarousel";
function UploadedSection() {
    return (
        <Box sx={{marginTop:"20px",color:'primary.main',
        paddingBottom:'40px'}}>
      {/* first box */}

      <Box
        sx={{
          // backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
        <HorizontalDivider />
        <Typography className="responsive_fontsize32"
          sx={{
            color: "secondary.secondary_600",
            fontWeight:"bold",
            padding:"10px",
            textAlign:"center",
            letterSpacing:"1px",
          }}
        >
          Recently Uploaded
        </Typography>
        <HorizontalDivider />
        </Box>
      </Box>
      {/* second Box */}
      <Box sx={{ display: "flex", width: "100%", flexDirection: "row" }}>
        {/* <UploadedList/> */}
          <CenteredCarousel />
      </Box>
    </Box>
    );
}
export default UploadedSection;