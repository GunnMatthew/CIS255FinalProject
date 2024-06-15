import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Education = ({ education }) => (
    <div>
        {education.map((edu, index) => (
            <Typography key={index} sx={{ fontSize: 12 }}>
                <ul>
                    <li style={{ textAlign: 'left' }}>
                        {edu.degree} at {edu.institution} ({edu.duration})
                    </li>
                </ul>
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