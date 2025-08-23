import React from 'react';
import { Grid } from '@mui/material';
import CoustomCard from './coustomCard';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../components/index.css';
const cards = [
    { icon: <HomeIcon fontSize="large" />, label: 'Entertainment' },
    { icon: <StarIcon fontSize="large" />, label: 'Sports' },
    { icon: <FavoriteIcon fontSize="large" />, label: 'Festival' },
    { icon: <HomeIcon fontSize="large" />, label: 'Professonal' },
    { icon: <StarIcon fontSize="large" />, label: 'Politics' },
    { icon: <FavoriteIcon fontSize="large" />, label: 'Others' },
];

export default function CardList() {
    return (
        <Grid container spacing={2} className="card-list-container">
            {cards.map((card, idx) => (
                <Grid item xs={6} md={4} key={idx}>
                    <CoustomCard icon={card.icon} label={card.label} />
                </Grid>
            ))}
        </Grid>
    );
}
