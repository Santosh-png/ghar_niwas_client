

import React from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ClientFeedbackCard = () => {
  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      padding:"1rem",
      borderRadius: 5,
       }}>
    <Card  sx={{
            height:{xs:"180px",md:"230px",lg:'280px'},width:{xs:"220px",md:"320px",lg:'380px'}
          }}>
    {/* <Card style={{margin:"buttom"}}> */}
      <Box sx={{ 
         backgroundColor: "primary.main" }}>
      <CardContent>
        <Typography variant="body2" color= "accent.white" padding= "1.5rem" >
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        </Typography>
      </CardContent>
        </Box>
        <Box>
      <CardHeader
        avatar={
          <Avatar sx={{backgroundColor:"#C77F05"}}>
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
        sx={{backgroundColor:"#ECEEEE"}}
      />
    </Box>
    
    </Card>
    </div>
  )
}

export default ClientFeedbackCard;
