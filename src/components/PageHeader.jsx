import React from 'react';
import { Box, Stack } from '@mui/system';
import PageBreadcrumbs from './PageBreadcrumbs';
import { Grid, Typography } from '@mui/material';


const PageHeader = (props) => {

  function addFunction () {
    console.log(10 + 10)
  } 
addFunction();

  return (
    <Grid container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '550px', backgroundImage: `url(${props.backgroundImage})` }}>
      <Stack spacing={3} direction='column'>
      <Typography variant='h2' fontWeight='500'  className='pageHeaderTitle' component='h1'>{props.title}</Typography>
      <PageBreadcrumbs title={props.title} parent={props.parent} parentUrl={props.parentUrl} />
      </Stack>
    </Grid>
  )
}

export default PageHeader