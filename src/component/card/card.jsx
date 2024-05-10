import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea ,Box} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function CommonCard({price, title, name,location, date,imageUrl}) {
  return (
    <div style={{marginBottom:'1rem',display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Card>
      <CardActionArea>
      <div style={{position:'relative'}}>
        <LocationOnIcon style={{
          position:"absolute",
          top:"89%",
          color:"#ffffff"}}/>

        <Typography style={{
          position:"absolute",
          top:"90%",
          color:"#FFFFFF",
          marginLeft:"30px"
          }}  variant='body2' color="textSecondary" component="p">{location}</Typography>
        <CardMedia
          component="img"
          image={imageUrl}
          sx={{
            height:{xs:"170px",md:"220px",lg:'270px'},width:{xs:"220px",md:"320px",lg:'380px'}
          }}
        />
        </div>
        <CardContent>
        <Box sx={{height:{xs:"30px",md:"50px",lg:"80px"}}}>
        <Typography className="responsive_fontsize24" sx={{color:'primary.main'}} gutterBottom variant="h5" component="div">
          {price}
        </Typography>
        <Typography className="responsive_fontsize14" sx={{color:'primary.main'}} variant="body2" color="text.secondary">
         {title}
        </Typography>
        <Box sx={{display:'flex', flexDirection:'row',justifyContent:"space-between"}}>
        <Typography className="responsive_fontsize14" sx={{color:'primary.main'}}variant="body2" color="text.secondary" >
         posted by: {name}
        </Typography>
        <Typography className="responsive_fontsize14" sx={{color:'primary.main'}} variant="body2" color="text.secondary">
         {date}
        </Typography>
        </Box>
        </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
export default CommonCard;