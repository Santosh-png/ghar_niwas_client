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
        left:{sm:'6%',md:'18%'},
        position:'relative'
      }}
      className="my-slide-component"
    >
      <LocationOnIcon style={{position:"absolute",top:"63%",right:"94%",color:"#ffffff"}}/>
      <Typography style={{position:"absolute",top:"63%",left:'1%',color:"#FFFFFF",marginLeft:"30px"}}variant='body2' color="textSecondary" component="p">{location}</Typography>

      <img
        style={{
          height: "80%",
          width: '100%',
          objectFit: "fill",
          borderRadius: 0,
        }}
        draggable={false}
        src={imageUrl}
        alt='image'
      />
  {isCenterCard && ( 
        <div style={{ position: 'absolute', width: "100%", bottom: 0, background: 'rgba(255,255,255,1)',padding:"0 5px"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: 'primary.main' }}>
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'primary.main' }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", color: 'primary.main' }}>
            <Typography variant="body2" sx={{ color: 'primary.main' }} >
              posted by: {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'primary.main' }}>
              {date}
            </Typography>
          </Box>
        </div>
      )}
    </Box>
  );
});

export default Card;   