import PropTypes from 'prop-types';
import { Card, CardContent, Box, CardMedia, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/system';
import ProjectDefaultImage from '../assets/images/ProjectDefault.png';


// Styling for the card as a whole.
const StyledCard = styled(Card)({
    backgroundColor: '#333',
    border: '2px solid black',
    borderRadius: 10,
    width: '100%',
    maxWidth: 300,
    margin: '0 auto',
    textAlign: 'center',
    boxShadow: '2px 4px 4px black',
});

// Styling for the bottom text.
const StyledLink = styled(Typography)({
    color: '#1a73e8',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
    textDecoration: 'underline',
    },
})

const ProjectCard = ({ title, imageSrc, githubLink }) => {

    return (
        <StyledCard>
            <CardContent>
                <Typography sx={{ mb: 1, fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageSrc}
                    alt={`${title} image`}
                    sx={{ objectFit: 'contain', margin: 'auto', display: 'block' }}
                />
                <Box sx={{ mt: 2}}>
                    <StyledLink
                        component="a"
                        href={githubLink}
                        target="_blank"
                        >
                            <ArrowForwardIcon/>View on Github!
                        </StyledLink>
                </Box>
            </CardContent>
        </StyledCard>
    );
};

// Prop validation
ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  };

// Sets defaults usable for project cards.
ProjectCard.defaultProps = {
    title: "Check back later for more!",
    imageSrc: ProjectDefaultImage,
    githubLink: "https://github.com/GunnMatthew"
};

export default ProjectCard;