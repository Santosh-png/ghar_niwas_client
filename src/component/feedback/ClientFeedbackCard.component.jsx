import React from 'react';
import { Card, CardContent, Typography, Box, CardHeader, Avatar } from '@mui/material';

const ClientFeedbackCard = () => {
  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // padding: "1rem",
      borderRadius: 1,
      marginBottom: '1rem',
      mx: { xs: 0, sm: 2, md: 3, lg: 4 }  // Adjust horizontal margins responsively
    }}>
    <Card>   {/* <Card style={{margin:"buttom"}}> */}
      <Box sx={{ 
         backgroundColor: "primary.main" }}>
      <CardContent>
        <Typography className='responsive_fontsize20' variant="body2" color= "accent.white" padding= "0.8rem" >
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        </Typography>
      </CardContent>
        </Box>
        <Box>
      <CardHeader
      className='responsive_fontsize20'
        avatar={
          <Avatar sx={{backgroundColor:"#C77F05"}}>
            A
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Ashika Paudel"
        subheader="September 14, 2016"
        sx={{backgroundColor:"#ECEEEE"}}
      />
    </Box>
    </Card>
  </Box>
  );
}

export default ClientFeedbackCard;
