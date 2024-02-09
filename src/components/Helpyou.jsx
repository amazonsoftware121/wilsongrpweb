import { Box, Grid, Stack, Typography,Button } from '@mui/material'
import React from 'react';
import videBg from '../assets/img/wcgbg.jpg'
import { FaArrowRight } from 'react-icons/fa';

const Helpyou = () => {
    return (
        <>
            <Box py={9} sx={{ backgroundImage: `url(${videBg})` }} >
                <Box className="container">
                    <Typography textAlign='center' pt={4} mb={6} className='sectionTitle' sx={{ color: '#fff !important' }} >
                        How will WCG help you?
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Stack spacing={3}>
                                    <Typography  color='#fff'>
                                        WCG’s application security assessment services help organizations determine whether your off-the-shelf or custom application software contains vulnerabilities that can be exploited. WCG’s Application Security Assessment Services evaluate your application’s security in these ways:
                                    </Typography>
                                    <ul className='listDisc' style={{ fontWeight: 500, color: '#fff' }}>
                                        <li>Identifies and evaluates hosting platforms for your applications</li>
                                        <li>Reviews application origins and access control settings</li>
                                        <li>Tests passwords policies, rules, and other critical settings for injection vulnerabilities</li>
                                        <li>Evaluates secure protocols, encryption, and configuration management</li>
                                    </ul>
                                    <Typography  color='#fff'>
                                        We evaluate applications to minimize the risk of information leakage, authentication and session management breaches, spoofing, impersonation, command injections and denial of service attacks. The web application security assessment also determines whether the software behaves and interacts securely with its users, databases, and other applications.
                                    </Typography>
                                    
                                </Stack>
                                <Button sx={{marginTop: '20px',marginBottom: '50px', fontWeight: 'bold', }} style={{backgroundImage: 'linear-gradient(to right, #fff, #fff 50%, #28A0CF 50%)'}} variant='text' textAlign='left' href='https://wilsoncgrp.com/track-record' className='textBtn-sky skyHoverWhite' >Connect with Our Expert &nbsp; <span><FaArrowRight size={14} /> </span></Button>

                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            <iframe src="https://www.youtube.com/embed/2oV31BQXhs0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="100%" height="415" frameborder="0"></iframe>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Helpyou