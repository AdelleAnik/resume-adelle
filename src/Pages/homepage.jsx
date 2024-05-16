import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import Skills from './skills';
import Experience from './experience';
import Education from './education';
import image from '../Images/360_F_89026793_eyw5a7WCQE0y1RHsizu41uhj7YStgvAA.jpg'
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
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
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
  const [open] = React.useState(true);
  const [selectedPage, setSelectedPage] = React.useState('Home');

  const handleListItemClick = (text) => {
    setSelectedPage(text);
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
      <DrawerStyled variant="persistent" anchor="left" open={open}>
        <Box
          sx={{
            width: drawerWidth,
            height: 200,
            backgroundImage: 'url(https://example.com/your-image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
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
        <Typography paragraph>
          {renderContent(selectedPage)}
        </Typography>
      </Main>
    </Box>
  );
};

export default Homepage;
