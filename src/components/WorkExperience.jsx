import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const WorkExperience = ({ workExperience }) => (
    <div>
        {workExperience.map((work, index) => (
            <Typography key={index} sx={{ fontSize: 12 }}>
                {work.role} at {work.company} ({work.duration})
            </Typography>
        ))}
    </div>
);

WorkExperience.propTypes = {
    workExperience: PropTypes.arrayOf(PropTypes.shape({
        company: PropTypes.string,
        role: PropTypes.string,
        duration: PropTypes.string,
    })).isRequired,
};

export default WorkExperience;