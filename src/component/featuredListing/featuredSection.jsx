import React from "react";
import {
    Box,
    Typography
} from "@mui/material";
import FeaturedList from './featuredListingService';
function FeaturedSection(){
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
                Featured Listing
            </Typography>
            <Box>
                <FeaturedList/>
            </Box>
        </Box>
    )
}
export default FeaturedSection;