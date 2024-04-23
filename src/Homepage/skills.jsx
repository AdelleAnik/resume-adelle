import { Typography, Paper, List, ListItem, ListItemText, Grid } from '@mui/material';
import * as React from 'react';

const Skills = () => {
    const skills = [
        'React', 'JavaScript', 'Docker', 'PostgreSQL', 'REST/API',
        'Cypress', 'HTML & CSS', 'NodeJs', 'GraphQL'
    ];

    return (
        <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h5" component="h2" gutterBottom>
                        Technical Skills
                    </Typography>               
                     <Paper elevation={3} style={{ padding: '20px' }}>
                   
                    <List>
                        {skills.map((skill, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={skill} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Skills;
