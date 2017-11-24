import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { triggerGlobal } from 'nocms-events';

const getOptionElement = (o, idx) => {
  let { label, value } = o;
  if (typeof o === 'string') {
    label = o; value = o;
  }
  return <option key={idx} value={value}>{label}</option>;
};

export default class PageInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    triggerGlobal('nocms.value-changed', this.props.scope, event.target.value);
  }

  render() {
    return (
      <label>
        {this.props.label}
        {this.props.type === 'select' ?
          <select className="nocms-select-input" value={this.props.value} onChange={this.handleChange}>
            {this.props.options.map(getOptionElement)}
          </select>
          : <input className="nocms-text-input" type={this.props.type} value={this.props.value} onChange={this.handleChange} />}
      </label>
    );
  }
}

PageInput.propTypes = {
  scope: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PageInput.defaultProps = {
  type: 'text',
  options: [],
};
