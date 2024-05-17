import React from "react";
import Divider from '@mui/material/Divider';

import {
    Box,
    Typography
} from "@mui/material";
import Listing from "./listingService";
import HorizontalDivider from "../ui/HorizontalDivider";
function ListSection(){
    return(
        <Box sx={{
          marginTop:"80px", 
          width:"100%",
          // backgroundColor: "red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
          }}>
          {/* first box */}
            <Box
              sx={{
                // backgroundColor: "green",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                // marginTop: "68px",
                width:'100%'
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",marginBottom:'1rem', 
        }}>
        <HorizontalDivider />
        <Typography className="responsive_fontsize32"
          sx={{
            // color: "secondary.secondary_600",
            fontWeight:"bold",
            padding:"10px",
            textAlign:"center",
            letterSpacing:"1px",
            color:'primary.main',
           
          }}
        >
          Listing
        </Typography>
        <HorizontalDivider />
        {/* </Box> */}
      </Box>
            </Box>
          {/* second Box */}
          <Box sx={{ 
            display: "flex", 
            width: "100%", 
            flexDirection: "row" ,
            // backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center"
            }}>
            <Listing/>
    
          </Box>
      </Box>
    )
}
export default ListSection;