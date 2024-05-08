import React from "react";
import {
    Box,
    Typography,
    Slide,
} from "@mui/material";
import PremiumList from "./premiumListingService";
// import PremiumCard from "./PremiumCard";
function PremiumSection() {
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
                   Premium Listing
                </Typography>

                <Box>
                    <PremiumList/>
                </Box>
        </Box>
    );
}
export default PremiumSection;