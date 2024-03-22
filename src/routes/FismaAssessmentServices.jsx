import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import bgBlue from '../../src/assets/img/bg5.png';
import WhyUs from '../components/WhyUs';
import BlogSlider from '../components/BlogSlider';
import PostImg1 from '../assets/img/roleImpact.jpg'
import PostImg2 from '../assets/img/covid.jpg'
import PostImg3 from '../assets/img/securityrisk.jpg';
import ContactUs from '../components/ContactUs';
import PageHeader from '../components/PageHeader';

import headerBg from '../assets/img/fissma_banner-new.jpg';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

import bgHalf from '../assets/img/fisma_half.jpg';
import { motion } from 'framer-motion';

const slides = [
    { id: 1, cat: 'Blog', img: PostImg1, title: 'ROLE AND IMPACT OF WOMEN IN TECHNOLOGY', content: 'Even with the underrepresentation of women in the technology industry, many women have taken leadership roles in the industry and are recognized globally.', link: 'https://wilsoncgrp.com/blog/role-and-impact-of-women-in-technology' },
    { id: 2, cat: 'Blog', img: PostImg2, title: 'COVID-19 FACTS: HOW BUSINESS LEADERS SHOULD TAKE ACTION', content: 'At the current time, much is unknown about the COVID-19 pandemic that has swept the globe. However, there is an undeniable threat to local and international health and economic status.', link: 'https://wilsoncgrp.com/blog/covid-19-facts-how-business-leaders-should-take-action' },
    { id: 3, cat: 'Blog', img: PostImg3, title: 'SURVIVING SECURITY RISKS EXISTENT IN THIRD-PARTY SOFTWARE', content: 'Third-Party Software is comprised of software libraries, modules and other components that are either purchased from a third-party vendor or made freely available.', link: 'https://wilsoncgrp.com/blog/surviving-security-risks-existent-in-third-party-software' }
    // Add more slides as needed
];

