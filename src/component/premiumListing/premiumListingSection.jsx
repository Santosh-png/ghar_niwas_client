import React from "react";
import {
    Box,
    Typography,
    Slide,
} from "@mui/material";
import PremiumList from "./premiumListingService";
import PremiunCard from './PremiumCard';
import PremiumCard from "./PremiumCard";
function PremiumSection() {
    return (
        <Box
            sx={{}}
        >
            <Box sx={{
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    // flexDirection: "column",

                }}>
                <Typography
                    sx={{
                        fontSize: "12px",
                        letterSpacing: "4px",
                        color: "secondary.secondary_600",
                        fontFamily: "fontFamily",
                        textTransform: "uppercase"
                    }}
                >
                   Premium Listing
                </Typography>
                <Box 
                    sx={{
                        border: "1px solid red",
                        display: "flex"
                    }}
                >
                    <PremiumCard/>
                    <PremiumCard/>
                    <PremiumCard/>
                </Box>

            </Box>
        </Box>
    );
}
export default PremiumSection;