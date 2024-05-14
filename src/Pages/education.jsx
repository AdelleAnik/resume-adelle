    import { Typography, Grid, Paper } from '@mui/material';
    import * as React from 'react';

    const Education = () => {
        return (
            <div>
                <Typography variant="h5" component="h2" gutterBottom>
                    Education
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper elevation={3} style={{ padding: '20px' }}>
                            <Typography variant="h6" component="h3" gutterBottom>
                                New Brunswick Community College - NBCC
                            </Typography>
                            <Typography >
                                IT-Programmer Analyst
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={3} style={{ padding: '20px' }}>
                            <Typography variant="h6" component="h3" gutterBottom>
                               Universidade Estadual de Campinas - UNICAMP
                            </Typography>
                            <Typography >
                               Environmental Control Technology, Environmental Science
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    };

    export default Education;
