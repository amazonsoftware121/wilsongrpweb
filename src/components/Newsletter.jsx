import { Typography, Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from 'framer-motion';

const Newsletter = () => {
    return (
        <div>
            <Container>
                <Grid container className="newsletter">
                    <Grid item xs={12} md={5} >
                        <Box>
                            <Typography variant='h2'>Subscription Center</Typography>
                            <Typography>Stay In The Know With Our Newsletter</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7} >
                        <Box>
                            <Box sx={{ paddingLeft: {
                                sm: '0px',
                                md: '50px'
                                }, position: 'relative' }}>
                                <input required type='email' size="regular" id="filled-basic" placeholder="Enter your mail..." variant="filled" /> <Button variant="text" endIcon={<FaTelegramPlane size={48} />}> </Button>

                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Newsletter