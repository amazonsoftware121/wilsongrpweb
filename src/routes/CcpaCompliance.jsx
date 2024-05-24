import React from 'react'
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/banner/ccpa_banner.webp';
import bgBlue from '../../src/assets/img/bg5.png';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import WhyUs from '../components/WhyUs';
import BlogSlider from '../components/BlogSlider';
import bgImg01 from '../assets/img/ccpa_img_01.webp';
import bgNeed from '../../src/assets/img/ccpa_img_02.webp';

import PostImg1 from '../assets/img/Wilson3.jpg'
import PostImg2 from '../assets/img/AdobeStock_124979059-1024x683-1.webp'
import PostImg3 from '../assets/img/computer-1591018_960_720-825x510-1.webp'

import ContactUs from '../components/ContactUs';
import { FaArrowRight } from 'react-icons/fa';

const slides = [
  { id: 1, cat: 'Blog', img: PostImg1, title: 'Global Privacy Laws and Data Protection Regulations', content: "The protection of employee and consumer data has become a priority for companies and organizations, especially with the ever-increasing potential for liability due to the use of new technologies. The collection and management of data require a broad range of legal compliance activities. It is essential to prioritize and protect sensitive, confidential, and proprietary information. Data breaches or losses can have a substantial adverse effect on a company's financials and reputation. This article discusses several privacy laws expected to guide organizations in the protection of their information assets, and the privacy rights of individuals, through compliance.", link: 'https://wilsoncgrp.com/blog/global-privacy-laws-and-data-protection-regulations' },
  { id: 2, cat: 'Blog', img: PostImg2, title: "What California's Consumer Privacy Act Means for Your Organization", content: "Following the implementation of the European Union’s General Data Protection Regulation (GDPR) earlier this year, privacy and security regulations are taking the worldby storm. The California Consumer Privacy Act, petitioned and signed June 2018, will be put into effect on January 1, 2020. Despite its smaller geographical scope, the law will have significant effect on many businesses.", link: 'https://wilsoncgrp.com/blog/what-californias-consumer-privacy-act-means-for-your-organization' },
  { id: 3, cat: 'Blog', img: PostImg3, title: 'A 2018 Cybersecurity Review', content: "Cyber advancements and events took center stage this year. This brought about new threats, opportunities, and solutions that are worth looking back to and learning from. As 2018 comes to a close, let us review four major trends:", link: 'https://wilsoncgrp.com/blog/a-2018-cybersecurity-review' },
  // Add more slides as needed
];
const iframeElement = <iframe width="100%" height="480" src="https://www.youtube.com/embed/gbKUgTtmQKo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
const CcpaCompliance = () => {

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
      <PageHeader videoUrl={iframeElement} canonicalUrl="california-consumer-privacy-act-ccpa-compliance" requestConBtn="#contactUs" headTitle="California Consumer Privacy Act (CCPA) Compliance Services" metaDesc="CCPA Compliance Services identify gaps within your organization’s current security controls and provide actionable recommendations to ensure your CCPA compliance." parent="Compliance Services" parentUrl="compliance-assessment-services" title={"California Consumer Privacy Act (CCPA)"} backgroundImage={headerBg} />
      <Box className="mainContent">
        <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
          <Box className="container">
            <Typography variant='h2' className='sectionTitle'>What is CCPA?</Typography>
            <Box mt={{ xs: 2, md: 3 }}>
              <Stack spacing={2}>
                <Typography>The <strong>California Consumer Privacy Act (CCPA)</strong>, widely regarded as the most extensive consumer privacy law in the United States, was implemented on <strong>January 1, 2020</strong>. Similar to the <a href='https://wilsoncgrp.com/gdpr'>General Data Protection Regulation (GDPR)</a> that protects personal data of all European Union-based residents, this California privacy law applies to all business entities that collect personal data of consumers in California regardless of their size and location. Such California data privacy law gives California residents control over how their personal data is handled.</Typography>
                <Typography>In a landmark development, all California consumers will have the following rights enshrined in California privacy law:</Typography>
                <ul className='listDisc'>
                  <li>The right to know what specific information is being collected, and by whom.</li>
                  <li>The right not to have personal information shared or sold.</li>
                  <li>The right of access to protections against for-profit entities not compliant to the California privacy law.</li>
                </ul>
              </Stack>

            </Box>
          </Box>
        </Box>


        <Box sx={{ backgroundImage: `url(${bgImg01})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} py={{ sm: 5, lg: 25, xs: 5,md: 7  }}>
          <Box className="container">
            <Grid container>
              <Grid item md={7} xs={12}>
                <Typography mb={2} className='sectionTitle'>Who needs to comply?</Typography>
                <Typography>California Consumer Privacy Act (CCPA) applies to businesses, headquartered inside or outside of California, that collect personal information of California State Residents and that satisfy at least one of three conditions:</Typography>
                <ul className='hexList'>
                  <li><span>01</span><Typography>Annual Gross revenue more than <strong>$25 million</strong>.</Typography></li>
                  <li><span>02</span><Typography>Handling (buying, selling, etc.) personal information of more than <strong>50,000</strong> CA consumers, households, or devices annually.</Typography></li>
                  <li><span>03</span><Typography>Gets at least <strong>50 percent</strong> of annual revenue from selling CA consumers’ personal information.</Typography></li>
                </ul>
              </Grid>
            </Grid>
          </Box>
        </Box>


        <Box py={{ md: 14, xs: 4 }}>
          <Box className="container">
            <Typography pb={{ md: 6, xs: 4 }} className='sectionTitle' textAlign="center">What is the penalty for Non-compliance?</Typography>
            <Box>
              <Grid container rowGap={3} sx={{textAlign: {xs: 'center', md: 'left'}}}>
                <Grid item sm={12} xs={12} md={4} px={{lg: 8,sm: 0}}>
                  <Box className="numberBox" >
                    <Box className="number"><span className='hexIcon'></span> $7,500</Box>
                    <Typography>Fine for violation of CCPA<br/> Compliance is $2,500 to $7,500</Typography>
                  </Box>
                </Grid>

                <Grid item sm={12} xs={12} md={4} px={{lg: 8, sm: 0}}>
                  <Box className="numberBox">
                    <Box className="number"><span className='hexIcon'></span> $750</Box>
                    <Typography>$100 to $750 per consumer <br/> per incident after civil action</Typography>
                  </Box>
                </Grid>


                <Grid item sm={12} xs={12} md={4} px={{lg: 7, sm: 0}}>
                  <Box className="numberBox" sx={{maxWidth: {xs: '350px', md: 'none'}, margin: '0 auto'}}>
                    <Box className="number"><span className='hexIcon'></span> 30</Box>
                    <Typography>Businesses have 30 days to cure violations of this California data privacy law and inform consumers that they have done so</Typography>
                  </Box>
                </Grid>

              </Grid>
            </Box>
          </Box>
        </Box>





        <Box className="faqSection titleSectionBg" py={{ md: 13, xs: 4 }} position='relative' sx={{ overflow: 'hidden' }} >
          <Box style={bgHalfAfterStyle} sx={{ height: '100%', width: { md: '60%', xs: '100%' }, height: { md: '1135px', xs: '350px' }, position: { md: 'absolute', xs: 'relative' } }}></Box>
          <Box className='container' sx={{ backgroundColor: 'transparent' }}>
            <Grid container rowSpacing={{ md: 2, xs: 0 }} columnSpacing={{ md: 4, xs: 0 }}  >
              <Grid item xs={12} md={3}>
              </Grid>
              <Grid item xs={12} md={9} bgcolor='#fff' px={{ md: 0, xs: 2 }} pb={{ md: 6, xs: 2 }} sx={{ zIndex: 9, borderRadius: '12px', boxShadow: { md: '10px 10px 35px 0px #0000001A', xs: 'none' } }}>
                <Box p={{ md: 7 }} py={6} >
                  <Typography variant="h2" color='' className='sectionTitle titleDes2'>How to implement CCPA Compliance?</Typography>
                  <Box pt={4}>
                    <Stack spacing={3}>
                      <Typography>If your company is serving or employing California residents, WCG recommends starting the process of becoming compliant today. These steps need to be implemented in CCPA Compliance meticulously:</Typography>
                      <ul className='listDisc'>
                        <li>Conduct a complete data inventory. Make sure you have a thorough understanding of the scope of personal data being stored on company IT infrastructure, and the degree to which the business is “selling” data.</li>
                        <li>Communicate the rights of individuals to the data they provide from time-to-time. Your team will be obliged to provide individual customers with an update within 45 days of the inquiry.</li>
                        <li>Ensure every business unit – including marketing and business development understand that every new customer has the right to opt-out of data selling.</li>
                        <li>Be sure to update service-level agreements with third-party data processors.</li>
                        <li>Remediate information security gaps and system vulnerabilities.</li>
                      </ul>
                      <Typography>WCG is your trustworthy CCPA service provider who will partner with you to determine your business’ compliance gaps with CCPA Compliance Services and assist you to become compliant.</Typography>

                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>



        <Box bgcolor="primary.light" py={{ md: 13, xs: 4 }}>
          <Box className="container">
          <Typography pb={3} className='sectionTitle'>How will WCG help you?</Typography>
            <Grid container columnSpacing={8}>
              <Grid item md={6} xs={12}>


              <Stack spacing={3}>
                <Typography>As an experienced CCPA service provider, WCG’s CCPA Compliance services analyze your organization’s current state of California Consumer Privacy Act (CCPA) components, alongside required or best practices, to identify gaps and actionable recommendations. WCG helps your organization efficiently develop a strategic CCPA Compliance approach to achieve the desired results.</Typography>

                <Typography>Achieving these benefits requires organizations to develop a clear understanding of domestic and international regulations that apply to their operations and industry. WCG’s CCPA Compliance Services focus on assessments and audits around particular domain components such as data security (California Consumer Privacy Act, ISO 27001, Penetration Testing, Vulnerability Scanning). These assessments and audits are essential to sustain the viability of a system and to avoid violating of the law, while meeting statutory, regulatory, security, and contractual obligations.</Typography>
                <Button sx={{justifyContent: 'start',marginTop: '15px', fontSize: '20px', fontWeight: '700', padding: '0'}} variant='text' href='https://wilsoncgrp.com/contact-us' className='textBtn-sky' > Connect with Our Expert &nbsp; <span><FaArrowRight size={14} /></span></Button>
                </Stack>
              </Grid>
              <Grid item md={6} xs={12}> <iframe src="https://www.youtube.com/embed/gbKUgTtmQKo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="100%" height="380" frameBorder="0"></iframe></Grid>
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

export default CcpaCompliance