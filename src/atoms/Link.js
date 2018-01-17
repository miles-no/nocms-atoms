import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

export default class Link extends Component {
  constructor(props) {
    super(props);
    this.toggleFields = this.toggleFields.bind(this);
    this.state = {
      selected: 'title',
    };
  }
  toggleFields(e) {
    e.preventDefault();
    const href = e.currentTarget.href;
    this.setState({ selected: href.substring(href.indexOf('#') + 1) });
  }

  render() {
    const {
      noPadding,
      className,
      content,
      activeEditMode,
      texts,
      scope,
    } = this.props;

    const linkWrapperClassName = noPadding ? '' : 'button-link__wrapper';
    const linkClassname = className ? `${className}` : 'button-link__link';
    const linkButton = content.title ? <a className={linkClassname} href={content.url}>{content.title}</a> : null;
    const renderEdit = this.context.editMode && activeEditMode;

    return (
      <div className={linkWrapperClassName}>
        { renderEdit ?
          <div className="tabs tabs--small tabs--border">
            <ul className="tabs__header tabs__header--dark">
              <li className="tabs__tab">
                <a href="#title" onClick={this.toggleFields} className={this.state.selected === 'title' ? 'tabs__tab--active' : null}>{texts.titleLabel}</a>
              </li>
              <li className="tabs__tab">
                <a href="#url" onClick={this.toggleFields} className={this.state.selected === 'url' ? 'tabs__tab--active' : null}>{texts.urlLabel}</a>
              </li>
            </ul>
            <div className="tabs__content">
              {this.state.selected === 'title'
                ? <Text text={content.title} placeholder={texts.titlePlaceholder} editMode={this.context.editMode} activeEditMode={activeEditMode} editorType="simple" scope={`${scope}.title`} />
                : <Text text={content.url} placeholder={texts.urlPlaceholder} editMode={this.context.editMode} activeEditMode={activeEditMode} editorType="simple" scope={`${scope}.url`} />}
            </div>
          </div>
          : linkButton }
      </div>
    );
  }
}

Link.contextTypes = {
  editMode: PropTypes.bool,
};

Link.propTypes = {
  activeEditMode: PropTypes.bool,
  content: PropTypes.object,
  texts: PropTypes.object,
  scope: PropTypes.string.isRequired,
  className: PropTypes.string,
  noPadding: PropTypes.bool,
};

Link.defaultProps = {
  content: {},
  noPadding: false,
  texts: {
    titleLabel: 'Navn',
    urlLabel: 'URL',
    titlePlaceholder: 'Skriv tittel',
    urlPlaceholder: 'Legg til URL',
  },
};
