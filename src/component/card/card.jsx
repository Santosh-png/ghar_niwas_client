import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea ,Box} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";

function CommonCard({price, title, name,location, date,imageUrl}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/propertyDetail");
};
  return (
    <div style={{marginBottom:'1rem',display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Card onClick={handleClick}>
      <CardActionArea>
      <div style={{position:'relative'}}>
        <Box sx={{display:'flex', gap:'10px'}}>
        <LocationOnIcon className='responsive_fontsize24' sx={{
          position:"absolute",
          display: "flex", 
          alignItems: "center",
          justifyContent: "center",
          color:"#FFFFFF",
          marginLeft: "7px",
          bottom:{xs:'2.5%',md:'3.5%'}          
        }}/>
          
        <Typography className='responsive_fontsize24' sx={{
          position:"absolute",
          textAlign:'center',
          color:"#FFFFFF",
          marginLeft:"30px",
          bottom:{xs:'1%',md:'2%'}

          }}  variant='body2' color="textSecondary" component="p">{location}</Typography>
          </Box>
        <CardMedia
          component="img"
          image={imageUrl}
          alt="Property Image"
          sx={{
            height:{xs:"180px",md:"230px",lg:'280px'},width:{xs:"220px",md:"320px",lg:'380px'}
          }}
        />
        </div>
        <CardContent>
        <Box sx={{height:{xs:"40px",sm:"60px",md:"70px",lg:"80px"},marginBottom:{xs:'2px',sm:"3px"},margin:'0px 1px'}}>
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