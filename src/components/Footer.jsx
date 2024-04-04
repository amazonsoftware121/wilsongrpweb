import { Container, Box, Grid } from '@mui/material'
import React from 'react'

import { FaFacebookF,FaTwitter,FaRss,FaLinkedinIn,FaYoutube,FaInstagram,FaEnvelopeOpen,FaPhoneAlt  } from "react-icons/fa";
import { FaLocationDot, FaXTwitter  } from "react-icons/fa6";

import FooterBg from '../assets/img/footer.webp';



const Footer = () => {
    return (
        <Box className='footer' sx={{backgroundImage: `url(${FooterBg})` }}>
        

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
                                <li><a href='https://www.facebook.com/WilsonCGroupLLC/' target='_blank'><FaFacebookF /></a></li>
                                <li><a href='https://twitter.com/WilsonCGroupllc' target='_blank'><FaXTwitter /></a></li>
                                <li><a href='https://www.linkedin.com/company/wilson-consulting-group-llc/' target='_blank'><FaLinkedinIn /></a></li>
                                <li><a href='https://www.youtube.com/channel/UCNxMVbZaosUNemmSmkjJOOw' target='_blank'><FaYoutube /></a></li>
                                <li><a href='https://wilsoncgrp.com/blog' target='_blank'><FaRss /></a></li>
                                </ul>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Box className='footerCol fCol2'>
                                <h4>Quick Links</h4>
                                <div className='footerMenu'>
                                    <ul>
                                        <li><a href="https://wilsoncgrp.com/about-us">About Us</a></li>
                                        <li><a href="https://wilsoncgrp.com/our-services">Our Services</a></li>
                                        <li><a href="https://wilsoncgrp.com/cyber-security-services">Cyber Security</a></li>
                                        <li><a href="https://wilsoncgrp.com/industry-sectors">Industries We Serve</a></li>
                                        <li><a href="https://wilsoncgrp.com/careers">Careers</a></li>
                                        <li><a href="https://wilsoncgrp.com/contact-us">Contact</a></li>
                                        <li><a href="https://wilsoncgrp.com/privacy-policy">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Box className='footerCol fCol3'>
                                <h4>Our Services</h4>
                                <div className='footerMenu'>
                                    <ul>
                                        <li><a href="https://wilsoncgrp.com/cybersecurity-assessment">Cyber Security Assessment</a></li>
                                        <li><a href="https://wilsoncgrp.com/risk-management-and-assessment-services">Risk Management and Assessment</a></li>
                                        <li><a href="https://wilsoncgrp.com/cloud-services">Cloud Services</a></li>
                                        <li><a href="https://wilsoncgrp.com/cybersecurity-maturity-model-certification">Cybersecurity Maturity Model Certification (CMMC)</a></li>
                                        <li><a href="https://wilsoncgrp.com/fedramp-consulting">FedRAMP Advisory and Assessment Services</a></li>
                                        <li><a href="https://wilsoncgrp.com/information-technology-governance">IT Governance</a></li>
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
                                            <a href="mailto:Sales@wilsoncgrp.com">sales@wilsoncgrp.com</a>
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
                                        <a href="tel:1.866.780.1655"> 1.866.780.1655</a>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
                <div className='footerBottom'>
                <p className='copyright text-center'>© 2024 Wilson Consulting Group. All Rights Reserved.</p>
                </div>
            </Box>
            </Container>
        </Box>
    )
}

export default Footer