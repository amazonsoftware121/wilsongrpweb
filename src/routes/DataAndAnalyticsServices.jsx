import React from 'react';
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/dataheader.jpg';
import { Box, Stack, Typography, Grid } from '@mui/material';
import bgBlue from '../../src/assets/img/bg5.png';
import bgFaq from '../../src/assets/img/medium-shot-people-working-together-office.jpg';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import WhyUs from '../components/WhyUs';
import BlogSlider from '../components/BlogSlider';
import ContactUs from '../components/ContactUs';

const Faqs = [{
    key: 1,
    que: 'Proactivity and Anticipation',
    ans: 'Effective data collation combined with analytics equips organizations and government entities with a better understanding of customers’ needs. Using statistics from existing and potential customers, organizations and government entities can optimize the consumer experience at each touch point and develop long-standing relationships with them.'
},
{
    key: 2,
    que: 'Minimize Operation Costs',
    ans: 'With a viable data analysis system, organizations can determine the expense distribution in different sectors of your business. Through this, organizations will have a clear idea of where to reduce operational and production costs, improving the rate on investment.'
},
{
    key: 3,
    que: 'Faster and Better Decision-Making',
    ans: 'Compared to manual work, a smooth data analytics system enables organizations and government entities to analyze customer attitudes and consider underlying factors in a shorter time such as real-time location and preferred methods of shopping. This helps employees deliver tasks efficiently and manage deadlines with ease based on comprehensive results of analysis.'
},
{
    key: 4,
    que: 'Deliver Competitive Products',
    ans: 'With the power of Data Analytics, the needs and satisfaction of the customers are at the forefront. A data analytics system tells the organization what market segmentation is available for business expansion. Thus, organizations can anticipate market demands to provide relevant products before they are requested.'
},
{
    key: 5,
    que: 'Mitigate Risks and Fraudulent Threats',
    ans: 'Security and fraud analytics help organizations and government entities to protect all physical, financial, and intellectual assets from misuse by internal and external threats. Efficient data and analytics capabilities deliver optimum levels of fraud prevention and overall organizational security. Data management, alongside efficient and transparent reporting of fraud incidents, results in improved fraud risk management processes in organizations and government entities.'
}
];

const listCards = [{
    id: '01',
    title: 'Design and Implement Data-Driven Environment',
    description: 'WCG assists organizations and government entities to design and develop their data governance, framework while ensuring compliance with regulations. This process makes the corporate data more manageable, accurate, and easy to use, which enables a faster and better decision-making process.'
},
{
    id: '02',
    title: 'Develop Viable Analytics Solutions',
    description: 'By leveraging data visualization, machine learning, predictive modeling, risk assessment, system testing, and other advanced models, WCG maps analytics initiatives of organizations or government entities to quantifiable business outcomes, transforming them into actionable business intelligence, and ensuring the protection and confidentiality of the source data and results.'
},
{
    id: '03',
    title: 'Optimize Productivity & Maximize Profit',
    description: 'WCG applies the most appropriate techniques to align the data with organizations’ or government entities’ portfolio and economic inputs. We create solutions to identify areas of key risk, fraud, errors, or misuse, set up evaluation metrics like false positives rate, and customer conversion rate to keep track of the customized performance based on the needs of organizations and government entities.'
},
{
    id: '04',
    title: 'Foster Innovative Solutions',
    description: 'Experientially and by testing statistically and scientifically, WCG helps organizations and government entities explore feasible growth opportunities, increase return on investments (ROI), and reduce project budgets. We also help them develop customized applications to their preferred cloud-based data infrastructure while increasing processing power, automating reporting process, and achieving real-time analytics for the business with significantly less time.'
}
];

const slides = [
    { id: 1, cat: 'Data Sheet', img: 'data-serv.png', title: 'Data and Analytics Services', content: 'The increasing importance of Data Analytics for business has created significant impact in the world.', link: 'https://wilsoncgrp.com/uploads/1597587043639_DATA%20AND%20ANALYTICS%20SERVICES%20INFO%20SHEET%20-%20updated.pdf' },
    { id: 2, cat: 'Blog', img: 'Wilson-2.webp', title: 'Do You Need A Data Analytics System?', content: 'Data analytics (DA) involves processes and activities designed to obtain and evaluate data to extract useful information. The results of DA may be used to identify areas of key risk, fraud, errors, or misuse; improve business efficiency, verify process effectiveness, and make more-informed business decisions.', link: 'https://wilsoncgrp.com/blog/do-you-need-a-data-analytics-system' },
    { id: 3, cat: 'Blog', img: 'Progressing-IoT-Technology-Brings-Ever-Expanding-Security-Concerns-1024x384-1%20(1).webp', title: 'Boosting Your Security Posture with Security Analytics', content: 'With the rise of cyberincidents, organizations continue to search for effective tools and strategies to fight against cybercrimes and to build resilience in their environment.', link: 'https://wilsoncgrp.com/blog/boosting-your-security-posture-with-security-analytics' },
    
    // Add more slides as needed
];

