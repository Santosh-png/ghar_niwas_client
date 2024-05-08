import React from "react";
import {
    Box,
    Typography
} from "@mui/material";
import TopList from "./TopListingService";
function TopSection(){
    return(
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
            }}>
                Top Listing
            </Typography>
            <Box>
                <TopList/>
            </Box>
        </Box>
    )
}
export default TopSection;