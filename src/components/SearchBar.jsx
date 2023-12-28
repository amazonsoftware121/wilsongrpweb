import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppBar, Toolbar, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div>
      <AppBar position="static" sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <IconButton onClick={handleSearchIconClick} color="#fff">
            <SearchIcon sx={{color: 'white'}}  />
          </IconButton>
        </Toolbar>
      </AppBar>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{position: 'fixed', right: '30px'} }
          >
            <Paper component="form" elevation={3}>
              <IconButton onClick={handleSearchIconClick} color="white">
                <SearchIcon />
              </IconButton>
              <InputBase placeholder="Search..." />
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
