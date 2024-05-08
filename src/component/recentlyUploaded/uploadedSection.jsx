import React from "react";
import Divider from '@mui/material/Divider';

import {
    Box,
    Typography
} from "@mui/material";
import UploadedList from "./uploadedListing";
function UploadedSection() {
    return (
        <Box sx={{marginTop:"80px"}}>
                <Typography
                    sx={{
                        fontSize: "12px",
                        letterSpacing: "4px",
                        color: "secondary.secondary_600",
                        fontFamily: "fontFamily",
                        textTransform: "uppercase",
                        textAlign:"center",
                        mb:"20px"
                    }}
                >
                  <Divider>Recently Uploaded</Divider> 
                </Typography>

                <Box>
                    <UploadedList/>
                </Box>
        </Box>
    );
}
export default UploadedSection;