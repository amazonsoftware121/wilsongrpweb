import React from 'react'
import {Box, Grid, Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/system';

const MegaMenu = (props) => {
  return (
    <>
          <Box className="megaMenu">
          <Container>
                                            <Grid container spacing={3}>
                                                <Grid item xs={3} md={6}>
                                                    <Typography variant='h6' sx={{ fontWeight: 700 }}><NavLink to={'#'}>Our Track Record</NavLink></Typography>
                                                    <Grid container spacing={4}>
                                                        <Grid item xs={3} md={6}>
                                                            <ul className='dropdownChild'>
                                                                <li><NavLink to={"#"} >Howard University – School of Social Work: Case History</NavLink></li>
                                                                <li><NavLink to={"#"} >Jamaican Government Security Solution</NavLink></li>
                                                                <li><NavLink to={"#"} >Local Government Medical Agency Case History</NavLink></li>
                                                                <li><NavLink to={"#"} >Financial Services Provider Case History</NavLink></li>
                                                                <li><NavLink to={"#"} >Power and Utility Company Case History</NavLink></li>
                                                            </ul>                                                            
                                                        </Grid>
                                                        <Grid item xs={3} md={6}>
                                                            <ul className='dropdownChild'>
                                                                <li><NavLink to={"#"} >Federal Agency Case History</NavLink></li>
                                                                <li><NavLink to={"#"} >Federal Agency Case History 2</NavLink></li>
                                                                <li><NavLink to={"#"} >The African Market Case History</NavLink></li>
                                                                <li><NavLink to={"#"} >GDPR Case History</NavLink></li>
                                                                <li><NavLink to={"#"} >GLBA Case History</NavLink></li>
                                                                <li><NavLink to={"#"} >Cyber security Assessment Case History</NavLink></li>

                                                            </ul>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>




                                                <Grid item xs={3} md={3}>
                                                    <Typography variant='h6' sx={{ fontWeight: 700 }}><NavLink to={'#'}>Media Center</NavLink></Typography>
                                                    <ul className='dropdownChild'>
                                                        <li><NavLink to={"#"} >Blog</NavLink></li>
                                                        <li><NavLink to={"#"} >Our Publications</NavLink></li>
                                                        <li><NavLink to={"#"} >Press Releases</NavLink></li>
                                                        <li><NavLink to={"#"} >Info Sheets</NavLink></li>
                                                        <li><NavLink to={"#"} >Our Videos</NavLink></li>
                                                        <li><NavLink to={"#"} >Our E-Book</NavLink></li>
                                                    </ul>
                                                </Grid>


                                                <Grid item xs={3} md={3}>
                                                    <Typography variant='h6'><NavLink to={'#'}>Featured</NavLink></Typography>
                                                    <ul className='dropdownChild'>
                                                        <li><NavLink to={"#"} >About Us</NavLink></li>
                                                        <li><NavLink to={"#"} >Covid-19 Facts</NavLink></li>
                                                        <li><NavLink to={"#"} >Black Lives Matter Statement</NavLink></li>
                                                    </ul>
                                                </Grid>

                                            </Grid>
                                            </Container>
                                        </Box>
    </>
  )
}

export default MegaMenu