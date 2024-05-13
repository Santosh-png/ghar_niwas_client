import React from 'react';
import {Box} from '@mui/material';
import ReactPlayer from 'react-player';
function VideoSection(){
    return(
        <Box sx={{maxWidth:{xs:'247px',md:'100%'},display:'flex',alignItem:'center',justifyContent:'center',height:'400px',position:'relative',border:'1px solid red'}}>
            <ReactPlayer url="https://youtu.be/zumJJUL_ruM" width='100%' height='100%' controls={true}
            ></ReactPlayer>
        </Box>
    )
}
export default VideoSection;