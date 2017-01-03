'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function Image(props) {
  var src = props.src,
      className = props.className,
      alt = props.alt;


  return _react2.default.createElement('img', { className: className, src: src, alt: alt });
};

Image.propTypes = {
  src: _react.PropTypes.string,
  alt: _react.PropTypes.string,
  className: _react.PropTypes.string
};

Image.defaultProps = {
  alt: '',
  className: ''
};

exports.default = Image;
module.exports = exports['default'];
//# sourceMappingURL=Image.js.map