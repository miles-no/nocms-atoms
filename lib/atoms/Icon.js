'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Språkstøtte, maybe baby
var srMapping = {
  edit: 'Rediger',
  close: 'Lukk'
};

var iconMapping = {
  'save-changes': 'update'
};

var Icon = function Icon(props) {
  var size = props.size,
      customClassName = props.className;

  var type = iconMapping[props.type] || props.type;

  var className = 'material-icons ' + customClassName;
  if (size === 'small') {
    className += ' md-18';
  } else if (size === 'large') {
    className += ' md-36';
  } else if (size === 'xlarge') {
    className += ' md-48';
  }
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'i',
      { className: className },
      type
    ),
    _react2.default.createElement(
      'span',
      { className: 'sr-only' },
      srMapping[type] || type
    )
  );
};

Icon.propTypes = {
  type: _react.PropTypes.string,
  size: _react.PropTypes.string,
  className: _react.PropTypes.string
};

Icon.defaultProps = {
  size: 'medium',
  className: ''
};

module.exports = Icon;
//# sourceMappingURL=Icon.js.map