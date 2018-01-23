import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ajax from 'nocms-ajax';
import { isBrowser } from 'nocms-utils';

export default class ESI extends Component {
  constructor(props) {
    super();
    this.state = {
      content: null,
    };
    if (isBrowser()) {
      this.loadSrc = this.loadSrc.bind(this);
      this.loadSrc(props.src);
    }
  }
  componentWillReceiveProps(props) {
    if (props.src !== this.props.src) {
      this.loadSrc(props.src);
    }
  }
  loadSrc(src) {
    if (isBrowser()) {
      ajax.get(src, { contentType: 'text/html' }, (err, res) => {
        if (err) {
          return;
        }
        this.setState({ content: res });
      });
    }
  }
  render() {
    const esi = `${String.fromCharCode(60)}esi:`;
    const include = 'include';
    let output = '';
    if (!isBrowser()) {
      output = `${esi}${include} src="${this.props.src}" />`;
    } else {
      output = this.state.content || '';
    }

    return (
      <div dangerouslySetInnerHTML={{ __html: output }} /> // eslint-disable-line
    );
  }
}

ESI.propTypes = {
  src: PropTypes.string,
};
