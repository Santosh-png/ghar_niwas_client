import React from 'react'
import {Card,CardContent,Typography} from '@mui/material';
const ClientFeedbackCard = () => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor:"primary.main" }}>
   
    <CardContent>
      <Typography variant="body2" color="accent.white">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    
  </Card>
  )
}
export default ClientFeedbackCard;