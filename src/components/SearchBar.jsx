import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppBar, Toolbar, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the search results page with the search query as a parameter
    window.location.href = `https://wilsoncgrp.com/search?search=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <div>
      <AppBar position="static" sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
        <Toolbar style={{padding: '0px'}}>
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
           <Paper
      component="form"
      elevation={3}
      sx={{ width: '250px', display: 'flex' }}
      onSubmit={handleSubmit}
    >
      <IconButton type="submit" color="white" onClick={handleSearchIconClick}>
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
