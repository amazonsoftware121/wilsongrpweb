import React from 'react';
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/networkBanner-new.jpg';
import bgBlue from '../../src/assets/img/bg5.png';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import WhyUs from '../components/WhyUs';
import BlogSlider from '../components/BlogSlider';

import PostImg1 from '../assets/img/Frame-1.webp'
import PostImg2 from '../assets/img/cyber_security.jpg'
import PostImg3 from '../assets/img/AdobeStock_124587776-1024x576-1.jpg';
import PostImg4 from '../assets/img/The-Need-for-Ongoing-Security-Awareness-Training-1024x384-1.webp';
import ContactUs from '../components/ContactUs';
import bgNeed from '../assets/img/wcgofferBg.jpg';
import { FaThumbsUp } from 'react-icons/fa';

const slides = [
    { id: 1, cat: 'Blog', img: PostImg1, title: 'Improving Cybersecurity Awareness in Healthcare', content: "Many cyberattacks succeed due to mistakes by employees and a lack of awareness of basic aspects of cybersecurity. According to the 2022 Verizon Data Breach Investigations Report, 82% of data breaches in 2021 involved the human element. Improving security awareness of the workforce by focusing on key behaviors will go a long way toward improving security and preventing data breaches.", link: 'https://wilsoncgrp.com/blog/improving-cybersecurity-awareness-in-healthcare' },
    { id: 2, cat: 'Blog', img: PostImg2, title: "Ways to Mitigate Social Engineering-based Cyber Attacks", content: "Social engineering is an attack mechanism majorly aimed at misleading employees or individuals to hand over relevant information for the attacker's financial gain. Social engineering attacks are launched mostly via email, social media, and over the phone.", link: 'https://wilsoncgrp.com/blog/ways-to-mitigate-social-engineering-based-cyber-attacks' },
    { id: 3, cat: 'Blog', img: PostImg3, title: 'Insider Threat in Financial Sector', content: "According to CA Technologies, 53% of the organizations they surveyed experienced an insider threat in the past 12 months and it is only growing in frequency. How can a company combat a threat when it's coming from their own people?", link: 'https://wilsoncgrp.com/blog/insider-threat-in-financial-sector' },
    { id: 4, cat: 'Blog', img: PostImg4, title: 'The Need for Ongoing Security Awareness Training', content: "Humans are often regarded as the weakest link in a security breach. According to a study from CompTIA conducted in 2015, which surveyed people from several organizations in the United States, human error represents 52 percent of the cause of security breaches.[1] Businesses spend large amounts of money annually on security solutions but fail to properly address the human element of information security.  Human error, whether accidental or malicious, can cause serious security risks or breaches.", link: 'https://wilsoncgrp.com/blog/the-need-for-ongoing-security-awareness-training' },
    
    // Add more slides as needed
];



const NetworkSecurityAwareness = () => {
    
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
    return (
        <>
            <PageHeader canonicalUrl="network-security-awareness-training-and-development" requestConBtn="#contactUs" headTitle="Network Security Awareness Training and Development Services" metaDesc="Wilson Consulting Group provides comprehensive training programs designed to help organizations protect data, increase productivity, and lower overhead costs. Each training course is designed to meet industry standards for IT professionals." parent="Risk Management Services" parentUrl="risk-management-and-assessment-services" title={"Network Security Awareness Training and Development"} backgroundImage={headerBg} />
            <Box className="mainContent">
                <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
                    <Box className="container">
                        <Typography variant='h2' className='sectionTitle'>What is Network Security Awareness Training and Development?</Typography>
                        <Box mt={{ xs: 2, md: 3 }}>
                            <Stack spacing={3}>

                                <Typography >
                                    Securing sensitive information in cyberspace is essential to nearly every organizations’ operating procedure. The ability to understand, implement and maintain an effective security program is critical not only to protecting assets and operations, but it is also essential to the very survival of the organization itself. Security can only be effective if employees know and understand expectations and responsibilities.
                                </Typography>
                                <Typography>Many businesses report that their IT staff would benefit from further professional development. In fact, the Computing Technology Industry Association asserts that more than 15 million businesses rate the overall skill levels of their IT staff as less than optimal. Companies, government agencies, and other organizations rely heavily on well-trained technical staff to keep business moving by maintaining network productivity and security.
                                </Typography>
                                <Typography>Given how rapidly technology evolves and advances, proper employee training should be provided on a regular basis. Good training assures a more effective and efficient use of information system resources and strengthens employee morale.</Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Box>

                <Box className="wcgOffer titleSectionBg" py={{ md: 13, xs: 4 }} position='relative' sx={{ overflow: 'hidden' }}  >
                    <Box style={bgHalfAfterStyle} sx={{ width: { md: '60%', xs: '100%' }, height: { md: '1135px', xs: '350px' }, position: { md: 'absolute', xs: 'relative' } }}></Box>
                    <Box className='container'>
                    <Box px={{md: 6, xs: 2}} py={{md: 10, xs: 4}} borderRadius='12px'  sx={{zIndex: 999, position: 'relative',  background: 'linear-gradient(89.81deg, rgba(10, 60, 79, 0.85) 20.01%, rgba(0, 107, 149, 0.85) 103.92%)', color: '#fff' }} >
                    <Typography variant="h2" color='#fff !important' pb={2} className='sectionTitle'>Training services WCG offers</Typography>
                        <Typography>WCG offers many professional training and development services to organizations and agencies that need to optimize their network security and help their employees maintain great cybersecurity hygiene. The development training courses are designed to meet industry standards for IT professionals. Participants can obtain skills in several key business areas and technologies. The training services we offer include, but are not limited to:</Typography>

<Box className="buttonTabs" py={5}>
                        
<Button variant="outlined" size="large" startIcon={<FaThumbsUp />}>Security Awareness Training and Education</Button>
<Button variant="outlined" size="large" startIcon={<FaThumbsUp />}>Secure Network Design</Button>
<Button variant="outlined" size="large" startIcon={<FaThumbsUp />}>Secure Application Development</Button>
<Button variant="outlined" size="large" startIcon={<FaThumbsUp />}>Secure Customized Training</Button>
<Button variant="outlined" size="large" startIcon={<FaThumbsUp />}>Fundamentals Training</Button>
</Box>
                        <Typography variant="h2" color='#fff !important' pb={2} className='sectionTitle'>How</Typography>
                        <Stack spacing={3}>
                        <Typography>
                        WCG addresses the human element of cybersecurity by providing a security awareness program and continuous training service to help employees safely utilize information technology.</Typography>
<Typography>
Through our training and development services, employees will understand and apply corporate security policies and procedures and become aware of their personal responsibilities for maintaining good physical, operational, and logical cybersecurity.
                        </Typography>
</Stack>
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

export default NetworkSecurityAwareness