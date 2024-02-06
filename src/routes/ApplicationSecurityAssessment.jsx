import React from 'react'
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/applicationbg.jpg';
import Helpyou from '../components/Helpyou'
import { Stack, Box, Typography, Grid } from '@mui/material';
import bgBlue from '../../src/assets/img/bg5.png';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import WhyUs from '../components/WhyUs';
import BlogSlider from '../components/BlogSlider';
import ContactUs from '../components/ContactUs';

const ApplicationSecurityAssessment = () => {
    const [expanded, setExpanded] = React.useState('panel1');
    const [expandIcon, setExpandIcon] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <PageHeader title={"Application Security Assessment"} backgroundImage={headerBg} parent={"Risk Management Services"} parentUrl={"https://wilsoncgrp.com/risk-management-and-assessment-services"} />
            <Box className="mainContent">
                <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
                    <Box className="container">
                        <Typography variant='h2' className='sectionTitle'>What is an Application Security Assessment?</Typography>
                        <Box mt={{ md: 3 }}>
                            <Stack spacing={3}>
                                <Typography >
                                    As cyber-attacks increasingly focus on application-layer disruptions, the importance of application security has never been more vital. Weak application security represents significant control deficiencies that can potentially compromise sensitive data, reporting, and regulatory compliance.
                                </Typography>
                                <Typography >
                                    Web Application security assessment is a unique area of assessment and penetration testing that analyzes the security of your organization’s internal and public-facing applications, APIs, and mobile apps. Unlike infrastructure-based assessments, the methodology utilized by WCG for identifying security vulnerabilities and significant issues is dependent upon the type of web or mobile application being assessed. Although several methodologies do exist, they are often not versatile enough to cope with the wide variety of custom applications commonly encountered.
                                </Typography>
                            </Stack>
                        </Box>

                        <Box mt={7}>
                            <Typography variant='h4' component='h3' fontSize='24px' fontWeight='500' mb={2}>
                                Key benefits of Application Security Assessment Services include, but are not limited to:
                            </Typography>


                        </Box>
                        <Box mt={{ md: 3 }}>
                            <ul className='listDisc'>
                                <li>Provide improved security posture and compliance so your company meets the needs of industry standard practices</li>
                                <li>Provide management for safety and security of sensitive information for your company and your users</li>
                                <li>Ongoing monitoring and management to keep your company secure and compliant</li>
                                <li>Make sure your app is compliant with cybersecurity laws.</li>
                            </ul>
                        </Box>

                    </Box>
                </Box>


                <Box className="faqSection titleSectionBg" bgcolor={'primary.light'} py={20}>
                    <Box className='container'>
                        <Grid container rowSpacing={2} columnSpacing={4}>

                            <Grid item xs={12} md={5}>
                                <Box pr={{ md: 6 }}>
                                    <Typography color='primary.main'>FAQs</Typography>
                                    <Typography mt={3} variant='h2' className='sectionTitle'>What are some of your application-related challenges?</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box className='accordionDark'>

                                    <Accordion sx={{ background: 'none', boxShadow: 'none', borderBottom: expanded === 'panel1' ? `none` : '2px solid #000' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary
                                            expandIcon={expanded === 'panel1' ? <FaMinus size={26} color='#28A0CF' /> : <FaPlus size={26} />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                            sx={{ borderBottom: expanded === 'panel1' ? '1px solid #28A0CF' : 'none' }}
                                        >
                                            <Typography variant='h3' sx={{ fontSize: '24px', fontWeight: 'bold', lineHeight: 'normal', color: expanded === 'panel1' ? '#28A0CF' : '#000' }}>My company’s website encounters multiple crashes after a recent cyber security incident. What can I do?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant='h4' fontWeight='500' fontSize='22px' mb={4}>Our Solution</Typography>
                                            <Typography>

                                                WCG can help provide a comprehensive web application security assessment where we evaluate hosting platforms as well as your security protocols to identify exploitable security risks within your website. In addition to identifying potential risks, our application security assessment services analyze the “root cause” for identified risks and provide actionable strategies to resolve them, improving processes of Systems Development Life Cycle.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>


                                    <Accordion sx={{ background: 'none', border: 'none', boxShadow: 'none', borderRadius: '0 !important', borderBottom: expanded === 'panel2' ? `none` : '2px solid #000' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary
                                            expandIcon={expanded === 'panel2' ? <FaMinus color='#28A0CF' size={26} /> : <FaPlus size={26} />}
                                            aria-controls="panel2bh-content"
                                            id="panel2bh-header"
                                            sx={{ borderBottom: expanded === 'panel2' ? '1px solid #28A0CF' : 'none' }}
                                        >
                                            <Typography variant='h3' sx={{ fontSize: '24px', fontWeight: 'bold', lineHeight: 'normal', color: expanded === 'panel2' ? '#28A0CF' : '#000' }}> My organization’s web application failed a PCI DSS compliance standard audit. How can you help?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant='h4' fontWeight='500' fontSize='22px' mb={4}>Our Solution</Typography>
                                            <Typography>
                                                WCG uses PCI DSS v.3.2 to bring your company and its applications up to standard compliance, making sure your application is compliant with cybersecurity laws. We also have experienced consultants to assist you with managing web application security assessment practices and answer any questions you have at any time throughout the process.
                                            </Typography>

                                        </AccordionDetails>
                                    </Accordion>


                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
                <Helpyou />
                <Box py={12}>
                    <WhyUs />
                </Box>

                <Box py={12} bgcolor='primary.light'>
                    <BlogSlider />
                </Box>

                <Box py={14}>
                    <ContactUs />
                </Box>




            </Box>
        </>
    )
}

export default ApplicationSecurityAssessment