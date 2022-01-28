"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _App = _interopRequireDefault(require("./App"));

var _reactI18next = require("react-i18next");

var _i18next = _interopRequireDefault(require("i18next"));

var _common = _interopRequireDefault(require("./translations/de_DE/common.json"));

var _common2 = _interopRequireDefault(require("./translations/en_US/common.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_i18next.default.init({
  interpolation: {
    escapeValue: false
  },
  // React already does escaping
  lng: 'en_US',
  resources: {
    en_US: {
      common: _common2.default
    },
    de_DE: {
      common: _common.default
    }
  }
});

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
  i18n: _i18next.default
}, /*#__PURE__*/_react.default.createElement(_App.default, null))), document.getElementById('root'));