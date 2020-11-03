import PropTypes from 'prop-types';

export const filmShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string,
  poster: PropTypes.string,
  video: PropTypes.string,
  previewVideo: PropTypes.string,
});
