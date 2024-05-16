import { Typography, Container,  List, ListItem, ListItemText, createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';

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

const achievements = [
  "Reduced onboarding time by 33% by implementing an intuitive React-based form wizard with real-time validation feedback.",
  "Increased sign-up conversion rates by 35% through redesigning landing pages and optimizing call-to-action buttons with React, as evidenced by Google Analytics data.",
  "Fostered a 25% increase in collaborative work among accounting teams by integrating real-time collaborative tools for document editing and financial planning within the React app.",
  "Reduced p99 latency by 1.2 seconds (40% improvement) by optimizing API calls and using GraphQL for efficient data fetching in the React frontend.",
  "Mentored a new team member to proficiency within two months, enabling them to develop and deploy complex React features independently through a structured mentorship program."
];

const Experience = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        {/* <Paper elevation={3}> */}
          <Typography variant="h5" component="h2" gutterBottom color="primary">
            Experience
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            Profitual Inc.
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            Junior Full-Stack Developer | Fredericton, NB
          </Typography>
          <Typography variant="body1" gutterBottom>
            Empowering startups with financial independence through innovative SaaS solutions!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Project: Developed a dynamic web application to enable clients to seamlessly track, budget, and forecast financial expenses.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Key Achievements:
          </Typography>
          <List>
            {achievements.map((achievement, index) => (
              <ListItem key={index}>
                <ListItemText primary={achievement} />
              </ListItem>
            ))}
          </List>
          <Typography variant="body1" gutterBottom>
            Expertise: Highly skilled in React/Redux, JavaScript, PostgreSQL, Node.js, Docker, Cypress, and Azure DevOps.
          </Typography>
        {/* </Paper> */}
      </Container>
    </ThemeProvider>
  );
};

export default Experience;
