import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, padding } from '@mui/system';
import MenusData from '../data/MenuData'
import { NavLink } from 'react-router-dom';

const Menus = MenusData;

const MobileNav = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className='mobileNav'>
        <ul>
          {Menus.map((menu, index) => (
            <li key={index}>
              {(menu.dropDowns || menu.megaMenus) ? (
                <Accordion square sx={{ boxShadow: 'none' }} expanded={expanded === `panel1${index}`} onChange={handleChange(`panel1${index}`)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{ padding: 0 }}
                  >
                    <a href={menu.link}>{menu.title}</a>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: 0 }}>
                    {menu.dropDowns && <ul className='dropDowns'>
                      {menu.dropDowns.map((dropDown, index) => (
                        <li key={index}><a href={dropDown.link}>{dropDown.title}</a></li>
                      ))}
                    </ul>
                    }
                    {menu.megaMenus && (
                      <Box>
                        {menu.megaMenus.map((megaMenu, index) => (
                          
                          <>

                          <Accordion key={index} square sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              sx={{ padding: 0 }}
                            >
                              <a href={megaMenu.link}>
                                {megaMenu.title}
                              </a>


                              

                            </AccordionSummary>
                           
                            <ul className='dropDownLink'>
                              {megaMenu.menuItems.map((menuItem, index) => (

                                <li key={index}><a href={menuItem.link}>{menuItem.title}</a></li>

                              ))}
                            </ul>
                            

                          </Accordion>

                          {megaMenu.otherTitles && (
                              <ul className='megaOtherTitle'>
                                {megaMenu.otherTitles.map((otherTitle, index) => (
                                  <li key={index}>
                                    <a href={otherTitle.link}>{otherTitle.title}</a>
                                  </li>
                                ))}
                              </ul>
                            )}
                            </>
                        ))}
                      </Box>
                    )}
                  </AccordionDetails>
                </Accordion>
              ) : <a href={menu.link}>{menu.title}</a>}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MobileNav