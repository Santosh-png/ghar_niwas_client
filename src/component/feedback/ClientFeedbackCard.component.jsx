

import React from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ClientFeedbackCard = () => {
  return (
    <Card style={{margin:"0px 20px"}}>
      <Box sx={{ maxWidth: 345 , backgroundColor: "primary.main" }}>
      <CardContent>
        <Typography variant="body2" color= "accent.white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
        </Box>
        <Box>
      <CardHeader
        avatar={
          <Avatar>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ashika Paudel"
        subheader="September 14, 2016"
      />
    </Box>

    </Card>
  )
}

export default ClientFeedbackCard;
