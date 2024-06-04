import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

// Creates the ImageAvatars funcitonal component with alt and src and a set size.
const ImageAvatars = ({alt, src}) => {
    return (
        <Stack alignItems="center">
            <Avatar 
                alt={alt}
                src={src}
                sx={{ width: 150, height: 150}} />
        </Stack>
    )
}

// requires alt and src to be strings.
ImageAvatars.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
};

// Set default as my information, becuase that's all I need for this anyways.
ImageAvatars.defaultProps = {
    alt: "Matthew Gunn",
    src: "https://avatars.githubusercontent.com/u/147090365?v=4",
};

export default ImageAvatars;