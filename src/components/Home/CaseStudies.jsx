import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React, { useRef } from 'react';
import BgInsight from '../../assets/img/case-studies.jpg';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Stack } from '@mui/system';

const CaseStudies = () => {

    return (
        <>
            <Box>
                <Box className="caseStudies" >
                    <Container maxWidth={false} sx={{ maxWidth: "1448px" }} >
                        <Grid container spacing={2}>

                            <Grid item md={6} xs={12} >
                                <motion.div initial={{ y: 200, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1.5 }}>
                                    <Box className="caseStudiesInner" sx={{ 
                                        
                                        padding: {
                                            xs: "30px 0 15px 0",
                                            sm: "30px 0 15px 0",
                                            md: "70px 0"
                                            }
                                    
                                     }}>
                                        <Typography component={"p"} variant='p' className='subtitle'>
                                            Case Studies
                                        </Typography>
                                        <Typography component={"h2"} variant='h2' className='sectionTitle'>
                                            Client Case Studies
                                        </Typography>
                                        <Typography className='text' mb={{
                                            xs: 2,
                                            sm: 5,
                                            md: 5
                                            }}>
                                            Check How We Have Helped Our Clients
                                        </Typography>
                                        <Typography component={"h2"} variant='h2' className='sectionTitle'>
                                            Howard University – School of Social Work | Case History
                                        </Typography>
                                        <Typography className='text' mt={3}>
                                            WCG conducted a review of the E. Franklin Frazier Center’s systems, and then provided recommendations and developed a strategic plan that enabled them to transform the methods used to provide services to the underserved population.
                                        </Typography>
                                        <Stack mt={2} spacing={{xs: 0, sm: 3, md: 3, lg: 3}} direction={{xs: 'column',  sm: 'row'}} alignItems='start'>
                                            <Button variant='text' href='#' className='textBtn-sky' > Read More &nbsp; <span><FaArrowRight size={14} /></span></Button>
                                            <Button variant='text' href='#' className='textBtn-sky' >Explore All Our Case Studies &nbsp; <span><FaArrowRight size={14} /></span></Button></Stack>
                                    </Box>
                                </motion.div>
                            </Grid>


                            <Grid item xs={12} md={6}>



                                <Box sx={{

                                    position: {sm: 'relative', md: 'absolute'},
                                    right: 0,
                                    height: {sm: '100%',md: 'calc(100% - 16px)'},
                                    clipPath: {sm: 'none', md: 'polygon(55% 0, 100% 0%, 100% 100%, 0 100%)'}, backgroundColor: "#fff"
                                }}>


                                    <img alt='Howard University' src={BgInsight}  />

                                </Box>

                            </Grid>

                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default CaseStudies