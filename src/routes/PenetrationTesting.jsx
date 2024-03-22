import PageHeader from "../components/PageHeader";
import headerBg from "../assets/img/penbanner-new.jpg"
import { Box, Grid, Stack, Typography } from '@mui/material';
import bgBlue from '../../src/assets/img/bg5.png';
import bgNeed from '../../src/assets/img/penetration_section_bg.jpg';

import BoxIcon1 from '../assets/img/pen_step1.svg';
import BoxIcon2 from '../assets/img/pen_step2.svg';
import BoxIcon3 from '../assets/img/pen_step3.svg';
import BoxIcon4 from '../assets/img/pen_step4.svg';
import BoxIcon5 from '../assets/img/pen_step5.svg';
import BoxIcon6 from '../assets/img/pen_step6.svg';
import WhyUs from "../components/WhyUs";
import BlogSlider from "../components/BlogSlider";
import ContactUs from "../components/ContactUs";

import PostImg1 from '../assets/img/roleImpact.jpg'
import PostImg2 from '../assets/img/covid.jpg'
import PostImg3 from '../assets/img/securityrisk.jpg';

import { motion } from 'framer-motion';

const slides = [
    { id: 1, cat: 'Blog', img: PostImg1, title: 'ROLE AND IMPACT OF WOMEN IN TECHNOLOGY', content: 'Even with the underrepresentation of women in the technology industry, many women have taken leadership roles in the industry and are recognized globally.', link: 'https://wilsoncgrp.com/blog/role-and-impact-of-women-in-technology' },
    { id: 2, cat: 'Blog', img: PostImg2, title: 'COVID-19 FACTS: HOW BUSINESS LEADERS SHOULD TAKE ACTION', content: 'At the current time, much is unknown about the COVID-19 pandemic that has swept the globe. However, there is an undeniable threat to local and international health and economic status.', link: 'https://wilsoncgrp.com/blog/covid-19-facts-how-business-leaders-should-take-action' },
    { id: 3, cat: 'Blog', img: PostImg3, title: 'SURVIVING SECURITY RISKS EXISTENT IN THIRD-PARTY SOFTWARE', content: 'Third-Party Software is comprised of software libraries, modules and other components that are either purchased from a third-party vendor or made freely available.', link: 'https://wilsoncgrp.com/blog/surviving-security-risks-existent-in-third-party-software' }
    // Add more slides as needed
  ];

