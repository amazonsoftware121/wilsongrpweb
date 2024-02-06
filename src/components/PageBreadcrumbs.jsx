import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Breadcrumbsaa = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const breadcrumbs = [
    <a style={{ color: '#fff' }}
      underline="hover"
      key="2"
      color="inherit"
      href="https://wilsoncgrp.com/our-services"
      //onClick={handleClick}
    >
      Our Services
    </a>,
    props.parent && <Link
      underline="hover"
      key="2"
      color="inherit"
      href={props.parentUrl }
      //onClick={handleClick}
    >{props.parent}</Link>,
    <Typography key="3" color={'primary.main'}>
      {props.title}
    </Typography>,

  ];
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="medium" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}

export default Breadcrumbsaa