import React, { Component, PropTypes } from 'react';
import { Simple, LinkEditor } from 'nocms-editor';

class Text extends Component {
  getEditorType(editorType, text, placeholder, scope) {
    switch (editorType) {
      case 'simple':
        return <Simple text={text} placeholder={placeholder} scope={scope} />;
      case 'simpleWithLink':
        return <LinkEditor text={text} placeholder={placeholder} scope={scope} />;
      default:
        return <Simple text={text} placeholder={placeholder} scope={scope} />;
    }
  }

  render() {
    const {
      inline,
      isParagraph,
      className,
      text,
      editorType,
      placeholder,
      scope,
      activeEditMode,
      editMode,
      isPublisher,
    } = this.props;

    const output = text;
    const renderText = isParagraph ? <p dangerouslySetInnerHTML={{ __html: output }}></p> : <span dangerouslySetInnerHTML={{ __html: output }}></span>;
    let content;
    if (editMode && activeEditMode) {
      content = this.getEditorType(editorType, text, placeholder, scope);
    } else if (isPublisher && output === '' && !editMode || isPublisher && output === '' && !activeEditMode) {
      content = placeholder;
    } else {
      content = renderText;
    }
    const renderedResult = (inline ?
      <span className={`${className} text-content-inline`}>{content}</span>
      : <div className={className}>{content}</div>);
    return renderedResult;
  }
}

Text.propTypes = {
  centerText: PropTypes.bool,
  type: PropTypes.string,
  inline: PropTypes.bool,
  isParagraph: PropTypes.bool,
  className: PropTypes.string,
  text: PropTypes.string,
  editorType: PropTypes.string,
  placeholder: PropTypes.string,
  scope: PropTypes.string,
  activeEditMode: PropTypes.bool,
  editMode: PropTypes.bool,
  isPublisher: PropTypes.bool,
};

Text.defaultProps = {
  centerText: false,
  inline: false,
  isParagraph: false,
  text: '',
  placeholder: 'Skriv tekst',
  editorType: 'simple',
  activeEditMode: false,
  editMode: true,
  isPublisher: true,
};

export default Text;
