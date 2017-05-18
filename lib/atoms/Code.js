'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _prismjs = require('prismjs');

var _prismjs2 = _interopRequireDefault(_prismjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('prismjs/components/prism-aspnet.js');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-c');
require('prismjs/components/prism-clike');
require('prismjs/components/prism-coffeescript');
require('prismjs/components/prism-cpp');
require('prismjs/components/prism-csharp');
require('prismjs/components/prism-docker');
require('prismjs/components/prism-fsharp');
require('prismjs/components/prism-groovy');
require('prismjs/components/prism-java');
require('prismjs/components/prism-json');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-less');
require('prismjs/components/prism-php');
require('prismjs/components/prism-perl');
require('prismjs/components/prism-powershell');
require('prismjs/components/prism-scala');
require('prismjs/components/prism-sass');
require('prismjs/components/prism-scss');
require('prismjs/components/prism-sql');
require('prismjs/components/prism-swift');
require('prismjs/components/prism-typescript');
require('prismjs/components/prism-yaml');

var Code = function Code(props) {
  var code = props.code,
      placeholder = props.placeholder,
      language = props.language;


  var prismLang = _prismjs2.default.languages[language] || _prismjs2.default.languages.javascript;
  var html = _prismjs2.default.highlight(code, prismLang);

  return _react2.default.createElement(
    'pre',
    { className: 'language-' + language },
    code ? _react2.default.createElement('code', { className: 'language-' + language, 'data-manual': true, dangerouslySetInnerHTML: { __html: html } }) : placeholder
  );
};

Code.propTypes = {
  code: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  language: _propTypes2.default.string
};

Code.defaultProps = {
  language: 'javascript'
};

exports.default = Code;
module.exports = exports['default'];
//# sourceMappingURL=Code.js.map