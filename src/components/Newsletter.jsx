import { Typography, Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from 'framer-motion';
import FormControl from '@mui/material/FormControl';



import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';




const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleEmailBlur = () => {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError(true);
        } else {
            setEmailError('');
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Check if the email is valid before submitting
        if (!emailError) {
          try {
            // Make a POST request to your API endpoint
            const response = await fetch('https://wilsoncgrp.com/subscribe-newsletter', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email }),
            });
    
            if (response.ok) {
              setSuccessMessage('Thanks for joining our newsletter!');
            } else {
              console.error('Failed to send email:', response.statusText);
            }
          } catch (error) {
            console.error('Error sending email:', error.message);
          }
        } else {
          // Handle the case where the email is invalid
          console.log('Invalid email. Please fix the errors.');
        }
      };
    


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
                            <Box sx={{
                                paddingLeft: {
                                    sm: '0px',
                                    md: '50px'
                                }, position: 'relative'
                            }}>
                                <FormControl fullWidth sx={{ height: '75px', border: 'none', borderRadius: '4px', background: '#28A0CF' }}>
                                    <InputLabel  htmlFor="outlined-adornment-password">Enter your mail...</InputLabel>
                                    <FilledInput
                                        required
                                        type={'email'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="Subscribe Newsletter"
                                                    onClick={handleSubmit}
                                                    edge="end"
                                                    
                                                >
                                                    <FaTelegramPlane size={48} />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Subscribe Newsletter"
                                        value={email}
                                        onChange={handleEmailChange}
                                        onBlur={handleEmailBlur}
                                        
                                    />
          {emailError && <Typography variant='span' sx={{color: '#ff0000'}}>Please Enter valid email</Typography>}
          {successMessage && (
        <div style={{ color: 'green' }}>{successMessage}</div>
      )}
                                </FormControl>

                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Newsletter