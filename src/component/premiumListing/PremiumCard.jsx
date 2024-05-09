import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea , Box} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function PremiumCard({price, title, name, date,imageUrl,location}) {
  return (
    <div style={{paddingBottom:'1rem',display:"flex",alignItems:"center",alignSelf:'center',justifyContent:"center"}} >
    <Card sx={{ maxWidth:300}}>
      <CardActionArea>
      <div style={{position:'relative'}}>
        <LocationOnIcon style={{position:"absolute",top:"90%",color:"#ffffff"}}/>
      <Typography style={{position:"absolute",top:"90%",color:"#FFFFFF",marginLeft:"30px"}}variant='body2' color="textSecondary" component="p">{location}</Typography>
      <CardMedia 
        component='img'
         Width="300px"
         Height="300px"
        //  width="100%"
        //  height="100%"
       
        image={imageUrl}
        /></div>
        
        
        <CardContent sx={{color:'primary.main'}}>
        <Typography gutterBottom variant="h5" component="div">
          {price}
        </Typography>
        <Typography sx={{color:'primary.main'}} variant="body2" color="text.secondary">
         {title}
        </Typography>
        <Box sx={{display:'flex', flexDirection:'row',justifyContent:"space-between"}}>
        <Typography sx={{color:'primary.main'}} variant="body2" color="text.secondary" >
         posted by: {name}
        </Typography>
        <Typography sx={{color:'primary.main'}} variant="body2" color="text.secondary">
         {date}
        </Typography>
        </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
export default PremiumCard;