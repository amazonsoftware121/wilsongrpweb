import React from 'react';
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/coprehensivem.jpg'
import { Box, Typography, Stack, Grid } from '@mui/material';
import bgBlue from '../../src/assets/img/bg5.png';
import WCGApproach from '../components/WCGApproach';

const ComprehensiveSecurityAssessment = () => {
  return (
    <>
      <PageHeader title={"Comprehensive Security Assessment"} backgroundImage={headerBg} parent="Risk Management Services" parentUrl="https://wilsoncgrp.com/risk-management-and-assessment-services" />
      <Box className="mainContent">
        <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
          <Box className="container">
            <Typography variant='h2' className='sectionTitle'>What is Comprehensive Security Assessment?</Typography>
            <Box mt={{ md: 3 }}>
              <Stack spacing={3}>
                <Typography >
                  Understanding your organization’s information and cyber security risks and identifying vulnerabilities are essential to protecting sensitive data. Having this understanding is also integral to regulatory compliance efforts. Not knowing your security risks can leave your organization open to attacks and breaches that can result in the loss, misuse or exposure of proprietary information. Security breaches even lead to significant financial losses, as well as damage your reputation and the trust of your customers.
                </Typography>
                <Typography >
                  To establish an effective security strategy, you must begin with an accurate evaluation of your current information security posture. The Comprehensive Security Assessment incorporates industry-leading penetration tests that use human expertise, creativity and logic to discover vulnerabilities that tests often miss. It provides a realistic view of what a cybercriminal could get into if he or she intentionally targeted an organization.
                </Typography>
              </Stack>
            </Box>

          </Box>
        </Box>

        <Box bgcolor='primary.light' py={{ md: 10, xs: 4 }}>
          <Box className="container">
            <Box>
              <Grid container>
                <Grid item sm={6} sx={{paddingRight: {md: 10}}}>
                  <Typography variant='h2' className='sectionTitle' mb={3}>
                    Methodology of Comprehensive Security Assessment
                  </Typography>
                  <Typography>Wilson Consulting Group’s Comprehensive Security Assessment identifies and thoroughly tests potential points of attack to pinpoint vulnerabilities. A typical comprehensive security assessment consists of the following assessment areas:</Typography>
                </Grid>
                <Grid item sm={6}>
                  <Grid container>
                    <Grid item md={6}>
                      <ul className='listDisc'>
                        <li>External assessment</li>
                        <li>VPN assessment</li>
                        <li>War dialing</li>
                        <li>Wireless security assessment</li>
                        <li>Social engineering</li>
                        <li>VoIP security assessment</li>
                        <li>Physical security assessment</li>
                      </ul>
                    </Grid>
                    <Grid item md={6}>
                      <ul className='listDisc'>
                        <li>Server configuration assessment</li>
                        <li>Microsoft® Windows® assessment</li>
                        <li>UNIX environment assessment</li>
                        <li>Network architecture assessment</li>
                        <li>Firewall assessment</li>
                        <li>Mobile security assessment</li>
                      </ul>
                    </Grid>
                  </Grid>
                  </Grid>

                </Grid>
            </Box>

<Box>
  <WCGApproach />
</Box>

          </Box>
        </Box>

      </Box>

    </>
  )
}

export default ComprehensiveSecurityAssessment