const PenetrationTesting = () => {
    const bgHalfAfterStyle = {
        content: "''",
        top: '0',
        left: '0',
        // other styles as needed
        backgroundImage: `url(${bgNeed})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0

    };
    const iframeElement = <iframe width="100%" height="480" src="https://www.youtube.com/embed/72qUsBDDvE4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
    return (
        <>
            <PageHeader requestConBtn="#contactUs" videoUrl={iframeElement} headTitle="Penetration Testing Services | Quarterly Pen Test" metaDesc="Penetration Testing (Pen Test) Services identify vulnerable Internet Protocol access points and determine where resilience to attacks and breaches are weak." parent="Risk Management Services" parentUrl="risk-management-and-assessment-services" title={"Penetration Testing Services"} backgroundImage={headerBg}  />
            <Box className="mainContent">
                <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
                    <Box className="container">
                        <Typography variant='h2' className='sectionTitle'>What is Penetration Testing?</Typography>
                        <Box mt={{ xs: 2, md: 3 }}>
                            <Stack spacing={3}>

                                <Typography >
                                    As IT applications, operating systems, devices and networks become more pervasive, so too do threats and vulnerabilities. For instance, as companies open their networks to outside parties such as customers, partners and suppliers, the traditional boundaries that separated trusted users from unwelcomed intruders are becoming more difficult to define and manage. One way to assess these security threats is through cyber security <strong> penetration testing</strong> tools.

                                </Typography>
                                <Typography >  A <strong>penetration test</strong>, also known as a pen test, is a simulated attack against your application or system to check for exploitable vulnerabilities. This process determines how effectively an application, system, device, network, procedure or person meets specific security objectives. <strong>Penetration testing</strong> is invaluable because it mimics real-world attacks to identify methods for circumventing the security features of an application, system or network.</Typography>
                            </Stack>
                        </Box>

                        <Box mt={7}>
                            <Typography variant='h4' component='h3' fontSize='24px' fontWeight='500' mb={2}>Penetration testing is useful for determining:</Typography>
                        </Box>
                        <Box mt={{ md: 2 }}>
                            <ul className="listDisc">
                                <li>How well the system tolerates real-world types of attack patterns</li>
                                <li>The level of sophistication an attacker needs to successfully compromise the system</li>
                                <li>Additional countermeasures that could mitigate threats against the system</li>
                                <li>The ability to detect attacks and respond appropriately</li>
                            </ul>
                        </Box>
                    </Box>
                </Box>

                <Box className="faqSection titleSectionBg" py={{ md: 13, xs: 4 }} position='relative' sx={{ overflow: 'hidden' }} bgcolor='primary.light' >
                    <Box style={bgHalfAfterStyle} sx={{ width: { md: '60%', xs: '100%' }, height: { md: '1135px', xs: '350px' }, position: { md: 'absolute', xs: 'relative' } }}></Box>
                    <Box className='container' sx={{ backgroundColor: 'transparent' }}>
                        <Grid container rowSpacing={{md:2, xs: 0}} columnSpacing={{md: 4, xs: 0}}  >

                            <Grid item xs={12} md={3}>

                            </Grid>
                            <Grid item xs={12} md={9} bgcolor='#fff' px={{md: 0, xs: 2}} pb={6} sx={{ zIndex: 9, borderRadius: '12px', boxShadow: {md: '10px 10px 35px 0px #0000001A', xs: 'none'} }}>
                                <Box p={{ md: 7 }} py={6} >
                                    <Typography variant="h2" color='' className='sectionTitle titleDes2'>When do you need Penetration Testing Services?</Typography>
                                    <Box pt={4}>
                                        <Typography pb={2} fontSize='18px' fontWeight='500'>We recommend fulfilling a cyber security penetration testing if :</Typography>
                                        <ul className="listDisc" style={{ paddingBottom: '35px' }}>
                                            <li>Regularly scheduled analysis and assessments are required by regulatory mandates.</li>
                                            <li>New network infrastructure or applications were added.</li>
                                            <li>Significant upgrades or modifications to infrastructure or applications were made.</li>
                                            <li>New office locations were established.</li>
                                            <li>End-user policies were modified.</li>
                                            <li>Corporate IT was significantly changed.</li>
                                        </ul>
                                        <Typography>Once your cyber environment has been modified, the threats on your cyber security will also be changed, which may result in the ineffectiveness of your original security strategies. Don’t hesitate to take a cyber penetration testing (cyber security penetration testing) to minimize the risks to your website and digital infrastructure.</Typography>
                                    </Box>




                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>


                <Box py={{ md: 15, xs: 4 }} bgcolor='primary.light'>
                    <Box className='container'>
                        <Box>
                            <Typography className='sectionTitle' textAlign='center'>How will WCG help you?</Typography>
                            <Typography pt={3} textAlign='center'>WCG’s Penetration Testing Services are an application of network security assessment offered to government agencies and private organizations who want to evaluate any threats and vulnerabilities to their application and network environment. WCG assists your organization with a cyber penetration testing by following steps below:</Typography>
                        </Box>
                        <Box className="penHelpYouStep" mt={5} pt={12} pb={12}>
                            <Grid container  alignItems='top' className="penStepWrapper">
                                <Grid item xs={12} md={6} className='penContentBox' px={2}>
                                    <Box className="penContentBoxInner" sx={{ display: 'flex', flexWrap: { md: 'nowrap' } }}>
                                    <motion.div initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Box className="textContent">
                                        <Stack spacing={3}>
                                            <Typography variant='h4' fontSize='20px' fontWeight='500' color='primary.main'>
                                                Pre-engagement Interactions:
                                            </Typography>
                                            <Typography fontSize='14px'>
                                                Our risk management team will begin the client engagement with a kickoff meeting to learn more about the client’s needs, considerations, business goals, and any other crucial information.
                                            </Typography>
                                            </Stack>
                                        </Box>
                                        </motion.div>
                                        <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Box className="iconBox">
                                            <img src={BoxIcon1} alt='Pre-engagement Interactions' />
                                        </Box>
                                        </motion.div>
                                    </Box>
                                </Grid>

                                <Grid item md={6} xs={12} className="penStepCountWrapper">
                                <motion.div initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                    <Typography className="stepCount">01</Typography>
                                    </motion.div>
                                </Grid>

                            </Grid>

                            <Grid container  alignItems='top' className="penStepWrapper">
                                <Grid item xs={12} md={6} className='penContentBox' px={2} >
                                    <Box className="penContentBoxInner" sx={{ display: 'flex', flexWrap: { md: 'nowrap' } }}>
                                    <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Box className="textContent">
                                        <Stack spacing={3}>
                                            <Typography variant='h4' fontSize='20px' fontWeight='500' color='primary.main'>
                                            Information Gathering: 
                                            </Typography>
                                            <Typography fontSize='14px'>
                                            Prior to any active assessment activity against a client, our security experts will gather all necessary information to perform a thorough assessment. Depending on the type of assessment, multiple information-gathering approaches may be taken, e.g. internal data gathering.
                                            </Typography>
                                            </Stack>
                                        </Box>
                                        </motion.div>
                                        <motion.div initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Box className="iconBox">
                                            <img src={BoxIcon2} alt='Pre-engagement Interactions' />
                                        </Box>
                                        </motion.div>
                                    </Box>
                                </Grid>

                                <Grid item md={6} xs={12} className="penStepCountWrapper">
                                <motion.div initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                    <Typography className="stepCount">02</Typography>
                                    </motion.div>
                                </Grid>

                            </Grid>


                            <Grid container  alignItems='top' className="penStepWrapper">
                                <Grid item xs={12} md={6} className='penContentBox' px={2}>
                                    <Box className="penContentBoxInner" sx={{ display: 'flex', flexWrap: { md: 'nowrap' } }}>
                                    <motion.div initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Box className="textContent">
                                        <Stack spacing={3}>
                                            <Typography variant='h4' fontSize='20px' fontWeight='500' color='primary.main'>
                                            Threat Modeling: 
                                            </Typography>
                                            <Typography fontSize='14px'>
                                            The objective of the threat modeling exercise is to understand the impact of technical network-related threats to the business. This high-level exercise is not as complete and thorough as a Comprehensive Security Assessment , but the resulting threat profile will help us ensure that the technical testing considers threats that may have a high impact on business operations.
                                            </Typography>
                                            </Stack>
                                        </Box>
                                        </motion.div>
                                        <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Box className="iconBox">
                                            <img src={BoxIcon3} alt='Pre-engagement Interactions' />
                                        </Box>
                                        </motion.div>
                                    </Box>
                                </Grid>

                                <Grid item md={6} xs={12} className="penStepCountWrapper">
                                <motion.div initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                    <Typography className="stepCount">03</Typography>
                                    </motion.div>
                                </Grid>

                            </Grid>

                            <Grid container  alignItems='top' className="penStepWrapper">
                                <Grid item xs={12} md={6} className='penContentBox' px={2}>
                                    <Box className="penContentBoxInner" sx={{ display: 'flex', flexWrap: { md: 'nowrap' } }}>
                                    <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Box className="textContent">
                                        <Stack spacing={3}>
                                            <Typography variant='h4' fontSize='20px' fontWeight='500' color='primary.main'>
                                            Vulnerability Assessment:
                                            </Typography>
                                            <Typography fontSize='14px'>
                                            During the Vulnerability Assessment , we will evaluate any threats and vulnerabilities to an organization’s information systems and environment. WCG assesses the resiliency of networks and devices that protect, process, store and transmit information. We also identify security issues that might compromise information, systems or devices.
                                            </Typography>
                                            </Stack>
                                        </Box>
                                        </motion.div>
                                        <motion.div initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Box className="iconBox">
                                            <img src={BoxIcon4} alt='Pre-engagement Interactions' />
                                        </Box>
                                        </motion.div>
                                    </Box>
                                </Grid>

                                <Grid item md={6} xs={12} className="penStepCountWrapper">
                                <motion.div initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                    <Typography className="stepCount">04</Typography>
                                    </motion.div>

                                </Grid>

                            </Grid>

                            <Grid container  alignItems='top' className="penStepWrapper">
                                <Grid item xs={12} md={6} className='penContentBox' px={2}>
                                    <Box className="penContentBoxInner" sx={{ display: 'flex', flexWrap: { md: 'nowrap' } }}>
                                    <motion.div initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Box className="textContent">
                                        <Stack spacing={3}>
                                            <Typography variant='h4' fontSize='20px' fontWeight='500' color='primary.main'>
                                            Simulation: 
                                            </Typography>
                                            <Typography fontSize='14px'>
                                            Our risk management team will begin the client engagement with a kickoff meeting to learn more about the client’s needs, considerations, business goals, and any other crucial information.
                                            </Typography>
                                            </Stack>
                                        </Box>
                                        </motion.div>
                                        <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Box className="iconBox">
                                            <img src={BoxIcon5} alt='Pre-engagement Interactions' />
                                        </Box>
                                        </motion.div>
                                    </Box>
                                </Grid>

                                <Grid item md={6} xs={12} className="penStepCountWrapper">
                                <motion.div initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                    <Typography className="stepCount">05</Typography>
                                    </motion.div>
                                </Grid>

                            </Grid>


                            <Grid container  alignItems='top' className="penStepWrapper">
                                <Grid item xs={12} md={6} className='penContentBox' px={2}>
                                    <Box className="penContentBoxInner" sx={{ display: 'flex', flexWrap: { md: 'nowrap' } }}>
                                    <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Box className="textContent">
                                        <Stack spacing={3}>
                                            <Typography variant='h4' fontSize='20px' fontWeight='500' color='primary.main'>
                                            Reporting:
                                            </Typography>
                                            <Typography fontSize='14px'>
                                            WCG provides proof of concepts and deployment recommendations for mitigating identified risks. A complete cyber penetration testing report with clear and concise recommendations will be prepared by our security experts and delivered to the client.
                                            </Typography>
                                            </Stack>
                                        </Box>
                                        </motion.div>
                                        <motion.div initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Box className="iconBox">
                                            <img src={BoxIcon6} alt='Pre-engagement Interactions' />
                                        </Box>
                                        </motion.div>
                                    </Box>
                                </Grid>

                                <Grid item md={6} xs={12} className="penStepCountWrapper">
                                <motion.div initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                    <Typography className="stepCount">06</Typography>
                                    </motion.div>
                                </Grid>

                            </Grid>

                        </Box>
                    </Box>
                </Box>
                <WhyUs />
                <BlogSlider resourcesSlide={slides} />
                <ContactUs />

            </Box>

        </>
    )
}

export default PenetrationTesting