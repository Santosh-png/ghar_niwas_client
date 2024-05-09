import React from "react";
import {
    Box,
    Typography
} from "@mui/material";
import UploadedList from "./uploadedListing";
import HorizontalDivider from "../ui/HorizontalDivider";
function UploadedSection() {
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
          Recently Uploaded
        </Typography>
        <HorizontalDivider />
        </Box>
      </Box>
      {/* second Box */}
      {/* <Box sx={{ display: "flex", width: "100%", flexDirection: "row" }}> */}
        <UploadedList/>

      {/* </Box> */}
    </Box>
    );
}
export default UploadedSection;