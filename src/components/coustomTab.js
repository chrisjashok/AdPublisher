import { Grid, Tab, Tabs } from '@mui/material'
import '../components/index.css';
import React from 'react'

function CoustomTab({ vertical = false }) {
    const arr = [
        { label: 'Home' },
        { label: 'Ongoing' },
        { label: 'Upcomming' },
        { label: 'Popular' }
    ];

    return (
        <Grid>
            <Tabs
                orientation={vertical ? 'vertical' : 'horizontal'}
                variant={vertical ? 'scrollable' : 'standard'}
                sx={vertical ? { minHeight: 200 } : {}}
            >
                {arr.map((item, index) => (
                    <Tab key={index} label={item.label} />
                ))}
            </Tabs>
        </Grid>
    )
}

export default CoustomTab