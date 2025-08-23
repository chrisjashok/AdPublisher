import { Grid, Tab, Tabs } from '@mui/material'
import '../components/index.css';
import React from 'react'

function CoustomTab({ vertical = false, onSelectTab }) {
    const arr = [
        { label: 'Home', pathname: '/' },
        { label: 'Ongoing', pathname: '/events' },
        { label: 'Upcomming', pathname: '/events' },
        { label: 'Popular'  , pathname: '/events' },
    ];

    const handleTab = (label) => {
        onSelectTab(label);
    }

    return (
        <Grid>
            <Tabs
                orientation={vertical ? 'vertical' : 'horizontal'}
                variant={vertical ? 'scrollable' : 'standard'}
                sx={vertical ? { minHeight: 200 } : {}}
                onChange={(e,val) => handleTab(arr[val].pathname) }

            >
                {arr.map((item, index) => (
                    <Tab key={index} label={item.label} className="topbar-tab" />
                ))}
            </Tabs>
        </Grid>
    )
}

export default CoustomTab