import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function PropertyCard({imageUrl}) {
  return (
    <Card sx={{ maxWidth:'100%',margin:'0 35px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          
          image={imageUrl}
          alt="Property Image"
        />
      </CardActionArea>
    </Card>
  );
}
export default PropertyCard;