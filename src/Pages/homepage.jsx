import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Box, AppBar, Toolbar, Typography, Avatar } from '@mui/material';
import adelleLogo from '../Images/AdelleGomes.png';
import Skills from './skills';
import Home from './home';
import Experience from './experience';
import Education from './education';
import ContactMe from './contactMe';
import Footer from '../Components/footer';

const Main = styled('main')(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const Navbar = ({ setSelectedPage }) => {
  // eslint-disable-next-line no-unused-vars
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (page) => {
    setSelectedPage(page);
    handleClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Avatar src={adelleLogo} sx={{ marginRight: '10px' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Adelle Gomes
        </Typography>
        <Button sx={{ color: '#fff', '&:hover': { backgroundColor: '#4054b2' } }} variant="text" onClick={() => handleMenuItemClick('Home')}>Home</Button>
        <Button sx={{ color: '#fff', '&:hover': { backgroundColor: '#4054b2' } }} variant="text" onClick={() => handleMenuItemClick('Skills')}>Skills</Button>
        <Button sx={{ color: '#fff', '&:hover': { backgroundColor: '#4054b2' } }} variant="text" onClick={() => handleMenuItemClick('Experience')}>Experience</Button>
        <Button sx={{ color: '#fff', '&:hover': { backgroundColor: '#4054b2' } }} variant="text" onClick={() => handleMenuItemClick('Education')}>Education</Button>
        <Button sx={{ color: '#fff', '&:hover': { backgroundColor: '#4054b2' } }} variant="text" onClick={() => handleMenuItemClick('Contact Me')}>Contact Me</Button>
      </Toolbar>
    </AppBar>
  );
};

const Homepage = () => {
  const [selectedPage, setSelectedPage] = useState('Home');

  const renderContent = () => {
    switch (selectedPage) {
      case 'Skills':
        return <Skills />;
      case 'Experience':
        return <Experience />;
      case 'Education':
        return <Education />;
      case 'Contact Me':
        return <ContactMe />;
      default:
        return <Home />;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar setSelectedPage={setSelectedPage} />
      <Main>
        {renderContent()}
      </Main>
      <Footer />
    </Box>
  );
};

export default Homepage;
