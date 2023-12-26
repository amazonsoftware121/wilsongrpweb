import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './NavBar';
import logo from '../assets/img/logo.png'
import { Box,IconButton } from '@mui/material'
import MobileNav from './MobileNav';


const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
  closed: {
    x: '-100%',
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
};

const CustomLeftSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <motion.nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: '80%',
        maxWidth: '400px',
        background: '#fff',
        color: '#000',
        overflowX: 'hidden'
      }}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
    >
      <Box className="mobileNavSidebar">
      <Box className="header" ><img src={logo} alt="Sidebar Logo" style={{width: 'auto'}} /></Box>
      <MobileNav />
</Box>



      
    </motion.nav>
  );
};

export default CustomLeftSidebar;
