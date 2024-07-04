import * as React from 'react';
import './homepage.css'; 
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Avatar, IconButton, Link, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ComputerIcon from '@mui/icons-material/Computer';
import Skills from './skills';
import Experience from './experience';
import Education from './education';
import adelleLogo from '../Images/AdelleGomes.png';
import Technologies from './technologies';
import home from '../Images/Home.png'

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    // flexGrow: 1,
    // padding: theme.spacing(3),
    // transition: theme.transitions.create('margin', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    // marginLeft: 0,
    // ...(open && {
    //  marginLeft: (drawerWidth/2 ),
    //   transition: theme.transitions.create('margin', {
    //     easing: theme.transitions.easing.easeOut,
    //     duration: theme.transitions.duration.enteringScreen,
    //   }),
    // }),
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
      case 'Contact  Me':
        return <Technologies />;
      default:
        return (
          <div class="container">
            <img src={home} alt="Snow" style={{width:'100%'}}></img>
            <div class="top-right">
              <Typography variant="h5">
              Welcome to My Professional World
              </Typography>
              <Typography variant="h6" paddingTop={5}>
              Hello, I'm Adelle Gomes, a dedicated and innovative software engineer with a rich background in full-stack development and a recent focus on frontend technologies. With a Bachelor’s degree in Environmental Control Technology from UNICAMP and advanced programming training from NBCC, I blend a unique perspective on software solutions with technical proficiency.
              </Typography>
              <Typography variant="h6">
              Over the years, I've contributed to various transformative projects, such as developing a SaaS platform at Profitual Inc. and pioneering generative AI systems at Lateetud. My expertise lies in creating seamless user experiences and scalable software solutions using technologies like JavaScript, React, and Python. I’m passionate about leveraging technology to solve real-world problems, continuously pushing the boundaries of what is possible in digital spaces.
              </Typography>
              <Typography variant="h6">
              Through this website, I invite you to explore my resume. Whether you are a potential employer, a fellow tech enthusiast, or a collaborator, I look forward to connecting and exploring how we can drive technology forward together.
              </Typography>
            </div>
           
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
            { text: 'Contact Me', icon: <ComputerIcon /> },
          ].map((item) => (
            <ListItem button key={item.text} onClick={() => handleListItemClick(item.text)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-around', padding: theme.spacing(2)  }}>
          <Link href="https://www.linkedin.com/in/adelle-anik-araujo-gomes/" target="_blank">
            <LinkedInIcon style={{ color: 'black' }}  />
          </Link>
          <Link href="https://github.com/AdelleAnik" target="_blank">
            <GitHubIcon style={{ color: 'black' }} />
          </Link>
        </Box>
      </DrawerStyled>
      <Main open={open}>
        {renderContent(selectedPage)}
      </Main>
    </Box>
  );
};

export default Homepage;
