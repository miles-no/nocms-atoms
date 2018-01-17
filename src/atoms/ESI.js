/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ESI extends Component {
  render() {
    const esi = String.fromCharCode(60) + 'esi:';
    const include = 'include';

    let output;
    if (!this.props.content) {
      if (this.props.content.indexOf(esi) === 0 && global.environment === 'server') {
        output = this.props.content.replace('jsonEncode=true', '');
      } else {
        output = this.props.content;
      }
    } else {
      output = `${esi}${include} src="${this.props.src}" />`;
    }

    return (
      <div dangerouslySetInnerHTML={{ __html: output }} />
    );
  }
}

ESI.propTypes = {
  content: PropTypes.string,
  src: PropTypes.string,
};
