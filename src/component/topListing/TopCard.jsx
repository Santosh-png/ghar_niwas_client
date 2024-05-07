import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function TopListingCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
        //   height="140"
         maxWidth="300px"
         maxHeight="300px"
          image="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Top Listing Image"
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
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, quaerat.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default TopListingCard;