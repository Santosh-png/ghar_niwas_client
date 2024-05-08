import React from "react";
import {
    Box,
    Typography
} from "@mui/material";
import UploadedList from "./uploadedListing";
function UploadedSection() {
    return (
        <Box>
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
                   Recently Uploaded
                </Typography>

                <Box>
                    <UploadedList/>
                </Box>
        </Box>
    );
}
export default UploadedSection;