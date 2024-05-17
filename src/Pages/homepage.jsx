import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Avatar, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import Skills from './skills';
import Experience from './experience';
import Education from './education';
import image from '../Images/360_F_89026793_eyw5a7WCQE0y1RHsizu41uhj7YStgvAA.jpg';
import adelleLogo from '../Images/AdelleGomes.png';
import Technologies from './technologies';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
      marginLeft: drawerWidth,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }),
);

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}));

const Homepage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(!isMobile);
  const [selectedPage, setSelectedPage] = React.useState('Home');

  React.useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemClick = (text) => {
    setSelectedPage(text);
    if (isMobile) {
      setOpen(false);
    }
  };

  const renderContent = (page) => {
    switch (page) {
      case 'Skills':
        return <Skills />;
      case 'Experience':
        return <Experience />;
      case 'Education':
        return <Education />;
      case 'Technologies':
        return <Technologies />;
      default:
        return (
          <div>
            <Typography variant="h5">
              Hello! Welcome to Adelle's Resume
            </Typography>
            <img src={image} alt="logo" />
            <Typography variant="h6">
              The website is currently under construction, but feel free to take a look around 😉
            </Typography>
          </div>
        );
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        sx={{ display: { sm: 'none' }, position: 'fixed', top: 0, left: 0, zIndex: theme.zIndex.drawer + 1 }}
      >
        <MenuIcon />
      </IconButton>
      <DrawerStyled variant={isMobile ? 'temporary' : 'persistent'} anchor="left" open={open} onClose={handleDrawerToggle}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: drawerWidth,
            height: 200,
          }}
        >
          <Avatar
            alt="Profile Picture"
            src={adelleLogo}
            sx={{ width: 100, height: 100 }}
          />
        </Box>
        <List>
          {[
            { text: 'Home', icon: <HomeIcon /> },
            { text: 'Skills', icon: <BuildIcon /> },
            { text: 'Experience', icon: <WorkIcon /> },
            { text: 'Education', icon: <SchoolIcon /> },
            { text: 'Technologies', icon: <ComputerIcon /> },
          ].map((item) => (
            <ListItem button key={item.text} onClick={() => handleListItemClick(item.text)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </DrawerStyled>
      <Main open={open}>
        {renderContent(selectedPage)}
      </Main>
    </Box>
  );
};

export default Homepage;
