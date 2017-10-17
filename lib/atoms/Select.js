'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nocmsEvents = require('nocms-events');

var _nocmsEvents2 = _interopRequireDefault(_nocmsEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultOnChange = function defaultOnChange(scope, value) {
  _nocmsEvents2.default.trigger('nocms.value-changed', scope, value);
};

var Select = function Select(props) {
  var activeEditMode = props.activeEditMode,
      scope = props.scope,
      children = props.children,
      value = props.value,
      _props$onChange = props.onChange,
      onChange = _props$onChange === undefined ? function (e) {
    defaultOnChange(scope, e.target.value);
  } : _props$onChange,
      otherProps = _objectWithoutProperties(props, ['activeEditMode', 'scope', 'children', 'value', 'onChange']);

  if (activeEditMode) {
    return _react2.default.createElement(
      'select',
      _extends({ onChange: onChange, value: value }, otherProps),
      children
    );
  }

  var selectedOption = children.filter(function (child) {
    return child.props.value === value;
  }).map(function (child) {
    return child.props['data-label'];
  });

  return _react2.default.createElement(
    'span',
    null,
    selectedOption.length > 0 ? selectedOption.join(', ') : ''
  );
};

Select.propTypes = {
  scope: _propTypes2.default.string,
  value: _propTypes2.default.string,
  activeEditMode: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  children: _propTypes2.default.array
};

exports.default = Select;
module.exports = exports['default'];
//# sourceMappingURL=Select.js.map