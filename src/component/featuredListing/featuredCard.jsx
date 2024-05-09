// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea ,Box} from '@mui/material';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// function FeaturedCard({price, title, name,location, date,imageUrl}) {
//   return (
//     <div style={{marginBottom:'1rem',display:"flex",alignItems:"center",justifyContent:"center"}}>
//     <Card>
//       <CardActionArea>
//       <div style={{position:'relative'}}>
//         <LocationOnIcon style={{position:"absolute",top:"90%",color:"#ffffff"}}/>
//       <Typography style={{position:"absolute",top:"90%",color:"#FFFFFF",marginLeft:"30px"}}variant='body2' color="textSecondary" component="p">{location}</Typography>
//         <CardMedia
//           component="img"
//         //   height="140"
//         //  width="300px"
//         //  height="300px"
//           image={imageUrl}
//           sx={{
//             height:{xs:"150px",sm:"200px",md:"250px",lg:'300px'},width:{xs:"250px",sm:"300px",md:"350px",lg:'400px'}
//           }}
//         />
//         </div>
//         <CardContent>
//         <Typography className="responsive_fontsize24" sx={{color:'primary.main'}} gutterBottom variant="h5" component="div">
//           {price}
//         </Typography>
//         <Typography className="responsive_fontsize14" sx={{color:'primary.main'}} variant="body2" color="text.secondary">
//          {title}
//         </Typography>
//         <Box sx={{display:'flex', flexDirection:'row',justifyContent:"space-between"}}>
//         <Typography className="responsive_fontsize14" sx={{color:'primary.main'}}variant="body2" color="text.secondary" >
//          posted by: {name}
//         </Typography>
//         <Typography className="responsive_fontsize14" sx={{color:'primary.main'}} variant="body2" color="text.secondary">
//          {date}
//         </Typography>
//         </Box>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//     </div>
//   );
// }
// export default FeaturedCard;