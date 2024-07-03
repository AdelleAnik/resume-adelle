import { Typography, Grid, Container, createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';
import reactImage from '../Images/react.png';
import js from '../Images/download.png';
import node from '../Images/node.png';
import postgres from '../Images/postgres.png';
import graphql from '../Images/graphql.png';
import html from '../Images/html.png';
import css from '../Images/css.png';
import cypress from '../Images/cypress.jpeg';
import restapi from '../Images/restapi.png';
import github from '../Images/github.png';
import python from '../Images/python.png';
import redux from '../Images/redux.png';
import azure from '../Images/azureDevops.png';
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
  },
});

const skills = [
  { name: 'React', image: reactImage },
  { name: 'Redux', image: redux },
  { name: 'JavaScript', image: js },
  { name: 'NodeJs', image: node },
  { name: 'Python', image: python },
  { name: 'PostgreSQL', image: postgres },
  { name: 'GraphQL', image: graphql },
  { name: 'HTML', image: html },
  { name: 'CSS', image: css },
  { name: 'Cypress', image: cypress },
  { name: 'REST/API', image: restapi },
  { name: 'GitHub', image: github },
  { name: 'Azure DevOps', image: azure }
];

const Skills = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
          <Typography variant="h5" component="h2" gutterBottom color="primary">
            Technical Skills
          </Typography>
          <Grid container spacing={2} justifyContent="flex-start" style={{ marginTop: '20px' }}>
            {skills.map((skill, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <img src={skill.image} alt={`${skill.name} logo`} style={{ width: '40px', height: '40px' }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="h2">
                      {skill.name}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Skills;
