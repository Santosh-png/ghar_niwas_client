import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function PremiumCard() {
  return (  
    <Card sx={{ maxWidth: 300 }}>      
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="House Image"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Ghar Niwas
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dignissimos, quia vero obcaecati expedita commodi deleniti laborum cumque optio ex fuga sit autem nihil. Nemo error repellendus asperiores atque hic?
          </Typography>
        </CardContent>
    </Card>
    
  );
}
export default PremiumCard;