import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Skills = ({ skills }) => (
    <div>
        {skills.map((skill, index) => (
            <Typography key={index}>
                {skill}
            </Typography>
        ))}
    </div>
);

Skills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Skills;