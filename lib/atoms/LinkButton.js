'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NameUrlTab = require('../nocms/atoms/NameUrlTab.js');

var _NameUrlTab2 = _interopRequireDefault(_NameUrlTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkButton = function (_Component) {
  _inherits(LinkButton, _Component);

  function LinkButton() {
    _classCallCheck(this, LinkButton);

    return _possibleConstructorReturn(this, (LinkButton.__proto__ || Object.getPrototypeOf(LinkButton)).apply(this, arguments));
  }

  _createClass(LinkButton, [{
    key: 'render',
    value: function render() {
      var linkButton = this.props.content.title ? _react2.default.createElement(
        'a',
        { className: 'button-link__link', href: this.props.content.url },
        this.props.content.title
      ) : null;
      var renderedResult = this.context.editMode && this.props.activeEditMode ? _react2.default.createElement(
        'div',
        { className: 'button-link__wrapper' },
        _react2.default.createElement(_NameUrlTab2.default, { activeEditMode: this.props.activeEditMode, content: this.props.content, scope: this.props.scope })
      ) : _react2.default.createElement(
        'div',
        { className: 'button-link__wrapper' },
        linkButton
      );
      return renderedResult;
    }
  }]);

  return LinkButton;
}(_react.Component);

exports.default = LinkButton;


LinkButton.contextTypes = {
  editMode: _react.PropTypes.bool
};

LinkButton.propTypes = {
  activeEditMode: _react.PropTypes.bool,
  content: _react.PropTypes.object,
  scope: _react.PropTypes.string
};

LinkButton.defaultProps = {
  content: {}
};
module.exports = exports['default'];
//# sourceMappingURL=LinkButton.js.map