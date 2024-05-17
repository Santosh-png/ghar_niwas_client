import React, { useState, useEffect } from 'react';
import { Box, Button, Grid } from "@mui/material";
import ListingCard from "./ListingCard";
import ListingItems from "./ListingItems";

function Listing() {
  const [showAllCards, setShowAllCards] = useState(false);
  const [numCardsPerRow, setNumCardsPerRow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setNumCardsPerRow(screenWidth >= 960 ? 3 : screenWidth >= 600 ? 2 : 1);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleShowAllCards = () => setShowAllCards(prev => !prev);

  const renderCards = () => {
    const numToShow = showAllCards ? ListingItems.length : numCardsPerRow;
    return ListingItems.slice(0, numToShow).map(item => (
      <Grid item key={item.id} xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
        <ListingCard
          imageUrl={item.imageUrl}
          location={item.location}
          price={item.price}
          title={item.title}
          name={item.name}
          date={item.date}
          style={{ maxWidth: '100%' }}
        />
      </Grid>
    ));
  };

  return (
    <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      <Grid container spacing={16} justifyContent="center">
        {renderCards()}
      </Grid>
      {ListingItems.length > 3 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" onClick={toggleShowAllCards}>
            {showAllCards ? "See Less" : "See More"}
          </Button>
        </Box>
      )}
    </div>
  );
}

export default Listing;
