import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Education = ({ education }) => (
    <div>
        {education.map((edu, index) => (
            <Typography key={index}>
                {edu.degree} at {edu.institution} ({edu.duration})
            </Typography>
        ))}
    </div>
);

Education.propTypes = {
    education: PropTypes.arrayOf(PropTypes.shape({
        degree: PropTypes.string,
        institution: PropTypes.string,
        duration: PropTypes.string,
    })).isRequired,
};

export default Education;