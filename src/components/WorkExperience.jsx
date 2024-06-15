import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';

const WorkExperience = ({ workExperience }) => (
    <Box component="ul" sx={{ textAlign: 'left'}}>
        {workExperience.map((work, index) => (
            <li key={index} style={{ fontSize: 12}}>
                <Typography sx={{ fontSize: 12 }}>
                    {work.role} at {work.company} ({work.duration})
                </Typography>
                {work.description && (
                    <Box component="ul">
                        <li>
                            <Typography sx={{ fontSize: 12 }}>
                                {work.description}
                            </Typography>
                        </li>
                    </Box>
                )}
            </li>
        ))}
    </Box>
);

// Prop validation
WorkExperience.propTypes = {
    workExperience: PropTypes.arrayOf(PropTypes.shape({
        company: PropTypes.string,
        role: PropTypes.string,
        duration: PropTypes.string,
        description: PropTypes.string,
    })).isRequired,
};

export default WorkExperience;