const DataAndAnalyticsServices = () => {
    const [expanded, setExpanded] = React.useState('panel0');
    const [expandIcon, setExpandIcon] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const bgHalfAfterStyle = {
        content: "''",
        top: '0',
        left: '0',
        // other styles as needed
        backgroundImage: `url(${bgFaq})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0

    };

const iframeElement = <iframe width="100%" height="480" src="https://www.youtube.com/embed/WCX0S2ivZz0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>;

    return (
        <>
            <PageHeader requestConBtn="#contactUs" videoUrl={iframeElement} headTitle="Data and Analytics Services | Data Analytics Solutions" metaDesc="Glean valuable business insights, unlock new revenue streams, power your organization toward a data-driven future with WCG's Data and Analytics Services." title={"Data and Analytics Services"} backgroundImage={headerBg} />
            <Box className="mainContent">
                <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
                    <Box className="container">
                        <Typography variant='h2' className='sectionTitle'>What is Data and Analytics?</Typography>
                        <Box mt={{ md: 3,xs: 2 }}>
                            <Stack spacing={3}>
                                <Typography >
                                    <strong>Data analytics (DA)</strong> involves processes and activities designed to obtain and evaluate data to extract useful information. The results of DA may be used to identify areas of key risk, fraud, errors, or misuse; improve business efficiency, verify process effectiveness, and make more-informed business decisions.
                                </Typography>
                                <Typography >
                                    <strong>Data analytics technologies & techniques</strong> are widely utilized in several and specifically the marketing industries. In today’s data-driven business world, organizations and government agencies rely massively on data analysis to make fast and well-informed decisions. Analysis of data also helps businesses to <strong>minimize risks and maximize profits.</strong>
                                </Typography>
                            </Stack>
                        </Box>

                        <Typography variant='h2' className='sectionTitle' mt={8} >
                            Why you need Data and Analytics?
                        </Typography>
                        <Box mt={{ md: 3, xs: 2 }}>
                            <Stack spacing={3}>
                                <Typography>Data and Analytics aid an organization to utilize data to find new opportunities. Once you adopt data analysis method in your business, you can analyze the causes of particular events based on the data, understand the objectives and directives for your business, and you will have technical insights of the business using an easy to understand language. This leads to smarter business decisions, higher profits, efficient operations, and satisfied customers.</Typography>
                                <Typography>The increasing importance of Data Analytics for business has created significant impact in the world. Key Benefits of Data and Analytics include, but are not limited to:</Typography>
                            </Stack>
                        </Box>

                    </Box>
                </Box>

                <Box className="faqSection titleSectionBg" py={{md: 20, xs: 4}} position='relative' sx={{overflow: 'hidden'}}>
                    <Box style={bgHalfAfterStyle} sx={{ width: {md: '60%', xs: '100%'}, height: {md: '1135px', xs: '350px'}, position: {md: 'absolute', xs: 'relative'}}}></Box>
                    <Box className='container' sx={{backgroundColor: {xs: '#28A0CF', md: 'transparent'}}}>
                        <Grid container rowSpacing={2} columnSpacing={4}  >

                            <Grid item xs={12} md={5}>

                            </Grid>
                            <Grid item xs={12} md={7} bgcolor='primary.main' pb={6} sx={{ zIndex: 9 }}>
                                <Box p={{md:3}} py={3} >
                                    <Typography color='#fff !important' className='sectionTitle'>Benefits of Data and Analytics</Typography>
                                    <Box className='accordionLight'>
                                        {Faqs.map((faq, index) => (
                                            <Accordion key={index} sx={{margin: '0 !important', background: 'none', boxShadow: 'none' }} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
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

                <Box py={{ md: 15, xs: 4 }} bgcolor='primary.light'>
                    <Box className='container'>
                        <Typography  className='sectionTitle' textAlign='center'>Begin your Data & Analytics journey here</Typography>
                        <Box mt={{md:12, xs: 6}} className="listCard" sx={{ display: 'flex', flexDirection: 'column', gap: '60px'}}>
                            {listCards.map((card) => (
                                <Grid alignItems="center" container key={card.id} direction={ {md: card.id % 2 === 0 ? 'row-reverse' : 'row', xs: 'column-reverse'}}>
                                    <Grid item md={9}>
                                        <Box py={{md: 8, xs: 3}} px={{md:5, xs: 3}} sx={{boxShadow: '-14px 14px 20px #0000001a', backgroundColor: card.id % 2 === 0 ? '#f7f7f7' : '' }}>
                                        <Stack spacing={2}>
                                            <Typography variant='h5' fontWeight='500'>{card.title}</Typography>
                                            <Typography fontSize='15px'>{card.description}</Typography>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                    <Grid item md={3}>
                                        <Typography sx={{ textAlign: card.id % 2 === 0 ? 'left' : 'center'}} lineHeight={{md:'200px', xs: '160px'}} fontSize={{md: '150px', lg:'200px',xs: '100px'}} fontWeight='bold' color='primary.main'>{card.id}</Typography>
                                    </Grid>
                                </Grid>
                            ))}
                        </Box>
                    </Box>
                </Box>

<Box my={12}>
    <WhyUs />
</Box>

<Box py={12} bgcolor='primary.light'>
    <BlogSlider resourcesSlide={slides} />
</Box>

<Box py={{md:12, xs: 6}} id="contactUs">
<ContactUs />
</Box>

            </Box>
        </>
    )
}

export default DataAndAnalyticsServices