const FismaAssessmentServices = () => {

    const bgHalfAfterStyle = {
        content: "''",
        top: '0',
        left: '0',
        // other styles as needed
        backgroundImage: `url(${bgHalf})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
        zIndex: 0

    };

    return (
        <>
            <PageHeader requestConBtn="#contactUs" headTitle="FISMA Compliance Consulting | NIST 800-53 & FISMA Assessment" metaDesc="FISMA Assessment assists organizations and federal agencies to assess control implementation, improve their security posture, and achieve FISMA Compliance." parent="Risk Management Services" parentUrl="risk-management-and-assessment-services" title={"FISMA Assessment Services"} backgroundImage={headerBg} />
            <Box className="mainContent">
                <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
                    <Box className="container">
                        <Typography variant='h2' className='sectionTitle'>What is FISMA Compliance?</Typography>
                        <Box mt={{ xs: 2, md: 3 }}>
                            <Stack spacing={3}>

                                <Typography >
                                    FISMA stands for the Federal Information Security Management Act, which was passed by the United States Congress in 2002. FISMA was created to require each federal agency to develop, document, and implement a complete information security plan to protect and support the operations of the agency. FISMA compliance is data security guidance set by FISMA and the National Institute of Standards and Technology (NIST).
                                </Typography>

                                <Typography>FISMA compliance is mandatory for all federal agencies and any contractors or other organizations supporting a federal agency in IT system. That means not only federal agencies, but private sector companies that do business with federal agencies also must adhere to the same information security guidelines.</Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Box>

                <Box className="fismaCompliance" bgcolor='primary.light' py={{ md: 10, xs: 4 }}>
                    <Box className='container'>
                        <Typography variant='h2' className='sectionTitle' mb={3}>
                            Why do you need FISMA Compliance?
                        </Typography>
                        <Stack spacing={3}>
                            <Typography>
                                Today's complex information systems and networks are enormously beneficial for most users, but they do come with certain inherent risks. Federal agencies are an alluring target for hackers because these agencies transmit, process, and store vital, strategic, and confidential information that could be used for personal gain or to harm national interests. That’s why proper information security is so vital to a federal agency's ability to fend off cyber criminals and protect sensitive national security information.
                            </Typography>
                            <Typography fontSize='18px' fontWeight='500'>
                                It is critical that agencies conduct a FISMA assessment to determine the risks to federal information systems and become compliant with this regulation.
                            </Typography>
                        </Stack>

                        <Box className="fismaKey" mt={4}>
                            <Grid container pb={7}>
                                <Grid alignContent='end' pr={{md: 10}} item md={6} sm={12} className='keyBenefits' zIndex='999'>
                                <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}> 
                                <Box className="arroBox right">
                                    <Box variant="span" className="rightShape"></Box>
                                    <Box variant="span" className="arrowShape"></Box>
                                    <Box className='arrowText'> <FaThumbsUp />key Benefits of FISMA Compliance: </Box>
                                </Box>
                                </motion.div>
                                <motion.div initial={{ y: 200, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1.5 }}>
                                <ul>
                                    <li>Assuring clients that their sensitive data is protected</li>
                                    <li>Protecting government information and assets with confidentiality, integrity, and availability</li>
                                    <li>Reducing IT related cost to the federal government</li>
                                    <li>Maintaining loyal clients and attract new ones</li>
                                    </ul>
                                    </motion.div>
                                </Grid>
                                <Grid pl={{md: 15}} item md={6} sm={12} className='poorGrade' zIndex='999'>
                                <motion.div initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}> 
                                <Box className="arroBox left">
                                    <Box variant="span" className="rightShape"></Box>
                                    <Box variant="span" className="arrowShape"></Box>
                                    <Box className='arrowText'> Penalties for Poor FISMA Grades: <FaThumbsDown /></Box>
                                </Box>
                                </motion.div>
                                <motion.div initial={{ y: 200, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1.5 }}>
                                    <ul>
                                        <li>Censure by congress</li>
                                        <li>Negative publicity for the agency</li>
                                        <li>Reduced federal funding for agencies</li>
                                    </ul>
                                    </motion.div>
                                </Grid>
                            </Grid>


                        </Box>



                    </Box>

                </Box>




                <Box className="fismaComplaint titleSectionBg" py={{ md: 20, xs: 4 }} position='relative' sx={{ overflow: 'hidden' }}  >
                    <Box style={bgHalfAfterStyle} sx={{ width: { md: '60%', xs: '100%' }, height: { md: '1135px', xs: '350px' }, position: { md: 'absolute', xs: 'relative' } }}></Box>
                    <Box className='container' sx={{ backgroundColor: 'transparent'  }}>
                        <Grid container rowSpacing={{md:2, xs: 0}} columnSpacing={{md: 4, xs: 0}}  >

                            <Grid item xs={12} md={3}>

                            </Grid>
                            <Grid item xs={12} md={9} bgcolor='#FAFAFAF7' px={{md: 0, xs: 2}} pb={6} sx={{ zIndex: 9, borderRadius: '12px', boxShadow: {md: '10px 10px 35px 0px #0000001A', xs: 'none'} }}>
                                <Box p={{ md: 7 }} py={6} >
                                    <Typography variant="h2" color='' className='sectionTitle titleDes2'>How to become FISMA compliant?</Typography>
                                    <Box pt={4}>
                                        <Typography pb={3} fontSize='18px' fontWeight='500'>To be FISMA compliant you need to information security controls across your organization based on the guidance from NIST. Specific FISMA requirements are detailed in NIST SP 800-53 Rev. 5 (current publication), the Federal Information Processing Standards (FIPS) publications 199 and 200.</Typography>
                                        
                                        <Typography pb={2} fontSize='18px' fontWeight='700'>FISMA requirements include:</Typography>

                                        <ul className="listDisc" style={{ paddingBottom: '35px' }}>
                                       <li><strong> Information System Inventory:</strong> FISMA requires every agency to maintain an inventory of all systems and their integrations in use.</li>
                                       <li><strong>Risk Categorization:</strong> FIPS 199 documents how an agency categorizes their risk and security requirements. Each agency is responsible for maintaining the highest level of security necessary per this document.</li>
                                       <li><strong>System Security Plan: </strong>FISMA requires that each agency have a security plan in place and a process to make sure the plan is updated regularly.</li>
                                       <li><strong>Security Controls:</strong> NIST 800-53 Rev. 4 defines 20 security controls that each agency must implement to be FISMA compliant.</li>
                                       <li><strong>Risk Assessments:</strong> Any time an agency makes a change to their systems, they are required to perform a three tiered risk assessment using the Risk Management Framework (RMF).</li>
                                       <li><strong>Certification and Accreditation:</strong> FISMA requires each agency to conduct yearly security reviews. Agencies must demonstrate they can implement, maintain, and monitor systems to be FISMA compliant.</li>
                                        </ul>

                                    </Box>




                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>



                <Box className="wcgHelp" bgcolor='primary.light' py={{ md: 10, xs: 4 }}>
                    <Box className='container'>

                        <Grid container>
                            <Grid item sm={6} sx={{ paddingRight: { md: 10 } }}>

                                <Typography variant='h2' className='sectionTitle' mb={3}>How will WCG help you?</Typography>
                                <Typography>  WCG provides knowledgeable and experienced consultants to assist federal agencies to improve their security posture and become compliant with FISMA.</Typography>


                            </Grid>
                            <Grid item sm={6}>
                                <Typography fontSize='18px' fontWeight='500' py={2}>Our FISMA Assessment Service helps clients to:</Typography>
                                <ul className='cusotmIconList'>
                                    <li> <FaThumbsUp /> Categorize the information to be protected</li>
                                    <li> <FaThumbsUp />Select minimum baseline controls</li>
                                    <li> <FaThumbsUp /> Refine controls using a risk assessment procedure</li>
                                    <li><FaThumbsUp /> Document the controls in the system security plan</li>
                                    <li><FaThumbsUp /> Implement security controls in appropriate information systems</li>
                                    <li><FaThumbsUp /> Assess the effectiveness of the security controls once they have been implemented</li>
                                    <li><FaThumbsUp /> Determine agency-level risks to the mission or business case</li>
                                    <li><FaThumbsUp /> Monitor the security controls on a continuous basis</li>

                                </ul>
                            </Grid>



                        </Grid>





                    </Box>
                </Box>

                <WhyUs />
                <BlogSlider resourcesSlide={slides} />
                <ContactUs />
            </Box>
        </>
    )
}

export default FismaAssessmentServices