import React from 'react';
import {Box} from '@mui/material';
import ReactPlayer from 'react-player';
function VideoSection(){
    return(
        <Box sx={{width:{xs:'80%',sm:'90%', md:'100%'},height:{xs:"300px",md:"360px",lg:'480px'}}}>
            <ReactPlayer url="https://youtu.be/vZnzvfJJWtw" width='100%' height='100%' controls={true}
            ></ReactPlayer>
        </Box>
    )
}
export default VideoSection;