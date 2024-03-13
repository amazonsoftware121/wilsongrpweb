import React from 'react';
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/cloudbanner.jpg';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";
import bgBlue from '../../src/assets/img/bg5.png'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import WhyUs from '../components/WhyUs';
import BlogSlider from '../components/BlogSlider';
import ContactUs from '../components/ContactUs';


const slides = [
  { id: 1, cat: 'Data Sheet', img: 'cloud-serv.png', title: 'Cloud Services', content: 'Cloud Services enable businesses to utilize a network of remote systems to transmit, process, store and access data, applications, and services over the Internet, which boosts their competitiveness in the digital space. Cloud solutions come in various forms and sizes to cater to different organizational needs. ', link: 'https://wilsoncgrp.com/uploads/1597586929593_Cloud%20Services.pdf' },
  { id: 2, cat: 'Blog', img: 'network-2402637_960_720.webp', title: 'Combatting the Security Risks of Cloud Computing', content: 'Small and large enterprises continue to benefit from increased digitization and greater use of cloud-based application and storage facilities.', link: 'https://wilsoncgrp.com/blog/combatting-the-security-risks-of-cloud-computing' },
  { id: 3, cat: 'Blog', img: 'cloud-3406627_960_720.webp', title: 'The Risks of Using Cloud Services', content: 'When J. C. R. “Lick” Licklider developed ARPAnet in 1962, he had the vision of creating a device that could receive and send data simultaneously amongst a large group of people. He called this idea the  “Intergalactic Computer Network”.', link: 'https://wilsoncgrp.com/blog/the-risks-of-using-cloud-services' },
  { id: 4, cat: 'Blog', img: 'Cracking-the-Enigma-of-Cloud-Computing-1200x450-1.webp', title: 'Cracking the Enigma of Cloud Computing', content: 'One of the most frequent questions tech industry insiders get from those working outside of the industry is “What is the cloud?” ', link: 'https://wilsoncgrp.com/blog/cracking-the-enigma-of-cloud-computing' },
  { id: 5, cat: 'Blog', img: 'cloud-computing-101.webp', title: 'Cloud Computing 101', content: 'Visionary Steve Jobs once spoke of a dream in which data could be uploaded and accessed anywhere. Before there was the cloud, there were floppy disks, CD ROMs and very large immobile hardware. Fast forward to 2015 – now we are able to access and store information without physical limitations.', link: 'https://wilsoncgrp.com/blog/cloud-computing-101' }
  // Add more slides as needed
];
const CloudServices = () => {
  const [expanded, setExpanded] = React.useState('panel1');
  const [expandIcon, setExpandIcon] = React.useState(false);
  const iframeElement = <iframe width="100%" height="480" src="https://www.youtube.com/embed/NuVbhuNrrcw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log(expandIcon);
  return (
    <>
      <PageHeader requestConBtn="#contactUs" videoUrl={iframeElement}  metaDesc="WCG's Cloud Services provide a holistic assessment of your current cloud approach, illuminating the threats to cloud security and advantages of implementation." headTitle={"Cloud Computing Services | Cloud Security Solutions"} title={"Cloud Services"} backgroundImage={headerBg} />
      <Box className="mainContent">

        <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
          <Box className="container">
            <Typography variant='h2' className='sectionTitle'>What is Cloud Service?</Typography>
            <Box sx={{ columnCount: { md: 2, xs: 1 } }} mt={{xs: 2, md: 3 }}>
              <Typography >
                With the increasing demand for the Internet, consumers have changed the way of conducting commerce through smartphones and gadgets with easier internet access. A 2019 poll by Marist College and National Public Radio (NPR) indicates 76% of all U.S. adults shop online. This provides opportunities for businesses to store existing customer data anywhere and anytime, re-target potential customers, increase revenue, and much more. Cloud Computing Services and Cloud Services companies are getting more attention nowadays.

              </Typography>
              <Typography pt={{xs: 3, md: 0}} >  Cloud Services or Cloud Computing Services enable businesses to utilize a network of remote systems to transmit, process, store and access data, applications, and services over the Internet, which boosts their competitiveness in the digital space. Cloud solutions from Cloud Services providers come in various forms and sizes to cater to different organizational needs. According to the Microsoft Trustworthy Computing SME Cloud Trust study, 94% small and medium-sized enterprises (SMEs) have experienced performance benefits from using cloud services provided by Cloud Services companies.</Typography>
            </Box>
            <Box mt={5}>
              <Typography variant='h4' component='h3' fontSize='24px' fontWeight='500' mb={2}>
                Key benefits include, but are not limited to:
              </Typography>
              <Stack direction='row' columnGap={3} sx={{flexWrap:'wrap'}} rowGap={2} >
                <Stack direction='row' columnGap={2}>
                  <FaCloudUploadAlt color='#28A0CF' size='25px' /> Business continuity
                </Stack>

                <Stack direction='row' columnGap={2}>
                  <FaCloudUploadAlt color='#28A0CF' size='25px' /> Increased collaboration efficiency
                </Stack>
                <Stack direction='row' columnGap={2}>
                  <FaCloudUploadAlt color='#28A0CF' size='25px' /> Security Encryption and Software Updates
                </Stack>
                <Stack direction='row' columnGap={2}>
                  <FaCloudUploadAlt color='#28A0CF' size='25px' /> Flexibility
                </Stack>
              </Stack>

            </Box>
          </Box>
        </Box>
        <Box className="faqSection titleSectionBg" bgcolor={'primary.light'} py={{md: 20, xs: 6,}} >
          <Box className='container'>
            <Grid container rowSpacing={2} columnSpacing={4}>

              <Grid item xs={12} md={5}>
                <Box pr={{ md: 6 }}>
                  <Typography color='primary.main'>FAQs</Typography>
                  <Typography mt={3} variant='h2' className='sectionTitle'>What are some of your Cloud challenges?</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box className='accordionDark'>

                  <Accordion sx={{ background: 'none', boxShadow: 'none', borderBottom: expanded === 'panel1' ? `none` : '2px solid #000' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                      expandIcon={expanded === 'panel1' ? <FaMinus size={26} color='#28A0CF' /> : <FaPlus color='#000' size={26} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      sx={{ borderBottom: expanded === 'panel1' ? '1px solid #28A0CF' : 'none' }}
                    >
                      <Typography variant='h3' sx={{ fontSize: '24px', fontWeight: 'bold', lineHeight: 'normal', color: expanded === 'panel1' ? '#28A0CF' : '#000' }}>My business is being affected due to COVID-19. How do I maintain continuity?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant='h4' fontWeight='500' fontSize='22px' mb={4}>Effectively Design A Cloud Strategy</Typography>
                      <Typography>

                        As a professional Cloud Services provider, WCG has the best tools, techniques, IT experts and consultants to carry out a holistic assessment of your current cloud approach, illuminating the risks and advantages of implementation. Our elite IT experts and consultants effectively design strong and innovative strategies tailored to your business needs in order to maximize the competitiveness of your business, and finally achieve business objectives.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>


                  <Accordion sx={{ background: 'none', border: 'none', boxShadow: 'none', borderRadius: '0 !important', borderBottom: expanded === 'panel2' ? `none` : '2px solid #000' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                      expandIcon={expanded === 'panel2' ? <FaMinus color='#28A0CF' size={26} /> : <FaPlus color='#000' size={26} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                      sx={{ borderBottom: expanded === 'panel2' ? '1px solid #28A0CF' : 'none' }}
                    >
                      <Typography variant='h3' sx={{ fontSize: '24px', fontWeight: 'bold', lineHeight: 'normal', color: expanded === 'panel2' ? '#28A0CF' : '#000' }}> My company has a cloud infrastructure; however, it was attacked, and our clients’ information and information assets were breached. What can I do?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant='h4' fontWeight='500' fontSize='22px' mb={4}>Securely Implement Cloud Infrastructure</Typography>
                      <Typography>
                        WCG’s cloud strategy services are paired with cloud security. With our Cloud Computing Services, the cloud migration of your company from on premises to the cloud or from one cloud vendor to the other, is always securely protected. As a trustworthy cloud services provider, WCG assures your organization’s cyber security.
                      </Typography>
                      <Typography mt={2}>          <small> ***Cloud security is a set of control-based technologies and policies designed to maintain data security, adhere to compliance regulations, and provide a data backup plan in the event of a security breach.</small>



                      </Typography>
                    </AccordionDetails>
                  </Accordion>


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

export default CloudServices