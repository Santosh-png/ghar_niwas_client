import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function PropertyCard({imageUrl}) {
  return (
    <Card sx={{margin:'0 15px'}}>
      <CardActionArea sx={{display:"flex",justifyContent:"center"}}>
        <CardMedia sx={{  height:{xs:"300px",md:"360px",lg:'480px'},width:{xs:"80%",md:"80%",lg:'100%'}}}
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