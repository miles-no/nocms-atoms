'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dictionary = require('../dictionary');

var Internationalization = function Internationalization(props, context) {
  return _react2.default.createElement(
    'span',
    null,
    dictionary(props.children, context.lang)
  );
};

Internationalization.contextTypes = {
  lang: _react2.default.PropTypes.string
};

Internationalization.propTypes = {
  children: _react2.default.PropTypes.node
};

Internationalization.dictionary = dictionary;

module.exports = Internationalization;
//# sourceMappingURL=Internationalization.js.map