import { Box } from '@mui/material';
import ProjectCard from './ProjectCard';
import JavaTextGame from '../assets/images/TextBasedGameJava.png';

const projects = [
  {
      title: 'Text-Based Game [WIP]',
      imageSrc: JavaTextGame,
  },
  {
      title: 'Discord Bot (Javacord) [WIP]'
  },
  {
  },
];



const JavaPage = () => (
  <Box style={{ textAlign: 'center' }}>
    <h1>Java</h1>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 2,
        mt: 4,
      }}
    >
      {projects.map((project, index) => (
        <Box
          key={index}
          sx={{
            flex: '1 1',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ProjectCard {...project} />
        </Box>
      ))}
    </Box>
  </Box>
);
  
  export default JavaPage;