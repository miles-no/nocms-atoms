'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nocmsEditor = require('nocms-editor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encodeSimple = function encodeSimple(str) {
  return str.replace(/\r\n?/g, '\n').replace(/(^((?!\n)\s)+|((?!\n)\s)+$)/gm, '').replace(/(?!\n)\s+/g, ' ').replace(/^\n+|\n+$/g, '').replace(/\n/g, '<br />');
}; /* eslint react/no-danger: off */


var encodeToHTML = function encodeToHTML(str) {
  return str.replace(/\r\n?/g, '\n').replace(/(^((?!\n)\s)+|((?!\n)\s)+$)/gm, '').replace(/(?!\n)\s+/g, ' ').replace(/^\n+|\n+$/g, '').replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br />').replace(/^(.+?)$/, '<p>$1</p>');
};

var TextArea = function TextArea(props) {
  var centerText = props.centerText,
      className = props.className,
      text = props.text,
      placeholder = props.placeholder,
      scope = props.scope,
      activeEditMode = props.activeEditMode,
      paragraph = props.paragraph,
      editMode = props.editMode,
      autoresize = props.autoresize;


  var output = paragraph ? encodeToHTML(text) : encodeSimple(text);
  var renderText = _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: output } });
  var content = void 0;
  if (editMode && activeEditMode) {
    content = _react2.default.createElement(_nocmsEditor.SimpleMultiline, { text: text, placeholder: placeholder, autoresize: autoresize, scope: scope, center: centerText });
  } else if (editMode && output === '') {
    content = placeholder;
  } else {
    content = renderText;
  }
  return _react2.default.createElement(
    'div',
    { className: className },
    content
  );
};

TextArea.propTypes = {
  centerText: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  text: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  scope: _propTypes2.default.string,
  activeEditMode: _propTypes2.default.bool,
  paragraph: _propTypes2.default.bool,
  editMode: _propTypes2.default.bool,
  autoresize: _propTypes2.default.bool
};

TextArea.defaultProps = {
  centerText: false,
  text: '',
  placeholder: 'Skriv tekst',
  activeEditMode: false,
  paragraph: true,
  editMode: false,
  autoresize: true
};

module.exports = TextArea;
//# sourceMappingURL=TextArea.js.map