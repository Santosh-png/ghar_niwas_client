import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea , Box} from '@mui/material';

function PremiumCard({price, title, name, date}) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
        //   height="140"
         maxWidth="300px"
         maxHeight="300px"
         
          image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Top Listing Image"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {title}
        </Typography>
        <Box sx={{display:'flex', flexDirection:'row',justifyContent:"space-between"}}>
        <Typography variant="body2" color="text.secondary" >
         posted by: {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {date}
        </Typography>
        </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default PremiumCard;