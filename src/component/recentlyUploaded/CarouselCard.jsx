import React from 'react';
import CenteredCarousel from './CenteredCarousel';
import { Typography,Box} from '@mui/material';
const Card = React.memo(function (props) {
const {data, dataIndex} = props;
const { imageUrl, location, price, title, name, date } = data[dataIndex];
  
  // console.log("Check data data: ", data);
  return (
    <div
      style={{
        width: "100%",
        height: 300,
        userSelect: "none",  
        position:'relative' ,
         
      }}
      className="my-slide-component"
    >
      <img
        style={{         
          height: "80%",
          width: 'inherit',
          objectFit: "cover",
          borderRadius: 0,         
        }}
        draggable={false}
        src={imageUrl}
        alt='image' 
      />
      <div style={{position:'absolute',width:"inherit"}}>
        <Typography sx={{color:'primary.main'}}gutterBottom variant="h5" component="div">
          {price}
        </Typography>
        <Typography sx={{color:'primary.main'}} variant="body2" color="text.secondary">
        {title}
        </Typography>
        <Box sx={{display:'flex', flexDirection:'row',justifyContent:"space-between" ,color:'primary.main'}}>
        <Typography sx={{color:'primary.main'}} variant="body2" color="text.secondary" >
        posted by: {name}
        </Typography>
        <Typography sx={{color:'primary.main'}} variant="body2" color="text.secondary">
        {date}
        </Typography> 
        </Box>
      </div>

    </div>
  );
});

export default Card;
