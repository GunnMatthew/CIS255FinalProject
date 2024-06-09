import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PropTypes from 'prop-types';

// Creating the button grouping and implementing their stylings
export default function BasicButtonGroup(props) {
    const navigate = useNavigate();  // hook used to create methods for click handles to control navigation.

    const handleAboutMeClick = () => {
        navigate('/AboutMe')
    };
    const handleGithubClick = () => {
        window.open("https://github.com/GunnMatthew", "_blank");
    };
    const handleProjectsClick = () => {
        navigate('/Projects')
    }
    const handleContactClick = () => {
        navigate('/ContactMe')
    }

    BasicButtonGroup.propTypes = {
      buttonOne: PropTypes.string.isRequired,
      buttonTwo: PropTypes.string.isRequired,
      buttonThree: PropTypes.string.isRequired,
      buttonFour: PropTypes.string.isRequired,
    };

  return (
    <ButtonGroup variant="contained">
      <Button sx={{backgroundColor: "darkgray", color: "black"}} onClick={handleAboutMeClick}>{props.buttonOne}</Button>
      <Button sx={{backgroundColor: "darkgray", color: "black"}} onClick={handleGithubClick}>{props.buttonTwo}</Button>
      <Button sx={{backgroundColor: "darkgray", color: "black"}} onClick={handleProjectsClick}>{props.buttonThree}</Button>
      <Button sx={{backgroundColor: "darkgray", color: "black"}} onClick={handleContactClick}>{props.buttonFour}</Button>
    </ButtonGroup>
  );
}