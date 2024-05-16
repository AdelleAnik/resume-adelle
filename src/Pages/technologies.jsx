import { Typography, Grid } from '@mui/material';
import * as React from 'react';
import reactImage from '../Images/react.png';
import js from '../Images/download.png';
import node from '../Images/node.png';
// import postgres from '../Images/postgres.png';
// import graphql from '../Images/graphql.png';
// import html from '../Images/html.png';
// import css from '../Images/css.png';
// import cypress from '../Images/cypress.jpeg';
// import restapi from '../Images/restapi.png';

const skills = [
    { name: 'React', image: reactImage },
    { name: 'JavaScript', image: js },
    { name: 'NodeJs', image: node },
    // { name: 'PostgreSQL', image: postgres },
    // { name: 'GraphQL', image: graphql },
    // { name: 'HTML ', image: html },
    // { name: 'CSS', image: css },
    // { name: 'Cypress', image: cypress },
    // { name: 'REST/API', image: restapi },
];

const Technologies = () => {
    return (
        <div>
            <Typography variant="h5" component="h2" gutterBottom>
                Technologies used to create this webiste
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
        </div>
    );
};

export default Technologies;
