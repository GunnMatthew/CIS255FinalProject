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
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <StyledPaper>
                <Typography sx={{ fontWeight: 'bold', fontSize: 16 }}>
                    Matthew E. Gunn
                </Typography>
                <Typography component="div" sx={{ fontWeight: 'bold', fontSize: 14, mb: 4 }}>
                    Bremerton, Washington 98312
                    <br/>
                    gunnmatthewe@gmail.com
                </Typography>
                <Typography sx={{ fontWeight: 'bold', textAlign: 'left', mb: 1}}>
                    Educational Experience
                </Typography>
                <Education education={education}/>
                <br/>
                <Typography sx={{ fontWeight: 'bold', textAlign: 'left', mb: 1 }}>
                    Work Experience
                </Typography>
                <WorkExperience workExperience={workExperience}/>
                <br/>
                <Typography sx={{ fontWeight: 'bold', textAlign: 'left', mb: 1}}>
                    Skills
                </Typography>
                <Skills skills={skills}/>
                <br/>
                <hr/>
                <br/>
                <br/>
                <Typography sx={{ fontSize: 12, textAlign: 'left', textIndent: '20px' }}>
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
    aboutMe: "I am currently a student studying Software Development at Olympic College in Bremerton, WA.  As of now, I have experience in several different languages and strive to better msyelf and continue to learn more.  My current intended graduation date is in the Winter quarter of 2024 after which I intend to transfer to Western Washington University to complete my Bachelor's Degree in Computer Systems.  If you have interest in viewing my projects, feel free to browse my Github repositories, or send me an email!",
    education: [
        {institution: "Manvel High School", degree: "High School Diploma", duration: '2009-2011'},
        {institution: "Olympic College", degree: "Information Technology: Software Development - Associate in Applied Science - Transfer (AAS-T)", duration: 'May 2023-Present'},
    ],
    workExperience: [
        {company: "ATS Automation", role: "Automation Technician", duration: "May 2020 - May 2023", description: "Programming, installation, and troubleshooting of PLCs.  Performed project design and project management for various projects including but not limited to St. Michael's OR upgrades, Seattle VA Hospital expansion, and Richard Gordon Elementary School upgrades."},
        {company: "US Navy", role: "Electrician's Mate (Nuclear)", duration: "May 2014 - May 2020", description: "Performed maintenance and troubleshooting on various electrical components onboard a nuclear submarine."}
    ],
    skills: ['Java', 'JavaScript', 'Python', 'React', 'SQL', 'HTML/CSS'],
};

export default AboutMe;