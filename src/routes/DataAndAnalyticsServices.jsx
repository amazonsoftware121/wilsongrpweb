import React from 'react';
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/cloudbanner.jpg';
import { Box, Stack, Typography, Grid } from '@mui/material';
import bgBlue from '../../src/assets/img/bg5.png';
import bgFaq from '../../src/assets/img/bg8.jpg';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

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

const DataAndAnalyticsServices = () => {
    const [expanded, setExpanded] = React.useState('panel0');
    const [expandIcon, setExpandIcon] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <PageHeader title={"Data and Analytics Services"} backgroundImage={headerBg} />
            <Box className="mainContent">
                <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
                    <Box className="container">
                        <Typography variant='h2' className='sectionTitle'>What is Data and Analytics?</Typography>
                        <Box mt={{ md: 3 }}>
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
                        <Box mt={{ md: 3 }}>
                            <Stack spacing={3}>
                                <Typography>Data and Analytics aid an organization to utilize data to find new opportunities. Once you adopt data analysis method in your business, you can analyze the causes of particular events based on the data, understand the objectives and directives for your business, and you will have technical insights of the business using an easy to understand language. This leads to smarter business decisions, higher profits, efficient operations, and satisfied customers.</Typography>
                                <Typography>The increasing importance of Data Analytics for business has created significant impact in the world. Key Benefits of Data and Analytics include, but are not limited to:</Typography>
                            </Stack>
                        </Box>

                    </Box>
                </Box>

                <Box className="faqSection titleSectionBg"  py={20} sx={{backgroundImage: `url(${bgFaq})`, backgroundRepeat: 'no-repeat', backgroundSize: '60%'}}>
                    <Box className='container'>
                        <Grid container rowSpacing={2} columnSpacing={4}>

                            <Grid item xs={12} md={5}>
                                
                            </Grid>
                            <Grid item xs={12} md={7} bgcolor='primary.main' pb={6}>
                                <Box p={3} >
                                    <Typography color='#fff !important' className='sectionTitle'>Benefits of Data and Analytics</Typography>
<Box className='accordionLight'>
                                    {Faqs.map((faq, index) => (
                                        <Accordion  key={index} sx={{ background: 'none', boxShadow: 'none' }} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
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

            </Box>
        </>
    )
}

export default DataAndAnalyticsServices