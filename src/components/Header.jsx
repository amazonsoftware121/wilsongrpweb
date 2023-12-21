import React, { useState } from 'react';
import { Slide, Box, AppBar, Typography, Toolbar, IconButton,  Divider, CssBaseline, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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

    
    const [navbar, setNavbar] = useState(false);



    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);


    // Menu drawer
    const drawer = (
        <Box sx={{ textAlign: 'center' }} >
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
                    <AppBar component={"nav"} sx={{ bgcolor: navbar ? '#000' : 'transparent', boxShadow: 'none' }}>
                        <Toolbar>
                            <IconButton color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                sx={{ mr: 2, display: { sm: "none" } }}
                                
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

                <Box className="mobileNavigationWrapper" sx={{display: {xs: 'none', md: 'none'}}}>
                    {drawer}
                </Box>
            </Box>
        </>
    );
};

export default Header;