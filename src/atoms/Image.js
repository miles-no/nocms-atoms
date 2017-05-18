import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const {
    src,
    className,
    alt,
  } = props;

  return (
    <img className={className} src={src} alt={alt} />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
  className: '',
};

export default Image;
