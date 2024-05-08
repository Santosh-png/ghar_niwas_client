import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function FeaturedCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Featured Listing Image"
        />
        <CardContent>
          <Typography
        //    gutterBottom variant="h5" component="div"
           className='responsive_fontSize14' sx={{fontWeight:"700",lineHeight:"18.74px",font:"Roboto Serif"}}
          >
            Ghar Niwas
          </Typography>
          <Typography 
        //   variant="body2" color="text.secondary"
          className='responsive_fontSize14' sx={{font:"Roboto Serif",fontWeight:"400",letterSpacing:"0.25px"}}
          >
            Lorem ipsum dolor sit amet.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default FeaturedCard;