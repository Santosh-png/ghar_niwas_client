
import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../assets/image/logo.png";

function AboutSection() {

  return (
    <>
      <Box
        sx={{
          display:"flex",
          alignItems: "center",
          flexDirection: 'row',
          justifyContent: "space-between",
          padding: "2rem 2rem 2rem 2rem",
         
        }}
        
      >
        
        {/* <img src={logo} alt="Ghar Niwas" style={{Height: "12rem", width:"12rem"}} />   */}
        {/* Heading Box (About Section) */}
        <Box
          sx={{
            maxWidth: "40rem",
            width: "100%",
            display: "flex",
            flexDirection: 'column',
            gap: "1rem",
            ml:"2.5rem",
            // border: "1px solid black"
            
          }}
        >
          <Typography variant="h1"
          className="responsive_fontsize32"
            sx={{
              fontWeight: "600",
              color: "primary.main",
              display:"flex",
              marginTop: "-1rem",
              // border: "1px solid red",
            }}
          >
              About Us
          </Typography>
              {/* </Box> */}
              
   
          <Box>
            <p className="responsive_fontsize16" >
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
            </p>
          </Box>
        </Box>
          
             
          {/* </Box>      */}
         
     
       {/* box for logo  */}
       <Box 
                sx= {{
                  display:{xs: "none", md: "flex"}, 
                  flexDirection:"column",
                  marginTop:"-0rem", 
                  marginRight:"5rem",
                  alignItems:"center",
                  // border: "1px solid red"
                }}
              >
              
                <img src={logo} alt="Ghar Niwas" style={{Height: "12rem", width:"12rem"}} />
              </Box>   
     {/* /* ending main box  */}
  </Box >
     
   </>
  );
}

export default AboutSection;

