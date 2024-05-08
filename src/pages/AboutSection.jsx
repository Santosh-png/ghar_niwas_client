import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../assets/image/logo.png";

function AboutSection() {
 
  return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "2rem 2.5rem 2rem 2.5rem"
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            maxWidth: "40rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "0.7rem",
            ml:"1rem"
          }}
        >
          <Typography variant="h1"
            sx={{
              fontSize: "32px",
              fontWeight: "600",
              color: "primary.main",
              display:"flex",
              flexDirection:"row",
              marginTop: "15px"

            }}
        >
              
              About Us

          </Typography>
          <p className="responsive_fontsize16" >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
        </Box>
        {/* RIGHT SIDE */}

        <Box 
          sx= {{display:"flex", flexDirection:"column", marginTop:"4.5rem", alignItems:"center"}}
        >
         
        <img src={logo} alt="Ghar Niwas" style={{Height: "12rem", width:"12rem"}} />
        </Box>

      </Box >
  );
}

export default AboutSection;