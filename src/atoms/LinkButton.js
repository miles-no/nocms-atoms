import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NameUrlTab from '../NameUrlTab';

export default class LinkButton extends Component {
  render() {
    const linkWrapperClassName = this.props.noPadding ? '' : 'button-link__wrapper';
    const linkClassname = this.props.className ? `${this.props.className}` : 'button-link__link';
    const linkButton = this.props.content.title ? (
      <div className={linkWrapperClassName}>
        <a className={linkClassname} href={this.props.content.url}>{this.props.content.title}</a>
      </div>) : null;
    const renderedResult = this.context.editMode && this.props.activeEditMode
      ? <div className={linkWrapperClassName}><NameUrlTab activeEditMode={this.props.activeEditMode} content={this.props.content} scope={this.props.scope} /></div>
      : linkButton;
    return renderedResult;
  }
}

LinkButton.contextTypes = {
  editMode: PropTypes.bool,
};

LinkButton.propTypes = {
  activeEditMode: PropTypes.bool,
  content: PropTypes.object,
  scope: PropTypes.string,
  className: PropTypes.string,
  noPadding: PropTypes.bool,
};

LinkButton.defaultProps = {
  content: {},
  noPadding: false,
};
