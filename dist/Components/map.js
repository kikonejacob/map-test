'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactMapGl = require('react-map-gl');

var _reactMapGl2 = _interopRequireDefault(_reactMapGl);

var _mapUtils = require('../utils/map-utils');

var _mapUtils2 = _interopRequireDefault(_mapUtils);

var _scatterplot = require('./scatterplot');

var _scatterplot2 = _interopRequireDefault(_scatterplot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import {updateMap, updateMeta, loadData, useParams} from '../actions/app-actions';


var MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiamFjb2JraXN3ZW5kc2lkYSIsImEiOiJjaXk4cXo0eTUwMDdxMzJtcDhmM2Rocm9hIn0.lQgbjfdBvKzlXYeEQGEuPg";
var SAMPLE_DATA = [[12, 104], [23, 14]];

var Map = function (_Component) {
  _inherits(Map, _Component);

  function Map() {
    _classCallCheck(this, Map);

    return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
  }

  _createClass(Map, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          viewport = _props.viewport,
          demo = _props.demo,
          params = _props.params,
          owner = _props.owner,
          data = _props.data,
          updateMeta = _props.updateMeta,
          isInteractive = _props.isInteractive;

      console.log('ffdfdf');

      return _react2.default.createElement(
        _reactMapGl2.default,
        _extends({
          mapboxApiAccessToken: MAPBOX_ACCESS_TOKEN,
          perspectiveEnabled: true
        }, viewport),
        _react2.default.createElement(_scatterplot2.default, { data: SAMPLE_DATA, viewport: viewport, params: params }),
        ';'
      );
    }
  }]);

  return Map;
}(_react.Component);

exports.default = Map;


function mapStateToProps(state) {
  return {
    viewport: state.viewport
  };
}

Map.defaultProps = {
  onInteract: function onInteract() {},
  isInteractive: true
};

//export default connect(mapStateToProps)(Map);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL21hcC5qcyJdLCJuYW1lcyI6WyJNQVBCT1hfQUNDRVNTX1RPS0VOIiwiU0FNUExFX0RBVEEiLCJNYXAiLCJwcm9wcyIsInZpZXdwb3J0IiwiZGVtbyIsInBhcmFtcyIsIm93bmVyIiwiZGF0YSIsInVwZGF0ZU1ldGEiLCJpc0ludGVyYWN0aXZlIiwiY29uc29sZSIsImxvZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGVmYXVsdFByb3BzIiwib25JbnRlcmFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFGQTs7O0FBSUEsSUFBTUEsc0JBQW9CLHVHQUExQjtBQUNBLElBQU1DLGNBQVksQ0FBQyxDQUFDLEVBQUQsRUFBSSxHQUFKLENBQUQsRUFBVSxDQUFDLEVBQUQsRUFBSSxFQUFKLENBQVYsQ0FBbEI7O0lBRXFCQyxHOzs7Ozs7Ozs7Ozs2QkFHVjtBQUFBLG1CQUNrRSxLQUFLQyxLQUR2RTtBQUFBLFVBQ0FDLFFBREEsVUFDQUEsUUFEQTtBQUFBLFVBQ1VDLElBRFYsVUFDVUEsSUFEVjtBQUFBLFVBQ2dCQyxNQURoQixVQUNnQkEsTUFEaEI7QUFBQSxVQUN3QkMsS0FEeEIsVUFDd0JBLEtBRHhCO0FBQUEsVUFDK0JDLElBRC9CLFVBQytCQSxJQUQvQjtBQUFBLFVBQ3FDQyxVQURyQyxVQUNxQ0EsVUFEckM7QUFBQSxVQUNpREMsYUFEakQsVUFDaURBLGFBRGpEOztBQUVQQyxjQUFRQyxHQUFSLENBQWEsUUFBYjs7QUFHQSxhQUNFO0FBQUE7QUFBQTtBQUNFLGdDQUFzQlosbUJBRHhCO0FBRUUsOEJBQW9CO0FBRnRCLFdBR09JLFFBSFA7QUFLRywrREFBYSxNQUFNSCxXQUFuQixFQUFrQyxVQUFVRyxRQUE1QyxFQUFzRCxRQUFRRSxNQUE5RCxHQUxIO0FBQUE7QUFBQSxPQURGO0FBVUQ7Ozs7OztrQkFsQmtCSixHOzs7QUFzQnJCLFNBQVNXLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQzlCLFNBQU87QUFDTFYsY0FBVVUsTUFBTVY7QUFEWCxHQUFQO0FBR0Q7O0FBRURGLElBQUlhLFlBQUosR0FBbUI7QUFDakJDLGNBQVksc0JBQU0sQ0FBRSxDQURIO0FBRWpCTixpQkFBZTtBQUZFLENBQW5COztBQUtBIiwiZmlsZSI6Im1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IE1hcEdMIGZyb20gJ3JlYWN0LW1hcC1nbCc7XG5cbi8vaW1wb3J0IHt1cGRhdGVNYXAsIHVwZGF0ZU1ldGEsIGxvYWREYXRhLCB1c2VQYXJhbXN9IGZyb20gJy4uL2FjdGlvbnMvYXBwLWFjdGlvbnMnO1xuaW1wb3J0IFZpZXdwb3J0QW5pbWF0aW9uIGZyb20gJy4uL3V0aWxzL21hcC11dGlscyc7XG5pbXBvcnQgU2NhdHRlclBsb3QgZnJvbSAnLi9zY2F0dGVycGxvdCc7XG5cbmNvbnN0IE1BUEJPWF9BQ0NFU1NfVE9LRU49XCJway5leUoxSWpvaWFtRmpiMkpyYVhOM1pXNWtjMmxrWVNJc0ltRWlPaUpqYVhrNGNYbzBlVFV3TURkeE16SnRjRGhtTTJSb2NtOWhJbjAubFFnYmpmZEJ2S3psWFllRVFHRXVQZ1wiO1xuY29uc3QgU0FNUExFX0RBVEE9W1sxMiwxMDRdLFsyMywxNF1dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dmlld3BvcnQsIGRlbW8sIHBhcmFtcywgb3duZXIsIGRhdGEsIHVwZGF0ZU1ldGEsIGlzSW50ZXJhY3RpdmV9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZyggJ2ZmZGZkZicpO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1hcEdMXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtNQVBCT1hfQUNDRVNTX1RPS0VOfVxuICAgICAgICBwZXJzcGVjdGl2ZUVuYWJsZWQ9e3RydWV9XG4gICAgICAgIHsgLi4udmlld3BvcnQgfVxuICAgICAgICA+XG4gICAgICAgICA8U2NhdHRlclBsb3QgZGF0YT17U0FNUExFX0RBVEF9ICAgdmlld3BvcnQ9e3ZpZXdwb3J0fSBwYXJhbXM9e3BhcmFtc30vPjtcblxuICAgICAgPC9NYXBHTD5cbiAgICApXG4gIH1cblxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB2aWV3cG9ydDogc3RhdGUudmlld3BvcnQsIFxuICB9XG59XG5cbk1hcC5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uSW50ZXJhY3Q6ICgpID0+IHt9LFxuICBpc0ludGVyYWN0aXZlOiB0cnVlXG59O1xuXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNYXApO1xuIl19