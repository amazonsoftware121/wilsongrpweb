import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Box, Grid, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { display } from '@mui/system';
import MenusData from '../data/MenuData'




const NavBar = () => {
    const Menus = MenusData;
    return (
        <>
            <ul className="navigationMenu">
                {Menus.map((menu, i) => (

                    <li key={i} className={(menu.dropDowns || menu.megaMenus) && "dropdownParent"}>
                        <a href={menu.link} >
                            {menu.title}
                            {(menu.dropDowns || menu.megaMenus) && <ExpandMoreIcon />}
                        </a>
                        {menu.dropDowns && (
                            <ul className="dropdownChild">
                                <li><Typography variant='h6'><a href={menu.link}> {menu.title}</a></Typography></li>
                                {menu.dropDowns.map((dropDown, index) => (
                                    <li key={index}><a href={dropDown.link} >{dropDown.title}</a></li>
                                ))}
                            </ul>
                        )}
                        {menu.megaMenus && (
                            <Box className="megaMenu" sx={{ width: '1070px', position: 'absolute' }}>
                                <Container>
                                    <Grid container spacing={3}>
                                        {menu.megaMenus.map((megaMenu, index) => (
                                            <Grid key={index} item md={i === 1 ? (index === 0 ? 6 : 3) : 4} >
                                                <Box>
                                                    <Typography variant='h6' sx={{ fontWeight: 700 }}><a href={megaMenu.link} >{megaMenu.title}</a>
                                                    </Typography>
                                                    <ul className={`dropdownChild ${i === 1 && index == 0 ? 'col2' : ''}`}>
                                                        {megaMenu.menuItems.map((menuItem, index) => (
                                                            <li key={index}><a href={menuItem.link} >{menuItem.title}</a></li>
                                                        ))}
                                                    </ul>
                                                </Box>
                                                {megaMenu.otherTitles && megaMenu.otherTitles.map((otherTitle, index) => (
                                                    <Typography key={index} variant='h6' sx={{ fontWeight: 700, }} mt={3}><a href={otherTitle.link} >{otherTitle.title}</a></Typography>
                                                ))}
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Container>
                            </Box>
                        )}
                    </li>
                ))}
            </ul>
        </>

    )
}

export default NavBar