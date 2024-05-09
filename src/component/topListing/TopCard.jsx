import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea , Box} from '@mui/material';


function TopListingCard({price, title, name, date,imageUrl}) {
  return (
    <div style={{marginBottom:'1rem',display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Card sx={{ maxWidth: 300 }}>      
        `<CardMedia
            component="img"
            margin="auto"

          //   height="140"
            Width="300px"
            Height="300px"
            image={imageUrl}
            alt="House Image"

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
  </Card>
</div>
  );
}
export default TopListingCard;