/* eslint react/no-danger: off */
import React from 'react';
import PropTypes from 'prop-types';
import { SimpleMultiline } from 'nocms-editor';

const encodeSimple = (str) => {
  return str
    .replace(/\r\n?/g, '\n')
    .replace(/(^((?!\n)\s)+|((?!\n)\s)+$)/gm, '')
    .replace(/(?!\n)\s+/g, ' ')
    .replace(/^\n+|\n+$/g, '')
    .replace(/\n/g, '<br />');
};

const encodeToHTML = (str) => {
  return str
    .replace(/\r\n?/g, '\n')
    .replace(/(^((?!\n)\s)+|((?!\n)\s)+$)/gm, '')
    .replace(/(?!\n)\s+/g, ' ')
    .replace(/^\n+|\n+$/g, '')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br />')
    .replace(/^(.+?)$/, '<p>$1</p>');
};

const TextArea = (props) => {
  const {
    centerText,
    className,
    text,
    placeholder,
    scope,
    activeEditMode,
    paragraph,
    editMode,
    autoresize,
  } = props;

  const output = paragraph ? encodeToHTML(text) : encodeSimple(text);
  const renderText = <span dangerouslySetInnerHTML={{ __html: output }} />;
  let content;
  if (editMode && activeEditMode) {
    content = <SimpleMultiline text={text} placeholder={placeholder} autoresize={autoresize} scope={scope} center={centerText} />;
  } else if (editMode && output === '') {
    content = placeholder;
  } else {
    content = renderText;
  }
  return <div className={className}>{content}</div>;
};

TextArea.propTypes = {
  centerText: PropTypes.bool,
  className: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  scope: PropTypes.string,
  activeEditMode: PropTypes.bool,
  paragraph: PropTypes.bool,
  editMode: PropTypes.bool,
  autoresize: PropTypes.bool,
};

TextArea.defaultProps = {
  centerText: false,
  text: '',
  placeholder: 'Skriv tekst',
  activeEditMode: false,
  paragraph: true,
  editMode: false,
  autoresize: true,
};

module.exports = TextArea;
