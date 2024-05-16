import { Typography, Grid } from '@mui/material';
import * as React from 'react';

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
        <div>
            <Typography variant="h5" component="h2" gutterBottom>
                Education
            </Typography>
            <Grid container spacing={2}>
                {educationDetails.map((education, index) => (
                    <Grid item xs={12} key={index}>
                        <Typography variant="h6" component="h3" gutterBottom>
                            {education.institution}
                        </Typography>
                        <Typography>
                            {education.degree}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Education;
