import React, {useState} from 'react';
import { Box, Stack } from '@mui/system';
import PageBreadcrumbs from './PageBreadcrumbs';
import { Button,Modal, Grid, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import { FaArrowRight, FaPlay, FaWindowClose } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Close, CloseRounded, Translate } from '@mui/icons-material';
import { IoCloseCircle } from "react-icons/io5";



const PageHeader = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  function addFunction() {
    console.log(10 + 10)
  }
  addFunction();

  return (
    <>
      <Helmet>
        <title>{props.headTitle && props.headTitle}</title>
        <meta name="description" content={props.metaDesc && props.metaDesc} />
      </Helmet>
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: '0 15px', height: '550px', backgroundImage: `url(${props.backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Stack spacing={3} direction='column' >
          <Typography variant='h2' fontWeight='500' fontSize={{xs: '42px', md: '3.75rem'}} className='pageHeaderTitle' component='h1'>{props.title}</Typography>
          <PageBreadcrumbs title={props.title} parent={props.parent} parentUrl={props.parentUrl} />
          <Stack justifyContent='center' columnGap={3} direction='row' mt={3} sx={{flexWrap: 'wrap'}} rowGap={2} >
            {props.requestConBtn && <Button  size="large" endIcon={<FaArrowRight size={14} />} variant="contained"  href={props.requestConBtn}>Request Consultation</Button>}
            { props.videoUrl && <Button size="large" endIcon={<FaPlay size={14} />} variant="outlined" onClick={handleOpen}>Watch Video </Button>} 
          </Stack>


        </Stack>
      </Grid>

      <Modal open={open} onClose={handleClose} >
        <motion.div
        className='modal_video'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '80%',
            maxWidth: '768px',
           
            padding: '0px',
          
            borderRadius: '0px',
          }}
        >
          {props.videoUrl}
          <Button  onClick={handleClose} style={{position: 'absolute', right: '-30px', top: '-30px'}}>
          <IoCloseCircle size={46} />
          </Button>
        </motion.div>
      </Modal>

    </>
  )
}

export default PageHeader