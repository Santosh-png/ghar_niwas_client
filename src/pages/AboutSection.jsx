import React from "react";
import { Box, Button, Typography } from "@mui/material";
import OrangeDivider from '../component/ui/orangeDivider_ui';

import logo from "../assets/image/logo.png";

function AboutSection() {
  return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
          marginTop: ""
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            maxWidth: "40rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            gap: "0.7rem",
          }}
        >
          <Typography variant="h1"
            sx={{
              fontSize: "32px",
              fontWeight: "600",
              color: "primary.main",
              display:"flex",
              flexDirection:"row"

            }}
        >
              <OrangeDivider>
              About Us
            </OrangeDivider>

          </Typography>
          <p className="responsive_fontsize16" >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
        </Box>
        {/* RIGHT SIDE */}

        <Box 
          // sx= {{display:"flex", flexDirection:"column"}}
          >
        <img src={logo} alt="Ghar Niwas" style={{ maxHeight: "650px" }} />
        </Box>

      </Box >
  );
}

export default AboutSection;