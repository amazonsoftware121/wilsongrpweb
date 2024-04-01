import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { NoEncryption } from '@mui/icons-material';


const WCGApproach = () => {
    return (
        <>
            <Box  py={{ md: 12, xs: 4 }}>
                <Box className='container'>
                    <Box textAlign='center'>
                        <Typography variant='h2' className='sectionTitle'>The WCG approach</Typography>
                        <Typography>Our assessment and security penetration test will:</Typography>
                    </Box>
                    <Grid container spacing={4} pt={{md: 15, xs: 5}}>
                        <Grid item md={4} gap={2}>
                            <Card sx={{height: {md: '100%', lg: 'auto', sm: 'auto'}, minHeight: {lg: '360px', md: 'auto', xs: 'auto' }, boxShadow: 'none', borderRadius: '12px', borderBottom: '2px solid #28A0CF' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="100px"
                                    image="/assets/img/assess_icon.png"
                                    sx={{width: '100px', margin: '20px'}}
                                    
                                />
                                <CardContent sx={{padding: '20px'}}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '20px', fontWeight: 500}}  color='primary.main'>
                                        Assess
                                    </Typography>
                                    <Typography fontSize='14px' >
                                        We will conduct assessments and health checks to evaluate your current information security posture. According to your needs and business goal, we also determine if your security program properly and cost-effectively addresses your real risks and threats.
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>


                        <Grid item md={4} mt={{md: 0, xs: 0, lg: -8}}>
                        <Card  sx={{ height: {md: '100%', lg: 'auto', sm: 'auto'}, minHeight: {lg: '360px', md: 'auto', xs: 'auto' }, boxShadow: 'none', borderRadius: '12px', borderBottom: '2px solid #28A0CF' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="100"
                                    image="/assets/img/design_icon.png"
                                    sx={{width: '100px', margin: '20px'}}
                                />
                                <CardContent sx={{padding: '20px'}}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '20px', fontWeight: 500}}  color='primary.main'>
                                    Design
                                    </Typography>
                                    <Typography fontSize='14px' >
                                    We will work with you on strategy development and the architectural design of your networking systems to help protect the confidentiality, integrity and availability of critical data. Then we will provide proof of concepts and deployment recommendations for mitigating identified risks based on the globally recognized ISO 27001 standard and other specific industry best practices.
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>


                        <Grid item md={4}>
                        <Card sx={{height: {md: '100%', lg: 'auto', sm: 'auto'}, minHeight: {lg: '360px', md: 'auto', xs: 'auto' }, boxShadow: 'none', borderRadius: '12px', borderBottom: '2px solid #28A0CF' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="100"
                                    image="/assets/img/manage_icon.png"
                                    sx={{width: '100px', margin: '20px'}}
                                />
                                <CardContent sx={{padding: '20px'}}>
                                    <Typography gutterBottom variant="h5" sx={{fontSize: '20px', fontWeight: 500}} component="div" color='primary.main'>
                                    Manage
                                    </Typography>
                                    <Typography fontSize='14px' >
                                    WCG supports efforts to comply with government and industry regulations. We also assist with cloud migration or provide a hybrid cloud strategy to ensure your cloud security.
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default WCGApproach