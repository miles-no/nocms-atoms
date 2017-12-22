/* eslint react/no-danger: off */
import React from 'react';
import PropTypes from 'prop-types';
import { Simple, LinkEditor, PlainTextEditor } from 'nocms-editor';

const getEditorType = (editorType, text, placeholder, scope) => {
  switch (editorType) {
    case 'simple':
      return <Simple text={text} placeholder={placeholder} scope={scope} />;
    case 'simpleWithLink':
      return <LinkEditor text={text} placeholder={placeholder} scope={scope} />;
    case 'multiline':
      return <PlainTextEditor text={text} placeholder={placeholder} scope={scope} />;
    default:
      return <Simple text={text} placeholder={placeholder} scope={scope} />;
  }
};

const Text = (props) => {
  const { inline, isParagraph, className, text, editorType, placeholder, scope, activeEditMode, editMode } = props;
  const output = text;
  const renderText = isParagraph
    ? <p dangerouslySetInnerHTML={{ __html: output }} />
    : <span dangerouslySetInnerHTML={{ __html: output }} />;
  let content;
  if (editMode && activeEditMode) {
    content = getEditorType(editorType, text, placeholder, scope);
  } else if (editMode && output === '') {
    content = placeholder;
  } else {
    content = renderText;
  }
  const renderedResult = (inline ?
    <span className={`${className} text-content-inline`}>{content}</span>
    : <div className={className}>{content}</div>);
  return renderedResult;
};


Text.propTypes = {
  centerText: PropTypes.bool,
  inline: PropTypes.bool,
  isParagraph: PropTypes.bool,
  className: PropTypes.string,
  text: PropTypes.string,
  editorType: PropTypes.string,
  placeholder: PropTypes.string,
  scope: PropTypes.string,
  activeEditMode: PropTypes.bool,
  editMode: PropTypes.bool,
};

Text.defaultProps = {
  centerText: false,
  inline: false,
  isParagraph: false,
  text: '',
  placeholder: 'Skriv tekst',
  editorType: 'simple',
  activeEditMode: false,
  editMode: false,
};

export default Text;
