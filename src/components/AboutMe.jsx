import PropTypes from 'prop-types'
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
    width: '8.5in',
    height: '11in',
    padding: '24px', // Fallback value
    margin: 'auto',
    marginTop: '32px', // Fallback value
    backgroundColor: 'white',
    boxShadow: '2px 4px 4px black',
    overflow: 'hidden',
}))

const AboutMe = ({aboutMe}) => {
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
                <Typography sx={{ fontWeight: 'bold', textAlign: 'left'}}>
                    Educational Experience
                </Typography>
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
};

// Set default description because I'm only using my info anyways.
AboutMe.defaultProps = {
    aboutMe: "I am currently a student studying Software Development at Olympic College in Bremerton, WA.  I have experience in Java, JavaScript, and Python.  Feel free to browse my repositories on Github, or view my other projects by clicking the respective button.",
};

export default AboutMe;