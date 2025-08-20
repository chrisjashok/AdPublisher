import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import CoustomCountdown from './coustomCountdown';
import './index.css'; // Your external CSS

export default function ContentCard() {
    return (
        <Grid container spacing={2} className="contentCard_container">
            <Grid item xs={12} className="content_head_container">
                <Typography gutterBottom className="content_header">
                    Upcoming Event 2025
                </Typography>
            </Grid>

            <Grid item xs={12} className="content_body_container">
                <div className="content_text_container">
                    <Typography variant="body1" className="content_text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                    </Typography>

                    {/* Countdown Timer */}
                    <div className="countdown_wrapper">
                        <CoustomCountdown targetDate="2026-01-01T00:00:00" />
                    </div>

                    {/* Button aligned with countdown */}
                    <div className="button_wrapper">
                        <Button variant="contained"  className="content_button">
                            Explore More
                        </Button>
                    </div>
                </div>

                <img
                    src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg"
                    alt="Event"
                    className="content_img"
                />
            </Grid>
        </Grid>
    );
}
