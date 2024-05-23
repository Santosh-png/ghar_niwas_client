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
          height="480"
          image={imageUrl}
          alt="Property Image"
          sx={{height:{xs:'300px',sm:'350px',md:'400px',lg:'480px'}}}
        />
      </CardActionArea>
    </Card>
  );
}
export default PropertyCard;