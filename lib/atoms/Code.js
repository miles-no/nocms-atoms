'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prismjs = require('prismjs');

var _prismjs2 = _interopRequireDefault(_prismjs);

var _TextArea = require('./TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Code = function Code(props) {
  var code = props.code,
      activeEditMode = props.activeEditMode,
      scope = props.scope,
      placeholder = props.placeholder;


  if (activeEditMode) {
    return _react2.default.createElement(_TextArea2.default, { editMode: true, activeEditMode: true, text: code, scope: scope, placeholder: placeholder });
  }

  var html = _prismjs2.default.highlight(code, _prismjs2.default.languages.javascript);

  return _react2.default.createElement(
    'pre',
    null,
    code ? _react2.default.createElement('code', { dangerouslySetInnerHTML: { __html: _prismjs2.default.highlight(code, _prismjs2.default.languages.javascript) } }) : placeholder
  );
};

Code.propTypes = {
  code: _react.PropTypes.string,
  activeEditMode: _react.PropTypes.bool,
  editMode: _react.PropTypes.bool,
  scope: _react.PropTypes.string,
  placeholder: _react.PropTypes.string
};

exports.default = Code;
module.exports = exports['default'];
//# sourceMappingURL=Code.js.map