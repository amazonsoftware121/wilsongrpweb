import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Banner from "../../assets/img/banner.jpg";
import { motion } from 'framer-motion'
import { Button, Container, Typography } from "@mui/material";
import videoBgMp4 from '../../assets/videoBg_new.mp4';
import videoBgOgg from '../../assets/videoBg_new.ogg';
import videoBgWebm from '../../assets/videoBg_new.webm';
import { useRef } from "react";
import { Box, Stack } from "@mui/system";

const MainBanner = () => {



  return (

    <motion.div

      animate={{ scale: 1 }}

      transition={{ ease: "easeOut", duration: 2 }}
      style={{ position: 'relative' }}
    >


      <section className='mainBanner'
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: "hidden"
        }}
      >
        <Box className="videoBg">
          <video autoPlay loop muted>
            <source src={videoBgMp4} />
              <source src={videoBgOgg} />
                <source src={videoBgWebm} />
          </video>
                <Box className="videoOverlay"></Box>
              </Box>


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