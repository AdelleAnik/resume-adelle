import { Typography, Box } from '@mui/material';
import * as React from 'react';

const achievements = [
    "Reduced onboarding time by 33% by implementing an intuitive React-based form wizard with real-time validation feedback.",
    "Increased sign-up conversion rates by 35% through redesigning landing pages and optimizing call-to-action buttons with React, as evidenced by Google Analytics data.",
    "Fostered a 25% increase in collaborative work among accounting teams by integrating real-time collaborative tools for document editing and financial planning within the React app.",
    "Reduced p99 latency by 1.2 seconds (40% improvement) by optimizing API calls and using GraphQL for efficient data fetching in the React frontend.",
    "Mentored a new team member to proficiency within two months, enabling them to develop and deploy complex React features independently through a structured mentorship program."
];

const Experience = () => {
    return (
        <Box>
            <Typography variant="h5" component="h2" gutterBottom>
                Experience
            </Typography>
            
            <Typography variant="h6" component="h3" gutterBottom>
                Profutial Inc.
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom>
                Junior Full-Stack Developer | Fredericton, NB
            </Typography>
            <Typography gutterBottom>
                Empowering startups with financial independence through innovative SaaS solutions!
            </Typography>
            <Typography gutterBottom>
                Current Project: Developing a dynamic web application to enable clients to seamlessly track, budget, and forecast financial expenses.
            </Typography>
            <Typography gutterBottom>
                Key Achievements:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
                {achievements.map((achievement, index) => (
                    <Typography component="li" key={index} gutterBottom>
                        {achievement}
                    </Typography>
                ))}
            </Box>
            <Typography gutterBottom>
                Expertise: Highly skilled in React/Redux, JavaScript, PostgreSQL, Node.js, Docker, Cypress, and Azure DevOps.
            </Typography>
        </Box>
    );
};

export default Experience;
