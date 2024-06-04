import PropTypes from 'prop-types'

const RenderName = ({name}) => {
    return <h1>{name}</h1>
};

// Name is required to be a string
RenderName.propTypes = {
    name: PropTypes.string,
};

// Set default name because I'm only using my name anyways.
RenderName.defaultProps = {
    name: "Matthew Gunn",
};

export default RenderName;