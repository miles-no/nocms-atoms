'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nocmsEditor = require('nocms-editor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getEditorType = function getEditorType(editorType, text, placeholder, scope) {
  switch (editorType) {
    case 'simple':
      return _react2.default.createElement(_nocmsEditor.Simple, { text: text, placeholder: placeholder, scope: scope });
    case 'simpleWithLink':
      return _react2.default.createElement(_nocmsEditor.LinkEditor, { text: text, placeholder: placeholder, scope: scope });
    default:
      return _react2.default.createElement(_nocmsEditor.Simple, { text: text, placeholder: placeholder, scope: scope });
  }
};

var Text = function Text(props) {
  var inline = props.inline,
      isParagraph = props.isParagraph,
      className = props.className,
      text = props.text,
      editorType = props.editorType,
      placeholder = props.placeholder,
      scope = props.scope,
      activeEditMode = props.activeEditMode,
      editMode = props.editMode;

  var output = text;
  var renderText = isParagraph ? _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: output } }) : _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: output } });
  var content = void 0;
  if (editMode && activeEditMode) {
    content = getEditorType(editorType, text, placeholder, scope);
  } else if (editMode && output === '') {
    content = placeholder;
  } else {
    content = renderText;
  }
  var renderedResult = inline ? _react2.default.createElement(
    'span',
    { className: className + ' text-content-inline' },
    content
  ) : _react2.default.createElement(
    'div',
    { className: className },
    content
  );
  return renderedResult;
};

Text.propTypes = {
  centerText: _react.PropTypes.bool,
  type: _react.PropTypes.string,
  inline: _react.PropTypes.bool,
  isParagraph: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  text: _react.PropTypes.string,
  editorType: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  scope: _react.PropTypes.string,
  activeEditMode: _react.PropTypes.bool,
  editMode: _react.PropTypes.bool
};

Text.defaultProps = {
  centerText: false,
  inline: false,
  isParagraph: false,
  text: '',
  placeholder: 'Skriv tekst',
  editorType: 'simple',
  activeEditMode: false,
  editMode: false
};

exports.default = Text;
module.exports = exports['default'];
//# sourceMappingURL=Text.js.map