import React from 'react'
import { Box, Grid, Typography } from '@mui/material';

import whyus1 from '../assets/img/users-cog.png';
import whyus2 from '../assets/img/practicalguidence.png';
import whyus3 from '../assets/img/pricing.png';
import whyus4 from '../assets/img/customerservice.png';
import whyus5 from '../assets/img/trackrecords.png';
import whyus6 from '../assets/img/adopting.png';




const WhyUs = () => {
    return (
        <>
            <Box className="container">
                <Typography pt={4} mb={12} variant='h2' className='sectionTitle' textAlign='center'>Why us</Typography>
                <Grid container mt={5} className='contentBox'>
                    <Grid item sx={12} md={4}>
                        <Box textAlign='center'>
                        <img src={whyus1} />
                        <Typography fontSize='20px' pt={1} pb={2} fontWeight='500'>Experienced <Typography fontSize='20px' fontWeight='500' component='span' color={'primary.main'} >Team</Typography></Typography>
                        <Typography fontSize='15px'>Our team has unparalleled experience aiding governments and businesses around the world in defending themselves against cybercrime, reducing risks, complying with regulations, and transforming their IT, security operations & infrastructure.</Typography>
                        </Box>
                    </Grid>

                    <Grid item sx={12} md={4}>
                        <Box textAlign='center'>
                        <img src={whyus2} />
                        <Typography fontSize='20px' pt={1} pb={2} fontWeight='500'>Practical <Typography fontSize='20px' fontWeight='500' component='span' color={'primary.main'} >Guidance</Typography></Typography>
                        <Typography fontSize='15px'>WCG has hands-on IT experts who have extensive knowledge and experience helping businesses.</Typography>
                        </Box>
                    </Grid>

                    <Grid item sx={12} md={4}>
                        <Box textAlign='center'>
                        <img src={whyus3} />
                        <Typography fontSize='20px' pt={1} pb={2} fontWeight='500'>Reasonable <Typography fontSize='20px' fontWeight='500' component='span' color={'primary.main'} >Pricing</Typography></Typography>
                        <Typography fontSize='15px'>We provide simple, straightforward pricing with no hidden agenda, miscellaneous charges, or add-on fees.</Typography>
                        </Box>
                    </Grid>


                    <Grid item sx={12} md={4}>
                        <Box textAlign='center'>
                        <img src={whyus4} />
                        <Typography fontSize='20px' pt={1} pb={2} fontWeight='500'>Personalized Customer <Typography fontSize='20px' fontWeight='500' component='span' color={'primary.main'} >Service</Typography></Typography>
                        <Typography fontSize='15px'>Our personable, dedicated staff to answer any questions you have at any time throughout the process.</Typography>
                        </Box>
                    </Grid>

                    <Grid item sx={12} md={4}>
                        <Box textAlign='center'>
                        <img src={whyus5} />
                        <Typography fontSize='20px' pt={1} pb={2} fontWeight='500'>Proven Track <Typography fontSize='20px' fontWeight='500' component='span' color={'primary.main'} >Records</Typography></Typography>
                        <Typography fontSize='15px'>WCG has an exceptional reputation and track record for numerous services.</Typography>
                        </Box>
                    </Grid>

                    <Grid item sx={12} md={4}>
                        <Box textAlign='center'>
                        <img src={whyus6} />
                        <Typography fontSize='20px' pt={1} pb={2} fontWeight='500'>Adopting to Your <Typography fontSize='20px' fontWeight='500' component='span' color={'primary.main'} >Needs</Typography></Typography>
                        <Typography fontSize='15px'>We develop and customize an approach that suits your immediate requirements and future goals. To achieve this, WCG will provide pragmatic insights and balanced views on how to prioritize any associated actions.</Typography>
                        </Box>
                    </Grid>
                   
                </Grid>
            </Box>
        </>
    )
}

export default WhyUs