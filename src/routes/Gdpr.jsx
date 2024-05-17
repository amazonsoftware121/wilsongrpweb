import React from 'react';
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/banner/gdpr-banner.webp';
import bgBlue from '../../src/assets/img/bg5.png';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import WhyUs from '../components/WhyUs';
import BlogSlider from '../components/BlogSlider';

import PostImg1 from '../assets/img/gdpr_assement.webp'
import PostImg2 from '../assets/img/Wilson3.jpg'
import PostImg3 from '../assets/img/gdpr-3442145_960_720.webp'
import PostImg4 from '../assets/img/AdobeStock_137501063-1-Converted-1024x683-1.webp'
import PostImg5 from '../assets/img/computer-1591018_960_720-825x510-1.webp'
import PostImg6 from '../assets/img/AdobeStock_191931404-1024x634-1.webp'
import PostImg7 from '../assets/img/Is-your-Business-a-Target-of-Ransomware_01.webp'
import PostImg8 from '../assets/img/GDPR-New-Frontiers-in-Regulating-Data-Protection-and-Privacy-Standards.webp'

import ContactUs from '../components/ContactUs';
import bgNeed from '../assets/img/gdpr_faq_bg_new.webp';
import { FaThumbsUp } from 'react-icons/fa';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const slides = [
    { id: 1, cat: 'Data Sheet', img: PostImg1, title: 'GDPR Assessment Services', content: "The rapid growing number of consumer data breaches has driven the EU to create The General Data Protection Regulation (GDPR). This regulation was developed to strengthen and unify data security, ensuring protection across all businesses that service EU citizens. Strict enforcement of this regulation was put into effect on May 25th, 2018. Are you compliant with the GDPR regulations?", link: 'https://wilsoncgrp.com/uploads/1579858538992_GDPR.pdf' },
    { id: 2, cat: 'Blog', img: PostImg2, title: "Global Privacy Laws and Data Protection Regulations", content: "The protection of employee and consumer data has become a priority for companies and organizations, especially with the ever-increasing potential for liability due to the use of new technologies. The collection and management of data require a broad range of legal compliance activities. It is essential to prioritize and protect sensitive, confidential, and proprietary information. Data breaches or losses can have a substantial adverse effect on a company's financials and reputation. This article discusses several privacy laws expected to guide organizations in the protection of their information assets, and the privacy rights of individuals, through compliance.", link: 'https://wilsoncgrp.com/blog/global-privacy-laws-and-data-protection-regulations' },
    { id: 3, cat: 'Blog', img: PostImg3, title: "The link between Data Loss Prevention (DLP) and GDPR compliance", content: "Humanity entrance into the Fourth Industrial Revolution has made exponential changes to how people relate with one another and with their technology. Data is easily uploaded and shared to other gadgets through high-speed Internet and Cloud storage. The increased use of these and other supply chain networks has also made files easier to access and harder to protect.", link: 'https://wilsoncgrp.com/blog/the-link-between-data-loss-prevention-dlp-and-gdpr-compliance' },
    { id: 4, cat: 'Blog', img: PostImg4, title: "Internet of Things and the Impact of Smart Technology on Cybersecurity", content: "In 2015, experts declared that the fourth industrial revolution had begun in Germany and other countries. The manufacturing industry started developing smart machines to do more complex work and in the years that followed, these smart machines include fitness bracelets connected to mobile applications that give real-time updates on exercise routines, and in smart refrigerators that can communicate if it’s time to order more groceries. When devices connect to the Internet to share data with each other, this is called an Internet of Things. These smart machines mean to make work easier for individuals with their day to day lives; and by 2020, it is projected that more than half of new businesses will be making use of this technology. In 2019, anything that can be connected, will be connected. What does this pose for this year’s trends?", link: 'https://wilsoncgrp.com/blog/internet-of-things-and-the-impact-of-smart-technology-on-cybersecurity' },
    { id: 5, cat: 'Blog', img: PostImg5, title: "A 2018 Cybersecurity Review", content: "Cyber advancements and events took center stage this year. This brought about new threats, opportunities, and solutions that are worth looking back to and learning from.", link: 'https://wilsoncgrp.com/blog/a-2018-cybersecurity-review' },
    { id: 6, cat: 'Blog', img: PostImg6, title: "Meeting GDPR Requirements", content: "The European Union’s General Data Protection Regulation’s (GDPR) came into effect on 25 May 2018. The GDPR law has triggered several immediate changes. The new regulation safeguards security and privacy rights for users. GDPR has forced companies to change their practices on data gathering and processing in many ways.", link: 'https://wilsoncgrp.com/blog/meeting-gdpr-requirements' },
    { id: 7, cat: 'Blog', img: PostImg7, title: "GDPR’s Data Protection Impact Assessment and its Implications for Organizations", content: "A data breach may be viewed as the accidental or unlawful destruction, loss, alteration or unauthorized disclosure or, access to data . Over the years, the security broadcasts are generally replete with numerous incidences of data breaches across the globe. Therefore, it is little surprise that 1 in 4 business have experienced this type of incident . The significant financial impact is also unmistakable as the total average cost is estimated to be 3.62 million dollars, which equates to in excess of$300,000 dollars .", link: 'https://wilsoncgrp.com/blog/gdprs-data-protection-impact-assessment-and-its-implications-for-organizations' },
    { id: 8, cat: 'Blog', img: PostImg8, title: "GDPR - New Frontiers in Regulating Data Protection and Privacy Standards", content: "In recent years, the world has become even more data-driven. We have seen the explosive demand for data which ushered in the creation of unprecedented volume, velocity and variety.", link: 'https://wilsoncgrp.com/blog/gdpr-new-frontiers-in-regulating-data-protection-and-privacy-standards' }


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


const iframeElement = <iframe width="100%" height="480" src="https://www.youtube.com/embed/YayFgsOo5dA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
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
            <PageHeader videoUrl={iframeElement} canonicalUrl="gdpr" requestConBtn="#contactUs" headTitle="GDPR Compliance Consulting | GDPR Assessment Services" metaDesc="WCG understands the complexity of the EU General Data Protection Regulation (GDPR) and assists organizations in addressing the challenges of GDPR compliance." parent="Compliance Services" parentUrl="compliance-assessment-services" title={"GDPR Compliance"} backgroundImage={headerBg} />
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



                <Box className="keyPrincipalGdpr" bgcolor="primary.light" py={{ md: 12, xs: 4 }}>
                    <Grid container className="gdrpKeyBg">

                        <Grid xs={12} md={6}>
                            <Box className="gdrpKeyBg_wrapper">
                                <Box className="gdrpKeyBg_box1">
                                    <Box className="gdrpKeyBg_box2">
                                        <Typography variant='h2' className='sectionTitle' fontSize='36px' fontWeight='700'>Key Principles of the <span className='colorPrimary'>GDPR</span></Typography>
                                    </Box>
                                </Box>

                                <Box className="gdrpKeyBg_box3"></Box>
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


                <Box className="video_section" py={{ md: 12, xs: 4 }} zIndex="9" position="relative" backgroundColor="#fff">
                    <Box className="container">
                        <Grid container columnSpacing={3}>
                            <Grid item xs={12} md={6}>
                                <Typography mb={3} variant='h2' className='sectionTitle'>Why should your organization pay attention?</Typography>
                                <ul className='keyBenefitsGdpr'>
                                    <li>            The regulation applies to all organizations processing the personal data of data subjects residing in the EU.</li>
                                    <li>The location of your organization does not matter.</li>
                                    <li>If your organization breaches GDPR, you can be fined up to 4% of annual global turnover or €20 Million (whichever is greater).</li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <iframe src="https://www.youtube.com/embed/YayFgsOo5dA" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="100%" height="384"></iframe>
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