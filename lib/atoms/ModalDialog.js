'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAriaModal = require('react-aria-modal');

var _reactAriaModal2 = _interopRequireDefault(_reactAriaModal);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalDialog = function (_Component) {
  _inherits(ModalDialog, _Component);

  function ModalDialog(props) {
    _classCallCheck(this, ModalDialog);

    var _this = _possibleConstructorReturn(this, (ModalDialog.__proto__ || Object.getPrototypeOf(ModalDialog)).call(this, props));

    _this.closeModal = _this.closeModal.bind(_this);
    _this.onModalEnter = _this.onModalEnter.bind(_this);
    _this.state = {
      modalHasEntered: false,
      modalActive: props.modalActive
    };
    return _this;
  }

  _createClass(ModalDialog, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({ modalActive: newProps.modalActive });
    }
  }, {
    key: 'onModalEnter',
    value: function onModalEnter() {
      this.setState({ modalHasEntered: true });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      var _this2 = this;

      if (this.props.animation) {
        this.setState({
          modalHasEntered: false
        }, function () {
          setTimeout(function () {
            _this2.props.onClose();
          }, 300);
        });
      } else {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var showHeader = _props.showHeader;
      var showInstructions = _props.showInstructions;
      var instructionTitle = _props.instructionTitle;
      var instructionContent = _props.instructionContent;
      var titleText = _props.titleText;
      var titleIcon = _props.titleIcon;
      var focusElement = _props.focusElement;
      var cover = _props.cover;
      var children = _props.children;
      var animation = _props.animation;

      var mainContentId = global.environment !== 'server' ? document.getElementById('mainContent') : null;

      var modalClass = cover ? 'modal modal--cover' : 'modal';
      if (animation) {
        modalClass += ' modal--animation';
      }
      if (this.props.animation && this.state.modalHasEntered) {
        modalClass += ' modal--animation-active';
      }
      return _react2.default.createElement(
        _reactAriaModal2.default,
        {
          mounted: this.state.modalActive,
          titleText: titleText,
          applicationNode: mainContentId,
          underlayClass: 'modal__underlay',
          onExit: this.closeModal,
          onEnter: this.onModalEnter
        },
        _react2.default.createElement(
          'div',
          { className: modalClass },
          showHeader ? _react2.default.createElement(
            'header',
            { id: 'dialogHeader', className: 'modal__header' },
            _react2.default.createElement(
              'h2',
              { className: 'modal__title' },
              _react2.default.createElement(_Icon2.default, { type: titleIcon }),
              titleText
            ),
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'button button__icon button__icon-only ', 'aria-label': 'Close', onClick: this.closeModal },
              _react2.default.createElement(_Icon2.default, { type: 'close' })
            )
          ) : null,
          showInstructions ? _react2.default.createElement(
            'div',
            { className: 'modal__instructions' },
            _react2.default.createElement(
              'h3',
              { className: 'modal__instruction-title' },
              instructionTitle
            ),
            _react2.default.createElement(
              'p',
              { className: 'modal__instruction-content' },
              instructionContent
            )
          ) : null,
          _react2.default.createElement(
            'div',
            { className: 'modal__body' },
            children
          )
        )
      );
    }
  }]);

  return ModalDialog;
}(_react.Component);

exports.default = ModalDialog;


ModalDialog.propTypes = {
  showHeader: _react.PropTypes.bool,
  dialogClass: _react.PropTypes.string,
  focusElement: _react.PropTypes.string,
  titleText: _react.PropTypes.string,
  cover: _react.PropTypes.bool,
  children: _react.PropTypes.object,
  showInstructions: _react.PropTypes.bool,
  instructionTitle: _react.PropTypes.string,
  instructionContent: _react.PropTypes.string,
  onClose: _react.PropTypes.func.isRequired,
  animation: _react.PropTypes.bool,
  modalActive: _react.PropTypes.bool.isRequired,
  titleIcon: _react.PropTypes.string
};

ModalDialog.defaultProps = {
  showHeader: true,
  dialogClass: '',
  focusElement: '',
  cover: false,
  titleText: 'Dialog',
  showInstructions: false,
  animation: false,
  titleIcon: ''
};
module.exports = exports['default'];
//# sourceMappingURL=ModalDialog.js.map