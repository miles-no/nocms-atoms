'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  centerText: _propTypes2.default.bool,
  inline: _propTypes2.default.bool,
  isParagraph: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  text: _propTypes2.default.string,
  editorType: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  scope: _propTypes2.default.string,
  activeEditMode: _propTypes2.default.bool,
  editMode: _propTypes2.default.bool
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