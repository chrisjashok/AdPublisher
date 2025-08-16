import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import './index'; // External CSS

export default function CoustomCard({ icon = <HomeIcon fontSize="large" />, label = "Label" }) {
  return (
    <Card className="custom-card">
      <CardContent className="custom-card-content">
        <Box className="custom-card-icon">{icon}</Box>
        <Typography variant="subtitle1" className="custom-card-label">
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
}
