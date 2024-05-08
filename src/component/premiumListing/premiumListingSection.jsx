import React from "react";
import Divider from '@mui/material/Divider';
import {
    Box,
    Typography
} from "@mui/material";
import PremiumList from "./premiumListingService";
// import PremiumCard from "./PremiumCard";
function PremiumSection() {
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
                    <Divider>Premium Listing</Divider>
                </Typography>

                <Box>
                    <PremiumList/>
                </Box>
        </Box>
    );
}
export default PremiumSection;