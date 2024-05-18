import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import {Box} from '@mui/material';
function PropertyCard({imageUrl}) {
  return (
    <Card sx={{display:"flex",justifyContent:"center"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={imageUrl}
          alt="Property Image"
          sx={{height:{xs:'250px',sm:'300px',md:'350px',lg:'400px'}}}
        />
      </CardActionArea>
    </Card>
  );
}
export default PropertyCard;