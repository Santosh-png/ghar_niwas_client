import React from 'react';
import { Typography, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Card = React.memo(function (props) {
  const { data, dataIndex, index, currentVisibleSlide } = props;
  const { imageUrl,location,price, title, name, date } = data[dataIndex];

  const isCenterCard = index === currentVisibleSlide;

  return (
    <Box
      sx={{
        width: "500px",
        height: 300,
        overflow:"hidden",
        userSelect: "none",
        position: 'relative',
        display:'flex',
        justifyContent:'center',
        alignItems: "center",
        left:{sm:'6%',md:'18%'},
        backgroundColor:"yellow",
        // border: "1px solid blue"
      }}
      className="my-slide-component"
    >
      <LocationOnIcon style={{position:"absolute",top:"63%",right:"94%",color:"#ffffff"}}/>
      <Typography style={{position:"absolute",top:"63%",left:'1%',color:"#FFFFFF",marginLeft:"30px"}}variant='body2' color="textSecondary" component="p">{location}</Typography>

      <img
        style={{
          height: "100%",
          width: '100%',
          objectFit: "fill",
          borderRadius: 0,
        }}
        draggable={false}
        src={imageUrl}
        alt='image'
      />
  {isCenterCard && ( 
   
        <div style={{ position: 'absolute', width: "100%", bottom: 0,background:'rgba(28, 62, 10,0.7)',padding:"0 5px"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: 'accent.white' }}>
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'accent.white' }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", color: 'accent.white' }}>
            <Typography variant="body2" sx={{ color: 'accent.white' }} >
              posted by: {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'accent.white' }}>
              {date}
            </Typography>
          </Box>
          </div>
      )}
    </Box>
  );
});

export default Card;   