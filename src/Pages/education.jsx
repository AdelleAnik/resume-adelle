import { Typography, Grid, Container, createTheme, ThemeProvider, Paper } from '@mui/material';
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
  },
});

const educationDetails = [
  {
    institution: 'New Brunswick Community College - NBCC',
    degree: 'IT-Programmer Analyst',
  },
  {
    institution: 'Universidade Estadual de Campinas - UNICAMP',
    degree: 'Environmental Control Technology, Environmental Science',
  },
];

const Education = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
          <Typography variant="h5" component="h2" gutterBottom color="primary">
            Education
          </Typography>
          <Grid container spacing={0}>
            {educationDetails.map((education, index) => (
          <Paper elevation={3}>
              <Grid item xs={12} key={index}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {education.institution}
                </Typography>
                <Typography variant="body1">
                  {education.degree}
                </Typography> 
              </Grid>
          </Paper>
            ))}
          </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Education;
