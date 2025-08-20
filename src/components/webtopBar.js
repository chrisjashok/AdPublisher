import { Grid, IconButton, Drawer, Box } from '@mui/material';
import React, { use, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { logo } from '../assets';
import '../components/index.css';
import CoustomTab from './coustomTab';
import CoustomSearchBar from './coustomSearchBar';
import { useNavigate } from 'react-router-dom';

function WebtopBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <Grid className="webTopbar_root">
            {/* Logo */}
            <Grid item className="logoView">
                <img src={logo} alt="Logo" className="logo" />
            </Grid>

            {/* Desktop/Tablet Tabs */}
            <Grid item className="tabView desktopTab">
                <CoustomTab onSelectTab={(val)=> navigate(val) } />
            </Grid>

            {/* Search (desktop/tablet only) */}
            <Grid item className="searchView desktopSearch">
                <CoustomSearchBar />
            </Grid>

            {/* Mobile Menu Icon */}
            <Grid item className="menuIconView mobileMenu">
                <IconButton onClick={() => setDrawerOpen(true)}>
                    <MenuIcon fontSize="large" />
                </IconButton>
            </Grid>

            {/* Mobile Drawer for Tabs */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                className="custom-drawer" >
                <Box sx={{ mt: 4, px: 2 }}>
                    <CoustomTab vertical />
                </Box>
            </Drawer>
        </Grid>
    );
}

export default WebtopBar;