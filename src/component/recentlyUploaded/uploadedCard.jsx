import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Grid} from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function UploadedCard() {
  return ( 
    <Card sx={{ maxWidth: 300 }}>      
        <CardMedia
          component="img"
        //   height="140"
          maxWidth="300px"
          maxHeight="300px"
          image="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="House Image"
        />
        
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div"> */}
          <Typography className='responsive_fontSize14' sx={{fontWeight:"700",lineHeight:"18.74px",font:"Roboto Serif"}} >
           Ghar Niwas
          </Typography>
          {/* <Typography variant="body2" color="text.secondary" */}
          <Typography
          className='responsive_fontSize14' sx={{font:"Roboto Serif",fontWeight:"400",letterSpacing:"0.25px"}}
          >
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, error.
          </Typography>
        </CardContent>
    </Card>
  );
}
export default UploadedCard;