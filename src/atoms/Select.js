import React, { PropTypes } from 'react';
import events from 'nocms-events';

const defaultOnChange = (scope, value) => {
  events.trigger('nocms.value-changed', scope, value);
};

const Select = (props) => {
  const {
    activeEditMode,
    scope,
    children,
    value,
    onChange = e => defaultOnChange(scope, e.target.value),
    ...otherProps
  } = props;

  if (activeEditMode) {
    return (
      <select onChange={onChange} value={value} {...otherProps}>
        {children}
      </select>
    );
  }

  const selectedOption = children.filter(child => child.props.value === value).map(child => child.props['data-label']);

  return (
    <span>{selectedOption.length > 0 ? selectedOption.join(', ') : ''}</span>
  );
};

Select.propTypes = {
  scope: PropTypes.string,
  value: PropTypes.string,
  activeEditMode: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.array,
  ]),
};

export default Select;
