import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from '@mui/material';
import './index.css'; // External CSS

const CustomEventItem = ({ image, title, description, onExplore }) => {


  return (
    <Card className="event-card">
      <img src={image} alt={title}  className="event-image" />
      <Box className="event-details">
        <CardContent className="event-content">
          <Typography variant="h6" component="div" className="event-title">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="event-description"
          >
            {description}
          </Typography>
        </CardContent>
      </Box>

      <Button
        variant="outlined"
        className="explore-button"
        onClick={onExplore}
      >
        Explore
      </Button>
    </Card>
  );
};

export default CustomEventItem;
