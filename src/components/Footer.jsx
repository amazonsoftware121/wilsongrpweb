import { Container, Box, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaYoutube,FaInstagram,FaEnvelopeOpen,FaPhoneAlt  } from "react-icons/fa";
import { FaLocationDot, FaXTwitter  } from "react-icons/fa6";
import Newsletter from './Newsletter';


const Footer = () => {
    return (
        <Box className='footer'>
        <Newsletter />
        <Container>
            <Box>
                <Box className='footerTop'>
                    <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                            <Box className='footerCol fCol1'>
                                <h4>About Company</h4>
                                <p>
                                    Wilson Consulting Group (WCG) is an innovative global cybersecurity consulting firm headquartered in Washington D.C., with a European office in London, England.
                                </p>
                                
                                <ul className='footerSocial'>
                                <li><a href='#'><FaFacebookF /></a></li>
                                <li><a href='#'><FaXTwitter /></a></li>
                                <li><a href='#'><FaLinkedinIn /></a></li>
                                <li><a href='#'><FaYoutube /></a></li>
                                <li><a href='#'><FaInstagram /></a></li>
                                </ul>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Box className='footerCol fCol2'>
                                <h4>Quick Links</h4>
                                <div className='footerMenu'>
                                    <ul>
                                        <li><Link to="/">About Us</Link></li>
                                        <li><Link to="/">Our Services</Link></li>
                                        <li><Link to="/">Cyber Security</Link></li>
                                        <li><Link to="/">Industries We Serve</Link></li>
                                        <li><Link to="/">Careers</Link></li>
                                        <li><Link to="/">Contact</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Box className='footerCol fCol3'>
                                <h4>Our Services</h4>
                                <div className='footerMenu'>
                                    <ul>
                                        <li><Link to="/">Cyber Security Assessment</Link></li>
                                        <li><Link to="/">Risk Management and Assessment</Link></li>
                                        <li><Link to="/">Cloud Services</Link></li>
                                        <li><Link to="/">Cybersecurity Maturity Model Certification (CMMC)</Link></li>
                                        <li><Link to="/">FedRAMP Advisory and Assessment Services</Link></li>
                                        <li><Link to="/">IT Governance</Link></li>
                                    </ul>
                                </div>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Box className='footerCol fCol4'>
                                <h4>Contact Info</h4>
                                <div className='contactInfo'>
                                    <div className='contactInfoItem'>
                                        <div className='contactInfoItem__icon'>
<FaEnvelopeOpen />
                                        </div>
                                        <div className='contactInfoItem__text'>
                                            sales@wilsoncgrp.com
                                        </div>
                                    </div>

                                    <div className='contactInfoItem'>
                                        <div className='contactInfoItem__icon'>
                                        <FaLocationDot />

                                        </div>
                                        <div className='contactInfoItem__text'>
                                            800 Maine Avenue SW, Suite 200, Washington DC 20024
                                        </div>
                                    </div>


                                    <div className='contactInfoItem'>
                                        <div className='contactInfoItem__icon'>
                                        <FaPhoneAlt />
                                        </div>
                                        <div className='contactInfoItem__text'>
                                            1.866.780.1655
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
                <div className='footerBottom'>
                <p className='copyright text-center'>© 2023 Wilson Consulting Group. All Rights Reserved.</p>
                </div>
            </Box>
            </Container>
        </Box>
    )
}

export default Footer