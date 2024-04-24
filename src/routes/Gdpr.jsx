import React from 'react';
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/banner/gdpr-banner.webp';
import bgBlue from '../../src/assets/img/bg5.png';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import WhyUs from '../components/WhyUs';
import BlogSlider from '../components/BlogSlider';

import PostImg1 from '../assets/img/Frame-1.webp'
import PostImg2 from '../assets/img/cyber_security.jpg'
import PostImg3 from '../assets/img/AdobeStock_124587776-1024x576-1.jpg';
import PostImg4 from '../assets/img/The-Need-for-Ongoing-Security-Awareness-Training-1024x384-1.webp';
import ContactUs from '../components/ContactUs';
import bgNeed from '../assets/img/gdpr_faq_bg.webp';
import { FaThumbsUp } from 'react-icons/fa';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const slides = [
    { id: 1, cat: 'Blog', img: PostImg1, title: 'Improving Cybersecurity Awareness in Healthcare', content: "Many cyberattacks succeed due to mistakes by employees and a lack of awareness of basic aspects of cybersecurity. According to the 2022 Verizon Data Breach Investigations Report, 82% of data breaches in 2021 involved the human element. Improving security awareness of the workforce by focusing on key behaviors will go a long way toward improving security and preventing data breaches.", link: 'https://wilsoncgrp.com/blog/improving-cybersecurity-awareness-in-healthcare' },
    { id: 2, cat: 'Blog', img: PostImg2, title: "Ways to Mitigate Social Engineering-based Cyber Attacks", content: "Social engineering is an attack mechanism majorly aimed at misleading employees or individuals to hand over relevant information for the attacker's financial gain. Social engineering attacks are launched mostly via email, social media, and over the phone.", link: 'https://wilsoncgrp.com/blog/ways-to-mitigate-social-engineering-based-cyber-attacks' },
    { id: 3, cat: 'Blog', img: PostImg3, title: 'Insider Threat in Financial Sector', content: "According to CA Technologies, 53% of the organizations they surveyed experienced an insider threat in the past 12 months and it is only growing in frequency. How can a company combat a threat when it's coming from their own people?", link: 'https://wilsoncgrp.com/blog/insider-threat-in-financial-sector' },
    { id: 4, cat: 'Blog', img: PostImg4, title: 'The Need for Ongoing Security Awareness Training', content: "Humans are often regarded as the weakest link in a security breach. According to a study from CompTIA conducted in 2015, which surveyed people from several organizations in the United States, human error represents 52 percent of the cause of security breaches.[1] Businesses spend large amounts of money annually on security solutions but fail to properly address the human element of information security.  Human error, whether accidental or malicious, can cause serious security risks or breaches.", link: 'https://wilsoncgrp.com/blog/the-need-for-ongoing-security-awareness-training' },

    // Add more slides as needed
];

const Faqs = [{
    key: 1,
    que: 'Compliance Testing',
    ans: 'WCG’s GDRP consultant conducts compliance tests to identify the potential gaps and vulnerabilities within your current personal data infrastructure, providing recommendations for improvement to ensure your organization is fully GDRP-compliant. Our GDPR consultancy services best position your organization to protect your data and have effective operational procedures for its safest possible handling.'
},
{
    key: 2,
    que: 'Data Lifecycle Management',
    ans: 'Our GDPR Consultancy Services help to develop viable mechanisms for identifying and managing new personal data in process and use. We help in developing strategies that appropriately determine proper data storage, security, handling, and transmission. We also assist in developing appropriate checkpoints and controls to ensure continued GDRP compliance. After teaming with our GDRP consultant, data security threats on your organization will be mitigated and minimized, making your data lifecycle that much more resilient.'
},
{
    key: 3,
    que: 'Data Privacy Assessment & Management',
    ans: 'WCG’s GDRP consultant analyzes your organization’s data privacy management program, conduct a privacy impact assessment (PIA), and develop a strategy for implementing privacy controls that are GDRP-complaint. With our GDPR Compliance Services, organizations have quantifiably reduced the privacy risks of data management, weakened the possibility of the organization or any of its stakeholders suffering financial or reputational harm, and achieved competitive advantage by reflecting the importance the organization places on protecting personal data, thereby earning trust.'
},
{
    key: 4,
    que: 'Data Strategy & Governance',
    ans: 'Our GDPR Consultancy Services develop a comprehensive governance structure for your organization designed to function both in concert with and in spite of any future modifications to the GDPR. Importantly, we examine the security impact of any change to technology, processes, or personnel and, if necessary, mature your organization’s approach of embedding privacy and security into all business activities. After working with our GDPR consultant, your organization will have effective data governance and be able to employ appropriate collection, authorized use, access, security, destruction, and privacy techniques at every state of product development.'
},
{
    key: 5,
    que: 'Incident Response Management',
    ans: 'Incident Response Management is crucial in WCG’s GDPR Compliance Services. Our GDPR consultants review, revise, and refine your incident response policy to ensure it properly aligns with the GDPR. We enhance organization’s response capabilities including your breach notifications, which allow you to better identify, protect, detect, and respond to any potential and/or actual personal data incidents. Our GDPR Compliance solution has allowed organizations to become more proactive and better prepared to handle potential privacy breaches or legal disputes.'
},
{
    key: 6,
    que: 'Policy Management',
    ans: 'WCG’s GDPR Compliance solution develops policies for your organization to better manage the rights of data subjects, the legal basis of all held data, and the agreements between you and third-party vendors, suppliers, and partners. Our GDPR Compliance Services have improved organizations’ ability to consistently align their Personal Data Management policy with overall business strategy.'
}

];



