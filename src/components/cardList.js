import React from 'react';
import { Grid } from '@mui/material';
import CoustomCard from './coustomCard';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../components/index.css';
const cards = [
    { icon: <HomeIcon fontSize="large" />, label: 'Home' },
    { icon: <StarIcon fontSize="large" />, label: 'Star' },
    { icon: <FavoriteIcon fontSize="large" />, label: 'Favorite' },
    { icon: <HomeIcon fontSize="large" />, label: 'Home 2' },
    { icon: <StarIcon fontSize="large" />, label: 'Star 2' },
    { icon: <FavoriteIcon fontSize="large" />, label: 'Favorite 2' },
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
