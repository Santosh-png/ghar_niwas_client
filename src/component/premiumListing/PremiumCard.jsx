import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea , Box} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function PremiumCard({price, title, name, date,imageUrl,location}) {
  return (
    <div style={{marginBottom:'1rem',display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Card sx={{ maxWidth: 300}}>  
      <div style={{position:'relative'}}>
        <LocationOnIcon style={{position:"absolute",top:"90%",color:"#ffffff"}}/>
      <Typography style={{position:"absolute",top:"90%",color:"#FFFFFF",marginLeft:"30px"}}variant='body2' color="textSecondary" component="p">{location}</Typography> 

      {/* Image    */}
        <CardMedia
            component="img"
            margin="auto"
            Width="300px"
            Height="300px"
            image={imageUrl}
            alt="House Image"
            // sx={{
            //   height:{xs:"150px",sm:"200px",md:"250px",lg:'300px'},width:{xs:"150px",sm:"200px",md:"250px",lg:'300px'}
            // }}

        />
        </div>
        <CardContent>
          <Typography className="responsive_fontsize24" sx={{color:'primary.main'}} gutterBottom variant="h5" component="div">
            {price}
          </Typography>
          <Typography className="responsive_fontsize14" sx={{color:'primary.main'}} variant="body2" color="text.secondary">
          {title}
          </Typography>
          <Box sx={{display:'flex', flexDirection:'row',justifyContent:"space-between"}}>
            <Typography  className="responsive_fontsize14" sx={{color:'primary.main'}} variant="body2" color="text.secondary" >
            posted by: {name}
            </Typography>
            <Typography className="responsive_fontsize14" sx={{color:'primary.main'}} variant="body2" color="text.secondary">
            {date}
            </Typography>
          </Box>
      </CardContent>
  </Card>

</div>
  );
}
export default PremiumCard;