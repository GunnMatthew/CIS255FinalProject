import PropTypes from 'prop-types'

const AboutMe = ({aboutMe}) => {
    return (
        <div>
            <hr/>
            <h1>About Me</h1>
            <p>{aboutMe}</p>
        </div>
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