import { Typography, Container, createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';
import Paper from '@mui/material/Paper';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h5: {
      fontWeight: 600,
    },
    h6: {
      color: '#000000',
    },
    body1: {
      color: '#555',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '20px',
          margin: '20px 0',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: '#555',
        },
      },
    },
  },
});


const Experience = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
         <Typography variant="h5" component="h2" gutterBottom color="primary">
            Experience
          </Typography>
        <Paper elevation={3}>
          <Typography variant="h6" component="h3" gutterBottom>
            Lateetud
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            Software Engineer
          </Typography>
          <Typography variant="body1" gutterBottom>
            Project: I spearheaded the development of a generative AI system that interprets and answers user queries by dynamically retrieving data from a complex database, implemented robust data handling and processing techniques to ensure accurate and timely responses, thereby enhancing user interaction and satisfaction. Collaborated closely with a cross-functional team,  focused on integrating AI capabilities into existing platforms with an emphasis on scalability and efficiency. Additionally, I employed Python programming skills to develop and optimize the backend processes supporting AI functionalities.
          </Typography>
          {/* <Typography variant="body1" gutterBottom>
            Key Achievements:
          </Typography> */}
          {/* <List>
            {achievements.map((achievement, index) => (
              <ListItem key={index}>
                <ListItemText primary={achievement} />
              </ListItem>
            ))}
          </List> */}
          <Typography variant="body1" gutterBottom>
            Expertise: Python
          </Typography>
        </Paper>
      </Container>
      <Container maxWidth="lg">
        <Paper elevation={3}>
          <Typography variant="h6" component="h3" gutterBottom>
            Profitual Inc.
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            Junior Full-Stack Developer 
          </Typography>
          <Typography variant="body1" gutterBottom>
            Empowering startups with financial independence through innovative SaaS solutions!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Project: Developed a dynamic SaaS platform to enable clients to seamlessly track, budget, and forecast financial expenses, improved user experience metrics, and mentored new team members for over two years.
          </Typography>
          {/* <Typography variant="body1" gutterBottom>
            Key Achievements:
          </Typography> */}
          {/* <List>
            {achievements.map((achievement, index) => (
              <ListItem key={index}>
                <ListItemText primary={achievement} />
              </ListItem>
            ))}
          </List> */}
          <Typography variant="body1" gutterBottom>
            Expertise: Highly skilled in React/Redux, JavaScript, PostgreSQL, Node.js, Docker, Cypress, and Azure DevOps.
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Experience;
