import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Banner from "../../assets/img/banner.jpg";
import { motion } from 'framer-motion'
import { Button, Container, Typography } from "@mui/material";
import videoBg from '../../assets/videoBg.mp4';
import { useRef } from "react";
import { Stack } from "@mui/system";

const MainBanner = () => {



  return (

    <motion.div

      animate={{ scale: 1 }}

      transition={{ ease: "easeOut", duration: 2 }}
      style={{position: 'relative'}}
    >


     <video src={videoBg} autoPlay loop muted></video>
      <section className='mainBanner'
        style={{
          //backgroundImage: `url(${Banner})`,
          backgroundColor: '#000000b0',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: "hidden"
        }}
      >



        <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
          <motion.div animate={{ x: 100 }}
            transition={{
              ease: "linear",
              duration: 2,
              delay: 0.2,
              x: { duration: 1 }
            }}

            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}


            className="bannerContent">

            <div className="bannerContentInner">
              <Typography className="bannerSubHeading">Certified FedRAMP and StateRAMP 3PAO</Typography>
              <Typography variant="h1" className="bannerHeading">FedRAMP and StateRAMP Compliance Consulting</Typography>
              <Typography className="bannerDescription">Achieve or maintain your FedRAMP & StateRAMP authorization with our Advisory and Assessment Services. </Typography>
              <Stack spacing={3} direction='row' mt={3}>
                <Button size="large" variant="contained" endIcon={<FaArrowRight size={14} />} href="https://wilsoncgrp.com/fedramp-consulting">Read More</Button>
                <Button size="large" variant="outlined" endIcon={<FaArrowRight size={14} />} href="https://wilsoncgrp.com/our-services">Services </Button>
              </Stack>

            </div>
          </motion.div>
        </Container>
      </section>
    </motion.div>
  )
}

export default MainBanner