import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import './index.css'; // External CSS

const CustomEventItem = ({ image, title, description, onExplore }) => {

    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card className={`event-card ${isMobile ? 'mobile' : ''}`}>
      {/* <CardMedia
        component="img"
        image={image}
        alt={title}
        className="event-image"
      /> */}
      <img src={image} lt={title}  className="event-image" />

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
        variant="contained"
        color="primary"
        className="explore-button"
        onClick={onExplore}
      >
        Explore
      </Button>
    </Card>
  );
};

export default CustomEventItem;
