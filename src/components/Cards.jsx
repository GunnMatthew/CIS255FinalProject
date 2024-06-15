import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import { useEffect } from 'react';

const ProjectCard = ({ language, projects }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Projects/${language.toLowerCase()}`);
  }

  // JQuery for card color change on hover.  Replace later, JQuery + React *can* cause issues!
  useEffect(() => {
    $('.projectCard').hover( 
      function() {
        $(this).css({
          backgroundColor: 'lightgray',
        });
    },
      function() {
        $(this).css({
          backgroundColor: 'darkgray',
        });
      });
  }, []);

  return (
    <Box sx={{ maxWidth: 200, minWidth: 175, margin: 1}} onClick={handleClick}>
      <Card className='projectCard' variant="outlined" sx={{ backgroundColor: 'darkgray', border: 'solid', borderColor: 'white'}}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }}>
            {language}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ul style= {{ listStyleType: 'disc', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: 13}}>
              {projects.map((project, index) => (
                <li key={index} style={{ textAlign: 'center' }}>{project}</li>
              ))}
            </ul>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

// Prop validation
ProjectCard.propTypes = {
  language: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Declare languages and their respective projects.
const Projects = () => {
  const projectData = {
    Java: ['Text-Based Game', 'Discord Bot (Javacord)', 'Coming Soon!'],
    Python: ['Coming Soon!', 'Coming Soon!', 'Coming Soon!'],
    JavaScript: ['Coming Soon!', 'Coming Soon!', 'Coming Soon!'],
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {Object.keys(projectData).map((language) => (
        <ProjectCard key={language} language={language} projects={projectData[language]} />
      ))}
    </div>
  );
};

export default Projects;