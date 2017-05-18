'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nocmsEvents = require('nocms-events');

var _nocmsEvents2 = _interopRequireDefault(_nocmsEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getOptionElement = function getOptionElement(o, idx) {
  var label = o.label,
      value = o.value;

  if (typeof o === 'string') {
    label = o;value = o;
  }
  return _react2.default.createElement(
    'option',
    { key: idx, value: value },
    label
  );
};

var PageInput = function (_Component) {
  _inherits(PageInput, _Component);

  function PageInput(props) {
    _classCallCheck(this, PageInput);

    var _this = _possibleConstructorReturn(this, (PageInput.__proto__ || Object.getPrototypeOf(PageInput)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(PageInput, [{
    key: 'handleChange',
    value: function handleChange(event) {
      _nocmsEvents2.default.trigger('nocms.value-changed', this.props.scope, event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'label',
        null,
        this.props.label,
        this.props.type === 'select' ? _react2.default.createElement(
          'select',
          { className: 'nocms-select-input', value: this.props.value, onChange: this.handleChange },
          this.props.options.map(getOptionElement)
        ) : _react2.default.createElement('input', { className: 'nocms-text-input', type: this.props.type, value: this.props.value, onChange: this.handleChange })
      );
    }
  }]);

  return PageInput;
}(_react.Component);

exports.default = PageInput;


PageInput.propTypes = {
  scope: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  label: _propTypes2.default.string,
  options: _propTypes2.default.array,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

PageInput.defaultProps = {
  type: 'text',
  options: []
};
module.exports = exports['default'];
//# sourceMappingURL=PageInput.js.map