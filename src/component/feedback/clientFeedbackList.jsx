// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function ClientFeedback() {
  return (
    <div>
      <Typography variant="h4" align="center" color="accent.black" marginTop="20px">
        Clients Feedback
      </Typography>
      
      <div style={{ display: 'flex' }}>
       
        <Card sx={{ maxWidth: 345, marginTop: "20px", backgroundColor: "primary.main", marginLeft:"55px", marginRight: "7rem" }}>
          <CardContent>
            <Typography variant="body2" Color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
          </CardContent>
        </Card>
       
       
       <Card sx={{ maxWidth: 345, marginTop: "20px", backgroundColor: "primary.main", marginRight: "7rem" }}>
          <CardContent>
            <Typography variant="body2"  Color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
          </CardContent>
        </Card>
       
       
       
        <Card sx={{ maxWidth: 345, marginTop: "20px", backgroundColor: "primary.main" }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
