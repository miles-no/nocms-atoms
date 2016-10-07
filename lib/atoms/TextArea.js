'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nocmsEditor = require('nocms-editor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_Component) {
  _inherits(TextArea, _Component);

  function TextArea() {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));
  }

  _createClass(TextArea, [{
    key: 'encodeSimple',
    value: function encodeSimple(str) {
      return str.replace(/\r\n?/g, '\n').replace(/(^((?!\n)\s)+|((?!\n)\s)+$)/gm, '').replace(/(?!\n)\s+/g, ' ').replace(/^\n+|\n+$/g, '').replace(/\n/g, '<br />');
    }
  }, {
    key: 'encodeToHTML',
    value: function encodeToHTML(str) {
      return str.replace(/\r\n?/g, '\n').replace(/(^((?!\n)\s)+|((?!\n)\s)+$)/gm, '').replace(/(?!\n)\s+/g, ' ').replace(/^\n+|\n+$/g, '').replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br />').replace(/^(.+?)$/, '<p>$1</p>');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var centerText = _props.centerText;
      var className = _props.className;
      var text = _props.text;
      var placeholder = _props.placeholder;
      var scope = _props.scope;
      var activeEditMode = _props.activeEditMode;
      var paragraph = _props.paragraph;
      var _context = this.context;
      var editMode = _context.editMode;
      var isPublisher = _context.isPublisher;


      var output = paragraph ? this.encodeToHTML(text) : this.encodeSimple(text);
      var renderText = _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: output } });
      var content = void 0;
      if (editMode && activeEditMode) {
        content = _react2.default.createElement(_nocmsEditor.SimpleMultiline, { text: text, placeholder: placeholder, scope: scope, center: centerText });
      } else if (isPublisher && output === '' && !editMode || isPublisher && output === '' && !activeEditMode) {
        content = placeholder;
      } else {
        content = renderText;
      }
      return _react2.default.createElement(
        'div',
        { className: className },
        content
      );
    }
  }]);

  return TextArea;
}(_react.Component);

TextArea.propTypes = {
  centerText: _react.PropTypes.bool,
  type: _react.PropTypes.string,
  className: _react.PropTypes.string,
  text: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  scope: _react.PropTypes.string,
  activeEditMode: _react.PropTypes.bool,
  paragraph: _react.PropTypes.bool
};

TextArea.defaultProps = {
  centerText: false,
  text: '',
  placeholder: 'Skriv tekst',
  activeEditMode: true,
  paragraph: true
};

TextArea.contextTypes = {
  editMode: _react.PropTypes.bool,
  isPublisher: _react.PropTypes.bool
};

module.exports = TextArea;
//# sourceMappingURL=TextArea.js.map