import PropTypes from 'prop-types'
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './Skills';

const StyledPaper = styled(Paper)({
    width: '8.5in',
    height: '11in',
    padding: '24px',
    margin: 'auto',
    marginTop: '32px',
    backgroundColor: 'white',
    boxShadow: '2px 4px 4px black',
    overflow: 'hidden',
});

const AboutMe = ({aboutMe, education, workExperience, skills }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <StyledPaper>
                <Typography sx={{ fontWeight: 'bold', fontSize: 16 }}>
                    Matthew E. Gunn
                </Typography>
                <Typography component="div" sx={{ fontWeight: 'bold', fontSize: 14, mb: 1 }}>
                    Bremerton, Washington 98312
                    <br/>
                    gunnmatthewe@gmail.com
                </Typography>
                <Typography sx={{ fontWeight: 'bold', textAlign: 'left', mb: 1}}>
                    Educational Experience
                </Typography>
                <Education education={education}/>
                <Typography sx={{ fontWeight: 'bold', textAlign: 'left', mb: 1}}>
                    Work Experience
                </Typography>
                <WorkExperience workExperience={workExperience}/>
                <Typography sx={{ fontWeight: 'bold', textAlign: 'left', mb: 1}}>
                    Work Experience
                </Typography>
                <Skills skills={skills}/>
                <Typography variant="body1">
                    {aboutMe}
                </Typography>
            </StyledPaper>
        </Box>
    );
};

// aboutMe is required to be a string
AboutMe.propTypes = {
    aboutMe: PropTypes.string,
    education: PropTypes.arrayOf(PropTypes.shape({
        institution: PropTypes.string,
        degree: PropTypes.string,
        duration: PropTypes.string,
    })),
    workExperience: PropTypes.arrayOf(PropTypes.shape({
        company: PropTypes.string,
        role: PropTypes.string,
        duration: PropTypes.string,
    })),
    skills: PropTypes.arrayOf(PropTypes.string),
};

// Set default description because I'm only using my info anyways.
AboutMe.defaultProps = {
    aboutMe: "I am currently a student studying Software Development at Olympic College in Bremerton, WA.  I have experience in Java, JavaScript, and Python.  Feel free to browse my repositories on Github, or view my other projects by clicking the respective button.",
    education: [
        {institution: "Manvel High School", degree: "High School Diploma", duration: '2009-2011'},
        {institution: "Olympic College", degree: "Information Technology: Software Development - Associate in Applied Science - Transfer (AAS-T)", duration: 'May 2023-Present'},
    ],
    workExperience: [
        {company: "ATS Automation", role: "Automation Technician", duration: "May 2020 - May 2023"},
    ],
    skills: ['Java', 'JavaScript', 'Python', 'React', 'SQL', 'HTML/CSS'],
};

export default AboutMe;