import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Skills = ({ skills }) => (
    <Typography component='div' 
    sx={{ fontSize: 12, columnCount: 2, columnGap: '40px', mb: 2 }}>
        <ul style={{ paddingLeft: '1em', margin: 0, listStylePosition: 'inside' }}>
            {skills.map((skill, index) => (
                <li key={index} style={{ textAlign: 'center' }}>
                    {skill}
                </li>
            ))}
        </ul>
    </Typography>
);

Skills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Skills;