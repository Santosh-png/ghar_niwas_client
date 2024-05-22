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
        // width: "500px",
        minWidth:{xs:"180px",sm:"350px",md:"500px"},
        height:{xs:"250px",md:"300px"},
        overflow:"hidden",
        userSelect: "none",
        position: 'relative',
        display:'flex',
        justifyContent:'center',
        alignItems: "center",
        left:{xs:"0%",sm:'6%',md:'18%'},
        right:{xs:"8%"},
        backgroundColor:"yellow",
        // border: "1px solid blue",
        marginLeft:{sm:"60px"},
       
      }}
      className="my-slide-component"
    >
      <LocationOnIcon className='responsive_fontsize26' sx={{position:"absolute",top:{xs:"66%",sm:"64%",md:"63%"},left:{xs:"6px",sm:"7px",md:"1%"},color:"#ffffff"}}/>
      <Typography style={{position:"absolute",top:"64%",left:'1%',color:"#FFFFFF",marginLeft:"30px"}}variant='body2' color="textSecondary" component="p">{location}</Typography>
     
      <img 
        style={{
          border:"1px solid ",
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
          <Typography className="responsive_fontsize24" gutterBottom variant="h5" component="div" sx={{ color: 'accent.white' }}>
            {price}
          </Typography>
          <Typography className="responsive_fontsize14" variant="body2" color="text.secondary" sx={{ color: 'accent.white' }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", color: 'accent.white' }}>
            <Typography className="responsive_fontsize14" variant="body2" sx={{ color: 'accent.white' }} >
              posted by: {name}
            </Typography>
            <Typography className="responsive_fontsize14" variant="body2" sx={{ color: 'accent.white' }}>
              {date}
            </Typography>
          </Box>
          </div>
      )}
    </Box>
  );
});

export default Card;   