import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Slide, Box, AppBar, Grid, Typography, Toolbar, IconButton, Drawer, Divider, CssBaseline, useScrollTrigger, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MegaMenu from './MegaMenu';
import logo from '../assets/img/logo.png'
import NavBar from './NavBar';

const HideOnScroll = (props) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        threshold: 80,
    });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = (props) => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };



    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    // Handle Menu Click

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }
    // Menu drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
            <Typography component="div" sx={{ flexGrow: 1, my: 2 }}>
                <div className='headerLogoMobile'>
                    <img src={logo} alt="Logo" />
                </div></Typography>
            <Divider />

            <NavBar />

        </Box>
    )

    return (
        <>
            <Box>
                <CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar component={"nav"} sx={{ bgcolor: navbar ? '#000' : 'transparent' }}>
                        <Toolbar>
                            <IconButton color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                sx={{ mr: 2, display: { sm: "none" } }}
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon sx={{ color: 'white' }} fontSize='26'></MenuIcon>
                            </IconButton>
                            <Typography component="div" sx={{ flexGrow: 1 }}>
                                <div className='headerLogo'>
                                    <img src={logo} alt="Logo" />
                                </div></Typography>
                                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                                <NavBar />
                                </Box>
                            
                        </Toolbar>

                    </AppBar>
                </HideOnScroll>
                <Box>
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        hideBackdrop: true
                        onClose={handleDrawerToggle}
                        

                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: '240px',
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </>
    );
};

export default Header;