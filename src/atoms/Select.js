import React from 'react';
import PropTypes from 'prop-types';
import { triggerGlobal } from 'nocms-events';

const defaultOnChange = (scope, value) => {
  triggerGlobal('nocms.value-changed', scope, value);
};

const Select = (props) => {
  const {
    activeEditMode,
    scope,
    children,
    value,
    onChange = (e) => { defaultOnChange(scope, e.target.value); },
    ...otherProps
  } = props;

  if (activeEditMode) {
    return (
      <select onChange={onChange} value={value} {...otherProps}>
        {children}
      </select>
    );
  }

  const selectedOption = children
    .filter((child) => { return child.props.value === value; })
    .map((child) => { return child.props['data-label']; });

  return (
    <span>{selectedOption.length > 0 ? selectedOption.join(', ') : ''}</span>
  );
};

Select.propTypes = {
  scope: PropTypes.string,
  value: PropTypes.string,
  activeEditMode: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.array,
};

export default Select;
