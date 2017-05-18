import React from 'react';
import PropTypes from 'prop-types';
import { Simple, LinkEditor } from 'nocms-editor';

const getEditorType = (editorType, text, placeholder, scope, selfSaving) => {
  switch (editorType) {
    case 'simple':
      return <Simple text={text} placeholder={placeholder} scope={scope} />;
    case 'simpleWithLink':
      return <LinkEditor text={text} placeholder={placeholder} selfSaving={selfSaving} scope={scope} />;
    default:
      return <Simple text={text} placeholder={placeholder} scope={scope} />;
  }
};

const Text = (props) => {
  const { inline, isParagraph, className, text, editorType, placeholder, scope, activeEditMode, editMode, selfSaving } = props;
  const output = text;
  const renderText = isParagraph
  ? <p dangerouslySetInnerHTML={{ __html: output }} />
  : <span dangerouslySetInnerHTML={{ __html: output }} />;
  let content;
  if (editMode && activeEditMode) {
    console.log('editMode and activeEditMode for text true');
    content = getEditorType(editorType, text, placeholder, scope, selfSaving);
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
  selfSaving: PropTypes.bool,
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
  selfSaving: true,
};

export default Text;
