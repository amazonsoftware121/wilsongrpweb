import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Box, Grid, Typography, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MegaMenu from './MegaMenu';





const NavBar = () => {

    const [isVisible, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!isVisible);
    };

    return (

        <ul className="navigationMenu">



            <div className="toggle-button" onClick={toggleVisibility}>

            </div>

            <div className={`content ${isVisible ? 'visible' : ''}`}>

                {/* Add your content here */}
            </div>


            <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={"/"} >Home</NavLink></li>
            <li className='dropdownParent'> <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="https://wilsoncgrp.com/contact-us" >About Us <ExpandMoreIcon /></NavLink>
                <MegaMenu />
            </li>


            <li className='dropdownParent'><NavLink to={"/services"} >Our Services <ExpandMoreIcon /> </NavLink>
                <Box className="megaMenu" sx={{ width: '1070px', position: 'absolute' }}>
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Typography variant='h6' sx={{ fontWeight: 700 }}><NavLink to={"#"} >IT Governance Services</NavLink></Typography>
                                <ul className='dropdownChild'>
                                    <li><NavLink to={"#"} >IT Change Management</NavLink></li>
                                    <li><NavLink to={"#"} >IT Governance</NavLink></li>
                                    <li><NavLink to={"#"} >Project Management</NavLink></li>
                                </ul>

                                <Typography variant='h6' sx={{ fontWeight: 700, }} mt={5}><NavLink to={"#"} >Cloud Services</NavLink></Typography>
                                <Typography variant='h6' sx={{ fontWeight: 700 }}><NavLink to={"#"} >Data and Analytics Services</NavLink></Typography>


                            </Grid>




                            <Grid item xs={12} md={4}>
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


                            <Grid item xs={12} md={4}>
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

    )
}

export default NavBar