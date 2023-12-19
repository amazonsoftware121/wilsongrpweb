import React, { useState } from 'react';
import "../../src/styles.scss";
import { NavLink, Link } from 'react-router-dom';
import { Slide, Box, AppBar, Grid, Typography, Toolbar, IconButton, Drawer, Divider, CssBaseline, useScrollTrigger, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MegaMenu from './MegaMenu';
import logo from '../assets/img/logo.png'

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

            <ul className="mobileNavigation">
                <li><NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={"/"} >Home</NavLink></li>
                <li> <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={"/about"} >About Us </NavLink></li>
                <li>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={"/services"} >Our Services</NavLink>
            {/* Add ArrowDropDown icon */}
            <IconButton onClick={handleDropdownToggle} sx={{ padding: 0 }}>
              <ExpandMoreIcon />
            </IconButton>
          </div>
          {/* Child Menu */}
          {isDropdownOpen && (
            <ul className="childMenu">
              <li><NavLink to="/services/child1">Child 1</NavLink></li>
              <li><NavLink to="/services/child2">Child 2</NavLink></li>
              {/* Add more child menu items as needed */}
            </ul>
          )}
        </li>
                <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={"/cyber-securities"} >Cyber Securities</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={"/industries-we-serve"} >Industries We Serve</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={"/career"} >Career</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={"/contact-us"} >Contact Us</NavLink></li>

            </ul>

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
                                <MenuIcon sx={{color: 'white'}} fontSize='26'></MenuIcon>
                            </IconButton>
                            <Typography component="div" sx={{ flexGrow: 1 }}>
                                <div className='headerLogo'>
                                    <img src={logo} alt="Logo"  />
                                </div></Typography>
                            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                                <ul className="navigationMenu">
                                    <li><NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={"/"} >Home</NavLink></li>
                                    <li className='dropdownParent'> <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={"/about"} >About Us <ExpandMoreIcon /></NavLink>
                                        <MegaMenu />
                                    </li>


                                    <li className='dropdownParent'><NavLink to={"/services"} >Our Services <ExpandMoreIcon /> </NavLink>
                                        <Box className="megaMenu" sx={{ width: '1070px', position: 'absolute' }}>
                                            <Container>
                                                <Grid container spacing={3}>
                                                    <Grid item xs={3} md={4}>
                                                        <Typography variant='h6' sx={{ fontWeight: 700 }}><NavLink to={"#"} >IT Governance Services</NavLink></Typography>
                                                        <ul className='dropdownChild'>
                                                            <li><NavLink to={"#"} >IT Change Management</NavLink></li>
                                                            <li><NavLink to={"#"} >IT Governance</NavLink></li>
                                                            <li><NavLink to={"#"} >Project Management</NavLink></li>
                                                        </ul>
                                                        
                                                        <Typography variant='h6' sx={{ fontWeight: 700, }} mt={5}><NavLink to={"#"} >Cloud Services</NavLink></Typography>
                                                        <Typography variant='h6' sx={{ fontWeight: 700 }}><NavLink to={"#"} >Data and Analytics Services</NavLink></Typography>


                                                    </Grid>




                                                    <Grid item xs={3} md={4}>
                                                        <Typography variant='h6' sx={{ fontWeight: 700 }}><NavLink to={"#"} >Risk Management Services</NavLink></Typography>
                                                        <ul className='dropdownChild'>
                                                            <li><NavLink to={"#"} >Application Security Assessment</NavLink></li>
                                                            <li><NavLink to={"#"} >Comprehensive Security Assessment</NavLink></li>
                                                            <li><NavLink to={"#"} >Penetration Testing</NavLink></li>
                                                            <li><NavLink to={"#"} >Security Assessment and Authorization (SA&A)</NavLink></li>
                                                            <li><NavLink to={"#"} >Network and Security Professional Development</NavLink></li>
                                                            <li><NavLink to={"#"} >Security Plans, Policies and Procedures Development</NavLink></li>
                                                            <li><NavLink to={"#"} >Vulnerability Assessment</NavLink></li>

                                                        </ul>
                                                    </Grid>


                                                    <Grid item xs={3} md={4}>
                                                        <Typography variant='h6'><NavLink to={"#"} >Compliance Services</NavLink></Typography>
                                                        <ul className='dropdownChild'>
                                                            <li><NavLink to={"#"} >Federal Information Security Mgt Act (FISMA) Assessment</NavLink></li>
                                                            <li><NavLink to={"#"} >Gramm-Leach Bliley Act (GLBA)</NavLink></li>
                                                            <li><NavLink to={"#"} >Health Insurance Portability and Accountability Act (HIPAA)</NavLink></li>
                                                            <li><NavLink to={"#"} >General Data Protection Regulation (GDPR) Compliance</NavLink></li>
                                                            <li><NavLink to={"#"} >Privacy Assessment</NavLink></li>
                                                            <li><NavLink to={"#"} >System and Organization Controls (SOC) Audit</NavLink></li>
                                                            <li><NavLink to={"#"} >California Consumer Privacy Act (CCPA)</NavLink></li>
                                                            <li><NavLink to={"#"} >Cybersecurity Maturity Model Certification (CMMC)</NavLink></li>
                                                            <li><NavLink to={"#"} >FedRAMP Advisory and Assessment Services</NavLink></li>

                                                        </ul>
                                                    </Grid>

                                                </Grid>
                                            </Container>
                                        </Box>
                                    </li>
                                    <li className='dropdownParent'><NavLink to={"/cyber-securities"} >Cyber Security <ExpandMoreIcon /></NavLink>
                                        <ul className='dropdownChild'>
                                            <li><Typography variant='h6'><NavLink to={"#"}>Cyber Security Services</NavLink></Typography></li>
                                            <li><NavLink to={"#"} >Cyber Security Assessment</NavLink></li>

                                        </ul>
                                    </li>
                                    <li className='dropdownParent'><NavLink to={"/industries-we-serve"} >Industries We Serve <ExpandMoreIcon /></NavLink>
                                        <ul className='dropdownChild'>
                                            <li><Typography variant='h6'><NavLink to={'#'}> Industries We Serve</NavLink></Typography></li>

                                            <li><NavLink to={"#"} >Government and Public Services</NavLink></li>
                                            <li><NavLink to={"#"} >Healthcare</NavLink></li>
                                            <li><NavLink to={"#"} >Financial Institutions</NavLink></li>
                                            <li><NavLink to={"#"} >Power and Utilities</NavLink></li>
                                            <li><NavLink to={"#"} >Oil and Gas</NavLink></li>
                                            <li><NavLink to={"#"} >Banking and Capital Markets</NavLink></li>
                                            <li><NavLink to={"#"} >Educational Institutions and Nonprofit Organizations</NavLink></li>
                                            <li><NavLink to={"#"} >Insurance</NavLink></li>
                                            <li><NavLink to={"#"} >Pharmaceutical</NavLink></li>
                                            <li><NavLink to={"#"} >Information Technology Solutions</NavLink></li>
                                            <li><NavLink to={"#"} >Communications</NavLink></li>

                                        </ul>
                                    </li>
                                    <li><NavLink to={"/career"} >Career</NavLink></li>
                                    <li><NavLink to={"/contact-us"} >Contact Us</NavLink></li>

                                </ul>
                            </Box>
                        </Toolbar>

                    </AppBar>
                </HideOnScroll>
                <Box>
          <Drawer
            variant="temporary"
            open={mobileOpen}
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