

import React from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ClientFeedbackCard = () => {
  return (
    <Card style={{
        margin:"0px 20px",
        marginTop:"2rem",
        // marginTop:"3rem",
       }}>
    {/* <Card style={{margin:"buttom"}}> */}
      <Box sx={{ 
        // maxWidth: 345 ,
        
         backgroundColor: "primary.main" }}>
      <CardContent>
        <Typography variant="body2" color= "accent.white" >
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        </Typography>
      </CardContent>
        </Box>
        <Box>
      <CardHeader
        avatar={
          <Avatar>
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ashika Paudel"
        subheader="September 14, 2016"
      />
    </Box>

    </Card>
  )
}

export default ClientFeedbackCard;
