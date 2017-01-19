'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prismjs = require('prismjs');

var _prismjs2 = _interopRequireDefault(_prismjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Code = function Code(props) {
  var code = props.code,
      placeholder = props.placeholder,
      language = props.language;


  var prismLang = _prismjs2.default.languages[language] || _prismjs2.default.languages.javascript;
  var html = _prismjs2.default.highlight(code, prismLang);

  return _react2.default.createElement(
    'pre',
    null,
    code ? _react2.default.createElement('code', { className: 'language-' + language, dangerouslySetInnerHTML: { __html: html } }) : placeholder
  );
};

Code.propTypes = {
  code: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  language: _react.PropTypes.string
};

Code.defaultProps = {
  language: 'javascript'
};

exports.default = Code;
module.exports = exports['default'];
//# sourceMappingURL=Code.js.map