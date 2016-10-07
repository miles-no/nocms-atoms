import React, { Component, PropTypes } from 'react';
import { SimpleMultiline } from 'nocms-editor';

class TextArea extends Component {
  encodeSimple(str) {
    return str
      .replace(/\r\n?/g, '\n')
      .replace(/(^((?!\n)\s)+|((?!\n)\s)+$)/gm, '')
      .replace(/(?!\n)\s+/g, ' ')
      .replace(/^\n+|\n+$/g, '')
      .replace(/\n/g, '<br />');
  }

  encodeToHTML(str) {
    return str
      .replace(/\r\n?/g, '\n')
      .replace(/(^((?!\n)\s)+|((?!\n)\s)+$)/gm, '')
      .replace(/(?!\n)\s+/g, ' ')
      .replace(/^\n+|\n+$/g, '')
      .replace(/\n{2,}/g, '</p><p>')
      .replace(/\n/g, '<br />')
      .replace(/^(.+?)$/, '<p>$1</p>');
  }

  render() {
    const {
      centerText,
      className,
      text,
      placeholder,
      scope,
      activeEditMode,
      paragraph,
      editMode,
      isPublisher,
    } = this.props;

    const output = paragraph ? this.encodeToHTML(text) : this.encodeSimple(text);
    const renderText = <span dangerouslySetInnerHTML={{ __html: output }}></span>;
    let content;
    if (editMode && activeEditMode) {
      content = <SimpleMultiline text={text} placeholder={placeholder} scope={scope} center={centerText} />;
    } else if (isPublisher && output === '' && !editMode || isPublisher && output === '' && !activeEditMode) {
      content = placeholder;
    } else {
      content = renderText;
    }
    return <div className={className}>{content}</div>;
  }
}

TextArea.propTypes = {
  centerText: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  scope: PropTypes.string,
  activeEditMode: PropTypes.bool,
  paragraph: PropTypes.bool,
  editMode: PropTypes.bool,
  isPublisher: PropTypes.bool,
};

TextArea.defaultProps = {
  centerText: false,
  text: '',
  placeholder: 'Skriv tekst',
  activeEditMode: false,
  paragraph: true,
  editMode: true,
  isPublisher: true,
};

module.exports = TextArea;
