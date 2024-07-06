import React, { useState } from 'react';
import { Button, TextField, Box, Paper, Container, createTheme, ThemeProvider, Typography } from '@mui/material';
import emailjs from 'emailjs-com';

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
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process form submission here, e.g., send data to an API or your email
        // EmailJS parameters
        const serviceId = 'service_icpkvkl';
        const templateId = 'template_bhrtk0n';
        const userId = 'GKcS4UNXKGCZhjasD';

        emailjs.send(serviceId, templateId, formData, userId)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '', subject: '' }); // Reset form after successful submission
            }, (err) => {
                console.error('FAILED...', err);
                alert('Failed to send the message, please try again.');
            });
    };

    return (
        
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
     
        <Paper elevation={3} sx={{ padding: 3, margin: 2, maxWidth: 600, mx: "auto" }}>
          <Typography variant="h5" component="h2" gutterBottom color="primary">
            Contact Me
          </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Your Email Address"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="subject"
                    label="Subject"
                    name="subject"
                    autoComplete="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="message"
                    label="Message"
                    type="text"
                    id="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Send
                </Button>
            </Box>
        </Paper>
        </Container>
    </ThemeProvider>
    );
};

export default ContactForm;