const Gdpr = () => {

    const [expanded, setExpanded] = React.useState('panel1');
    const [expandIcon, setExpandIcon] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
            <PageHeader canonicalUrl="gdpr" requestConBtn="#contactUs" headTitle="GDPR Compliance Consulting | GDPR Assessment Services" metaDesc="WCG understands the complexity of the EU General Data Protection Regulation (GDPR) and assists organizations in addressing the challenges of GDPR compliance." parent="Compliance Services" parentUrl="compliance-assessment-services" title={"GENERAL DATA PROTECTION REGULATION (GDPR) COMPLIANCE"} backgroundImage={headerBg} />
            <Box className="mainContent">
                <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
                    <Box className="container">
                        <Typography variant='h2' className='sectionTitle'>What is the GDPR?</Typography>
                        <Box mt={{ xs: 2, md: 3 }}>
                            <Stack spacing={3}>
                                <Typography >
                                    The General Data Protection Regulation (GDPR) became enforceable on May 25, 2018 and is intended to harmonize data protection laws throughout the European Union (EU) by applying a single data protection law that is binding throughout each member state.
                                </Typography>
                                <Typography>
                                    GDPR protects any information that can be linked to an identifiable individual such as search-engine entries, employee authentication, payment transactions, closed-circuit-television footage, and visitor logs. The information can be in any format (structured or unstructured) and can be transferred in any medium including online, offline, or backup storage.
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Box>



                <Box className="keyPrincipalGdpr" bgcolor="primary.light">
                <Grid container className="gdrpKeyBg">
                
                <Grid xs={12} md={6}>
                <Box className="gdrpKeyBg_wrapper">
                    <Box className="gdrpKeyBg_box1"></Box>
                    <Box className="gdrpKeyBg_box2"></Box>
                    <Box className="gdrpKeyBg_box3">asdfasfasf</Box>
                </Box>
                </Grid>
                <Grid xs={12} md={6} ></Grid>
                </Grid>
                    <Box className="container">
                        <Grid container>
                            <Grid item xs={12} md={6}></Grid>
                            <Grid item xs={12} md={6}>
                                <ul className='keyBenefitsGdpr'>
                                    <li>
                                        <Stack spacing={1}>
                                            <Typography><strong>Right to access: </strong></Typography>
                                            <Typography>Data subjects have the right to obtain information as whether or not their information is being collected, where and for what purposes.</Typography>
                                        </Stack>
                                    </li>
                                    <li>
                                        <Stack spacing={1}>
                                            <Typography><strong> Right of revocation:</strong></Typography>
                                            <Typography>Data subjects have the right to request personal data to be erased, ceased from further dissemination, and stopped from processing by third parties.</Typography>
                                        </Stack>
                                    </li>
                                    <li>
                                        <Stack spacing={1}>
                                            <Typography><strong>Data portability: </strong></Typography>
                                            <Typography>Data subjects have the right to transmit their personal data to another organizations; no institution or organization has data ownership.</Typography>
                                        </Stack>
                                    </li>
                                    <li>
                                        <Stack spacing={1}>
                                            <Typography><strong>Breach notification:  </strong></Typography>
                                            <Typography>All organizations are required to notify customers and controllers about a data breach within 72 hours of first having become aware of the breach.</Typography>
                                        </Stack>
                                    </li>
                                    <li>
                                        <Stack spacing={1}>
                                            <Typography><strong> Privacy by design: </strong></Typography>
                                            <Typography>Organizations are legally required to include data protection when designing their systems.</Typography>
                                        </Stack>
                                    </li>
                                    <li>
                                        <Stack spacing={1}>
                                            <Typography><strong>Data protection officer:  </strong></Typography>
                                            <Typography>DPOs are created to monitor compliance, inform and advise on obligations, and serve as a direct link between data subjects and other authorities in each member states.</Typography>
                                        </Stack>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>




                <Box className="faqSection titleSectionBg" py={{ md: 20, xs: 4 }} position='relative' sx={{ overflow: 'hidden' }}>
                    <Box style={bgHalfAfterStyle} sx={{ width: { md: '60%', xs: '100%' }, height: { md: '1135px', xs: '350px' }, position: { md: 'absolute', xs: 'relative' } }}></Box>
                    <Box className='container' sx={{ backgroundColor: { xs: '#28A0CF', md: 'transparent' } }}>
                        <Grid container rowSpacing={2} columnSpacing={4}  >

                            <Grid item xs={12} md={5}>

                            </Grid>
                            <Grid item xs={12} md={7} bgcolor='primary.main' pb={6} sx={{ zIndex: 9 }}>
                                <Box p={{ md: 3 }} py={3} >
                                    <Typography color='#fff !important' className='sectionTitle'>Our GDPR Compliance solutions</Typography>
                                    <Box className='accordionLight'>
                                        {Faqs.map((faq, index) => (
                                            <Accordion key={index} sx={{ margin: '0 !important', background: 'none', boxShadow: 'none' }} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                                <AccordionSummary
                                                    expandIcon={expanded === `panel${index}` ? <FaMinus size={26} color='#fff' /> : <FaPlus size={26} color='#fff' />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"

                                                    sx={{ borderBottom: expanded === `panel${index}` ? '1px solid #fff' : 'none' }}
                                                >
                                                    <Typography variant='h3' sx={{ fontSize: '24px', fontWeight: 'bold', lineHeight: 'normal', color: expanded === `panel${index}` ? '#fff' : '#fff' }}>{faq.que}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails sx={{ paddingTop: '30px' }}>
                                                    <Typography color='#fff'>
                                                        {faq.ans}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}


                                    </Box>



                                </Box>
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

export default Gdpr