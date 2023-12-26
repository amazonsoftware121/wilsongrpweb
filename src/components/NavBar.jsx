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
                        <NavLink to={menu.link} >
                            {menu.title}
                            {(menu.dropDowns || menu.megaMenus) && <ExpandMoreIcon />}
                        </NavLink>
                        {menu.dropDowns && (
                            <ul className="dropdownChild">
                                <li><Typography variant='h6'><NavLink to={menu.link}> {menu.title}</NavLink></Typography></li>
                                {menu.dropDowns.map((dropDown, index) => (
                                    <li key={index}><NavLink to={dropDown.link} >{dropDown.title}</NavLink></li>
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
                                                    <Typography variant='h6' sx={{ fontWeight: 700 }}><NavLink to={megaMenu.link} >{megaMenu.title}</NavLink>
                                                    </Typography>
                                                    <ul className={`dropdownChild ${i === 1 && index == 0 ? 'col2' : ''}`}>
                                                        {megaMenu.menuItems.map((menuItem, index) => (
                                                            <li key={index}><NavLink to={menuItem.link} >{menuItem.title}</NavLink></li>
                                                        ))}
                                                    </ul>
                                                </Box>
                                                {megaMenu.otherTitles && megaMenu.otherTitles.map((otherTitle, index) => (
                                                    <Typography key={index} variant='h6' sx={{ fontWeight: 700, }} mt={3}><NavLink to={otherTitle.link} >{otherTitle.title}</NavLink></Typography>
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