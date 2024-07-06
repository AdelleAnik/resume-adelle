import { Typography, Container, createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';
import image from '../Images/360_F_89026793_eyw5a7WCQE0y1RHsizu41uhj7YStgvAA.jpg';

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

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div>
            {/* <img src={home} alt="Snow" style={{width:'100%'}}></img> */}
            <div>
            <Typography variant="h5" sx={{ mt: 2 }}>Welcome to My Professional World</Typography>
              <Typography variant="h6" paddingTop={5}>
              Hello, I'm Adelle Gomes, a dedicated and innovative software engineer with a rich background in full-stack development and a recent focus on frontend technologies. With a Bachelor’s degree in Environmental Control Technology from UNICAMP and advanced programming training from NBCC, I blend a unique perspective on software solutions with technical proficiency.
              </Typography>
              <Typography variant="h6">
              Over the years, I've contributed to various transformative projects, such as developing a SaaS platform at Profitual Inc. and pioneering generative AI systems at Lateetud. My expertise lies in creating seamless user experiences and scalable software solutions using technologies like JavaScript, React, and Python. I’m passionate about leveraging technology to solve real-world problems, continuously pushing the boundaries of what is possible in digital spaces.
              </Typography>
              {/* <Typography variant="h6">
              Through this website, I invite you to explore my resume. Whether you are a potential employer, a fellow tech enthusiast, or a collaborator, I look forward to connecting and exploring how we can drive technology forward together.
              </Typography> */}
              <div>
              <img src={image}  alt="logo" />
              <Typography variant="h6">
               The website is currently under construction, but feel free to take a look around 😉
              </Typography>
            </div>
          </div>
        </div>
        
      </Container>
    </ThemeProvider>
  );
};

export default Home;
