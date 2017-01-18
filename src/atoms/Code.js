import React, { PropTypes } from 'react';
import Prism from 'prismjs';
import TextArea from './TextArea';

const Code = (props) => {
  const {
    code,
    activeEditMode,
    scope,
    placeholder,
  } = props;

  if (activeEditMode) {
    return (
      <TextArea editMode activeEditMode text={code} scope={scope} placeholder={placeholder} />
    );
  }

  const html = Prism.highlight(code, Prism.languages.javascript);

  return (
    <pre>
      { code ?
        <code dangerouslySetInnerHTML={{__html: Prism.highlight(code, Prism.languages.javascript) }} />
        : placeholder }
    </pre>
  );
};

Code.propTypes = {
  code: PropTypes.string,
  activeEditMode: PropTypes.bool,
  editMode: PropTypes.bool,
  scope: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Code;
