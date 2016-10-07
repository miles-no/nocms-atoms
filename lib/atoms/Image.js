'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cloudinary = require('../utils/cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function Image(props, context) {
  var publicId = props.publicId;
  var options = props.options;
  var className = props.className;
  var alt = props.alt;


  var url = _cloudinary2.default.url(publicId, context.config.cloudinaryCloudName, options);
  return _react2.default.createElement('img', { className: className, src: url, alt: alt });
};

Image.propTypes = {
  publicId: _react.PropTypes.string,
  options: _react.PropTypes.object,
  alt: _react.PropTypes.string,
  className: _react.PropTypes.string
};

Image.defaultProps = {
  publicId: 'backgrounds/darkness_nocms',
  options: null,
  alt: '',
  className: ''
};

Image.contextTypes = {
  config: _react2.default.PropTypes.object
};

module.exports = Image;
//# sourceMappingURL=Image.js.map