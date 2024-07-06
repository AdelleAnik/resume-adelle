
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box sx={{
            bgcolor: 'primary.main',
            color: 'white',
            p: 3,
            mt: 'auto', // pushes the footer to the bottom of the layout if there is less content
            width: '100%',
            textAlign: 'center'
        }}>
            
          <Link href="https://www.linkedin.com/in/adelle-anik-araujo-gomes/" target="_blank">
            <LinkedInIcon style={{ color: 'white' }}  />
          </Link>
          <Link href="https://github.com/AdelleAnik" target="_blank">
            <GitHubIcon style={{ color: 'white' }} />
          </Link>
          <Typography variant="body1">
                © 2024 Adelle Gomes. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
