import React, { PropTypes } from 'react';

// TODO: Språkstøtte, maybe baby
const srMapping = {
  edit: 'Rediger',
  close: 'Lukk',
};

const Icon = (props) => {
  const {
    type,
    size,
    className: customClassName,
  } = props;
  let className = `material-icons ${customClassName}`;
  if (size === 'small') {
    className += ' md-18';
  } else if (size === 'large') {
    className += ' md-36';
  } else if (size === 'xlarge') {
    className += ' md-48';
  }
  return (
    <span>
      <i className={className}>{type}</i>
      <span className="sr-only">{srMapping[type] || type}</span>
    </span>
  );
};

Icon.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  size: 'medium',
  className: '',
};

module.exports = Icon;
