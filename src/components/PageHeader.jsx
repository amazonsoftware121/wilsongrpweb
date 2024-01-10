import React from 'react';
import { Box } from '@mui/system';
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
      <Box>
      <Typography variant='h2' component='h1'>{props.title}</Typography>
      <PageBreadcrumbs title={props.title} />
      </Box>
    </Grid>
  )
}

export default PageHeader