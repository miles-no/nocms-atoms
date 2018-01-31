import React from 'react';
import PropTypes from 'prop-types';

const iconMapping = {
  'save-changes': 'update',
};

const Icon = (props) => {
  const {
    size,
    className: customClassName,
    srText,
  } = props;
  const type = iconMapping[props.type] || props.type;

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
      <span className="sr-only">{srText || type}</span>
    </span>
  );
};

Icon.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  srText: PropTypes.string,
};

Icon.defaultProps = {
  size: 'medium',
  className: '',
};

module.exports = Icon;
