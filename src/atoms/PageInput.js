import React, { Component } from 'react';
import events from 'nocms-events';

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
    events.trigger('nocms.value-changed', this.props.scope, event.target.value);
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
  scope: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  label: React.PropTypes.string,
  options: React.PropTypes.array,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
};

PageInput.defaultProps = {
  type: 'text',
  options: [],
};
