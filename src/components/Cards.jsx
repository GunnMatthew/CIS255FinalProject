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

  useEffect(() => {
    $('.projectCard').hover( 
      function() {
        $(this).css({
          backgroundColor: 'lightgray',
          transition: 'width 2s ease, height 2s ease',
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
          <Typography sx={{ fontSize: 14 }}>
            {language}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ul style= {{ listStyleType: 'disc', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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

ProjectCard.propTypes = {
  language: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Projects = () => {
  const projectData = {
    Java: ['Project 1', 'Project 2', 'Project 3'],
    Python: ['Project 1', 'Project 2', 'Project 3'],
    JavaScript: ['Project 1', 'Project 2', 'Project 3'],
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