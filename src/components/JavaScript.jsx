import { Box } from '@mui/material';
import ProjectCard from './ProjectCard';

// Define projects made in JS.
const projects = [
  {
  },
  {
  },
  {
  },
];

const JSPage = () => (
  <Box style={{ textAlign: 'center' }}>
    <h1>JavaScript</h1>
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
  
  export default JSPage;