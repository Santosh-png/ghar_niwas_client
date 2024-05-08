import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea , Box} from '@mui/material';

function PremiumCard({price, title, name, date,imageUrl}) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
        //   height="140"
         Width="300px"
         Height="300px"
         
          image={imageUrl}
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