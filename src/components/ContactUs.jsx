import React, { useState } from 'react';
import { Button, Grid, Box, Typography, Divider } from '@mui/material'
import TextField from '@mui/material/TextField';
import contactBg from '../assets/img/contactusbg.png';
import Test from './test';

const ContactUs = () => {
    const [enteredValues, setEnteredValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [succMsg, setSuccMsg] = useState("");
    const [failMsg, setFailMsg] = useState("");

    const handleInputChange = (identifier, value) => {
        setEnteredValues(prevValues => ({
            ...prevValues,
            [identifier]: value
        }))
    }

    const validateEmail = (email) => {
        // Regular expression for basic email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Validation
        if (!enteredValues.firstName || !enteredValues.lastName || !enteredValues.email || !enteredValues.subject || !enteredValues.message) {
            setErrorMsg('Please fill in all required fields.');
            return;
        } else {
            setErrorMsg("");
        }
    
        if (!validateEmail(enteredValues.email)) {
            setEmailErrorMsg('Please enter a valid email address.');
            return;
        } else {
            setEmailErrorMsg('');
        }
    
        try {
            const response = await fetch('https://wilsoncgrp.com/contact-us-api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(enteredValues)
            });
    
            if (response.ok) {
                // Clear form fields on successful submission
                setEnteredValues({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
                setSuccMsg('Message sent successfully!');
            } else {
                throw new Error('Failed to send message.');
            }
        } catch (error) {
            console.error('Error sending message:', error.message);
            setFailMsg('Failed to send message. Please try again later.');
        }
    }    

    return (
        <>
            <Box className="container">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={7} pr={{ md: 15 }}>
                        <Box sx={{ backgroundImage: `url(${contactBg})`, backgroundRepeat: 'no-repeat', padding: { md: '150px 15px 0 205px' } }} >
                            <Typography variant='h2' fontWeight='200' fontSize='68px'>
                                Want to contact us?
                            </Typography>
                            <Divider sx={{ margin: '10px 0 25px 0', width: '70px', border: '2px solid #CFCFCD' }} />
                            <Typography fontSize='20px' color='#000'>Need help with FedRAMP, cybersecurity, risk assessment, and/or compliance consulting services? Send us a message, and our team
                                will reach out to you.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <Grid container spacing={2}>
                                <Grid item sm={6} md={6}>
                                    <TextField fullWidth required id="standard-basic" label="First Name" variant="standard"
                                        onChange={(event) => handleInputChange('firstName', event.target.value)}
                                        value={enteredValues.firstName}
                                    />
                                </Grid>
                                <Grid item sm={6} md={6}>
                                    <TextField fullWidth required id="standard-basic" label="Last Name" variant="standard"
                                        onChange={(event) => handleInputChange('lastName', event.target.value)}
                                        value={enteredValues.lastName}
                                    />
                                </Grid>
                                <Grid item sm={6} md={6}>
                                    <TextField type='email' required fullWidth id="standard-basic" label="Email Address" variant="standard"
                                        onChange={(event) => handleInputChange('email', event.target.value)}
                                        value={enteredValues.email}
                                        error={!validateEmail(enteredValues.email) && enteredValues.email !== ''}
                                        helperText={!validateEmail(enteredValues.email) && enteredValues.email !== '' ? 'Please enter a valid email address.' : ''}
                                    />
                                </Grid>
                                <Grid item sm={6} md={6}>
                                    <TextField fullWidth  id="standard-basic" label="Phone Number" variant="standard"
                                        onChange={(event) => handleInputChange('phone', event.target.value)}
                                        value={enteredValues.phone} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth required id="standard-basic" label="Subject" variant="standard"
                                        onChange={(event) => handleInputChange('subject', event.target.value)}
                                        value={enteredValues.subject}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth required id="standard-basic" label="Message" variant="standard" multiline rows={5}
                                        onChange={(event) => handleInputChange('message', event.target.value)}
                                        value={enteredValues.message}
                                    />
                                </Grid>
                            </Grid>
                            <Typography fontSize='12px' my={2}>By submitting this form, you are agreeing to Wilson Consulting Group ’s <a href='https://wilsoncgrp.com/privacy-policy'>Privacy Policy</a>.</Typography>
                            <Button type='submit' size="large" variant="outlined" sx={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold', padding: '14px 32px' }} >Send Message</Button>
                       <Typography component='div' color='#ff0000'>{emailErrorMsg}
                       {errorMsg}</Typography>

                       <Typography component='div' color='#ff0000'>
{failMsg && failMsg}
                       </Typography>
                       <Typography component='div' color='green'>
{succMsg && succMsg}
                       </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            
        </>
    )
}

export default ContactUs;