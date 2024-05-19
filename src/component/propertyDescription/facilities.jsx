import {Box, Typography } from "@mui/material";
import VideoSection from "./videoSection";

function Detail(){
    return(
        <Box>
            <Box sx={{margin:'20px 30px'}}>
                <Typography className="responsive_fontsize26" sx={{textDecoration:'underline',color:'primary.main'}}>Facilities</Typography>
                <Typography className="responsive_fontsize16" sx={{color:'primary.main'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat?</Typography>
            </Box>
            <Box style={{display:"flex",justifyContent:"center"}}>
                <VideoSection/>
            </Box>
            <Box sx={{margin:'20px 30px'}} >
                <Typography className="responsive_fontsize26" sx={{textDecoration:'underline',color:'primary.main'}}>Property Detail</Typography>
                <Typography className="responsive_fontsize16" sx={{items:"center",color:'primary.main'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam at, repudiandae perspiciatis accusamus doloribus dolorum accusantium et iure, exercitationem laborum officia. Sequi molestias beatae ad? Expedita deserunt sint reiciendis maiores aliquid minima, dolorem quibusdam nam. Quia esse, velit, libero laudantium aperiam neque earum voluptatibus exercitationem vel voluptatum ipsa impedit tempora itaque temporibus architecto consectetur adipisci suscipit nisi ipsam sunt distinctio minima? Repudiandae libero vitae illo porro earum ea eius necessitatibus.</Typography>
            </Box>
        </Box>
    )
}
export default Detail;