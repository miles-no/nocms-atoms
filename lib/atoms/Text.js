'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nocmsEditor = require('nocms-editor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'getEditorType',
    value: function getEditorType(editorType, text, placeholder, scope) {
      switch (editorType) {
        case 'simple':
          return _react2.default.createElement(_nocmsEditor.Simple, { text: text, placeholder: placeholder, scope: scope });
        case 'simpleWithLink':
          return _react2.default.createElement(_nocmsEditor.LinkEditor, { text: text, placeholder: placeholder, scope: scope });
        default:
          return _react2.default.createElement(_nocmsEditor.Simple, { text: text, placeholder: placeholder, scope: scope });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var inline = _props.inline;
      var isParagraph = _props.isParagraph;
      var className = _props.className;
      var text = _props.text;
      var editorType = _props.editorType;
      var placeholder = _props.placeholder;
      var scope = _props.scope;
      var activeEditMode = _props.activeEditMode;
      var editMode = _props.editMode;
      var isPublisher = _props.isPublisher;


      var output = text;
      var renderText = isParagraph ? _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: output } }) : _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: output } });
      var content = void 0;
      if (editMode && activeEditMode) {
        content = this.getEditorType(editorType, text, placeholder, scope);
      } else if (isPublisher && output === '' && !editMode || isPublisher && output === '' && !activeEditMode) {
        content = placeholder;
      } else {
        content = renderText;
      }
      var renderedResult = inline ? _react2.default.createElement(
        'span',
        { className: className + ' text-content-inline' },
        content
      ) : _react2.default.createElement(
        'div',
        { className: className },
        content
      );
      return renderedResult;
    }
  }]);

  return Text;
}(_react.Component);

Text.propTypes = {
  centerText: _react.PropTypes.bool,
  type: _react.PropTypes.string,
  inline: _react.PropTypes.bool,
  isParagraph: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  text: _react.PropTypes.string,
  editorType: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  scope: _react.PropTypes.string,
  activeEditMode: _react.PropTypes.bool,
  editMode: _react.PropTypes.bool,
  isPublisher: _react.PropTypes.bool
};

Text.defaultProps = {
  centerText: false,
  inline: false,
  isParagraph: false,
  text: '',
  placeholder: 'Skriv tekst',
  editorType: 'simple',
  activeEditMode: false,
  editMode: true,
  isPublisher: true
};

exports.default = Text;
module.exports = exports['default'];
//# sourceMappingURL=Text.js.map