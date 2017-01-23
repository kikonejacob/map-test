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

var _deck = require('deck.gl');

var _react3 = require('deck.gl/react');

var _react4 = _interopRequireDefault(_react3);

var _formatUtils = require('../utils/format-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScatterPlotDemo = function (_Component) {
  _inherits(ScatterPlotDemo, _Component);

  function ScatterPlotDemo() {
    _classCallCheck(this, ScatterPlotDemo);

    return _possibleConstructorReturn(this, (ScatterPlotDemo.__proto__ || Object.getPrototypeOf(ScatterPlotDemo)).apply(this, arguments));
  }

  _createClass(ScatterPlotDemo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          viewport = _props.viewport,
          params = _props.params,
          data = _props.data;


      if (!data) {
        return null;
      }

      var layer = new _deck.ScatterplotLayer({
        id: 'scatter-plot',
        data: data,
        getPosition: function getPosition(d) {
          return [d[0], d[1], 0];
        },
        getColor: function getColor(d) {
          return d[2] === 1 ? params.colorM.value : params.colorF.value;
        },
        getRadius: function getRadius(d) {
          return params.radius.value;
        },
        updateTriggers: {
          instanceColors: { c1: params.colorM.value, c2: params.colorF.value },
          instancePositions: { radius: params.radius.value }
        }
      });

      return _react2.default.createElement(_react4.default, _extends({}, viewport, { layers: [layer] }));
    }
  }], [{
    key: 'renderInfo',
    value: function renderInfo(meta) {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Every Person in New York City'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Each dot accounts for 10 people. Density per tract from 2015 census data.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Data source: ',
          _react2.default.createElement(
            'a',
            { href: 'http://www.census.gov' },
            'US Census Bureau'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'stat' },
          'Instances',
          _react2.default.createElement(
            'b',
            null,
            (0, _formatUtils.readableInteger)(meta.points || 0)
          )
        )
      );
    }
  }, {
    key: 'data',
    get: function get() {
      return {
        url: 'data/scatterplot-data.txt',
        worker: 'workers/scatterplot-data-decoder.js'
      };
    }
  }, {
    key: 'parameters',
    get: function get() {
      return {
        colorM: { displayName: 'Male', type: 'color', value: '#08f' },
        colorF: { displayName: 'Female', type: 'color', value: '#f08' },
        radius: { displayName: 'Radius', type: 'number', value: 0.3, step: 0.1, min: 0.1 }
      };
    }
  }, {
    key: 'viewport',
    get: function get() {
      return {
        //mapStyle: MAPBOX_STYLES.LIGHT,
        longitude: -74,
        latitude: 40.7,
        zoom: 11,
        maxZoom: 16,
        pitch: 0,
        bearing: 0
      };
    }
  }]);

  return ScatterPlotDemo;
}(_react.Component);

exports.default = ScatterPlotDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL3NjYXR0ZXJwbG90LmpzIl0sIm5hbWVzIjpbIlNjYXR0ZXJQbG90RGVtbyIsInByb3BzIiwidmlld3BvcnQiLCJwYXJhbXMiLCJkYXRhIiwibGF5ZXIiLCJpZCIsImdldFBvc2l0aW9uIiwiZCIsImdldENvbG9yIiwiY29sb3JNIiwidmFsdWUiLCJjb2xvckYiLCJnZXRSYWRpdXMiLCJyYWRpdXMiLCJ1cGRhdGVUcmlnZ2VycyIsImluc3RhbmNlQ29sb3JzIiwiYzEiLCJjMiIsImluc3RhbmNlUG9zaXRpb25zIiwibWV0YSIsInBvaW50cyIsInVybCIsIndvcmtlciIsImRpc3BsYXlOYW1lIiwidHlwZSIsInN0ZXAiLCJtaW4iLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsInpvb20iLCJtYXhab29tIiwicGl0Y2giLCJiZWFyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFHQTs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7NkJBMENWO0FBQUEsbUJBQzBCLEtBQUtDLEtBRC9CO0FBQUEsVUFDQUMsUUFEQSxVQUNBQSxRQURBO0FBQUEsVUFDVUMsTUFEVixVQUNVQSxNQURWO0FBQUEsVUFDa0JDLElBRGxCLFVBQ2tCQSxJQURsQjs7O0FBR1AsVUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVCxlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFNQyxRQUFRLDJCQUFxQjtBQUNqQ0MsWUFBSSxjQUQ2QjtBQUVqQ0YsY0FBTUEsSUFGMkI7QUFHakNHLHFCQUFhO0FBQUEsaUJBQUssQ0FBQ0MsRUFBRSxDQUFGLENBQUQsRUFBT0EsRUFBRSxDQUFGLENBQVAsRUFBYSxDQUFiLENBQUw7QUFBQSxTQUhvQjtBQUlqQ0Msa0JBQVU7QUFBQSxpQkFBS0QsRUFBRSxDQUFGLE1BQVMsQ0FBVCxHQUFhTCxPQUFPTyxNQUFQLENBQWNDLEtBQTNCLEdBQW1DUixPQUFPUyxNQUFQLENBQWNELEtBQXREO0FBQUEsU0FKdUI7QUFLakNFLG1CQUFXO0FBQUEsaUJBQUtWLE9BQU9XLE1BQVAsQ0FBY0gsS0FBbkI7QUFBQSxTQUxzQjtBQU1qQ0ksd0JBQWdCO0FBQ2RDLDBCQUFnQixFQUFDQyxJQUFJZCxPQUFPTyxNQUFQLENBQWNDLEtBQW5CLEVBQTBCTyxJQUFJZixPQUFPUyxNQUFQLENBQWNELEtBQTVDLEVBREY7QUFFZFEsNkJBQW1CLEVBQUNMLFFBQVFYLE9BQU9XLE1BQVAsQ0FBY0gsS0FBdkI7QUFGTDtBQU5pQixPQUFyQixDQUFkOztBQVlBLGFBQ0UsNERBQVlULFFBQVosSUFBc0IsUUFBUyxDQUFDRyxLQUFELENBQS9CLElBREY7QUFHRDs7OytCQW5DaUJlLEksRUFBTTtBQUN0QixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQWdCO0FBQUE7QUFBQSxjQUFHLE1BQUssdUJBQVI7QUFBQTtBQUFBO0FBQWhCLFNBSEY7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFVLE1BQWY7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLLDhDQUFnQkEsS0FBS0MsTUFBTCxJQUFlLENBQS9CO0FBQUw7QUFERjtBQUpGLE9BREY7QUFVRDs7O3dCQXRDaUI7QUFDaEIsYUFBTztBQUNMQyxhQUFLLDJCQURBO0FBRUxDLGdCQUFRO0FBRkgsT0FBUDtBQUlEOzs7d0JBRXVCO0FBQ3RCLGFBQU87QUFDTGIsZ0JBQVEsRUFBQ2MsYUFBYSxNQUFkLEVBQXNCQyxNQUFNLE9BQTVCLEVBQXFDZCxPQUFPLE1BQTVDLEVBREg7QUFFTEMsZ0JBQVEsRUFBQ1ksYUFBYSxRQUFkLEVBQXdCQyxNQUFNLE9BQTlCLEVBQXVDZCxPQUFPLE1BQTlDLEVBRkg7QUFHTEcsZ0JBQVEsRUFBQ1UsYUFBYSxRQUFkLEVBQXdCQyxNQUFNLFFBQTlCLEVBQXdDZCxPQUFPLEdBQS9DLEVBQW9EZSxNQUFNLEdBQTFELEVBQStEQyxLQUFLLEdBQXBFO0FBSEgsT0FBUDtBQUtEOzs7d0JBRXFCO0FBQ3BCLGFBQU87QUFDTDtBQUNBQyxtQkFBVyxDQUFDLEVBRlA7QUFHTEMsa0JBQVUsSUFITDtBQUlMQyxjQUFNLEVBSkQ7QUFLTEMsaUJBQVMsRUFMSjtBQU1MQyxlQUFPLENBTkY7QUFPTEMsaUJBQVM7QUFQSixPQUFQO0FBU0Q7Ozs7OztrQkEzQmtCakMsZSIsImZpbGUiOiJzY2F0dGVycGxvdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NjYXR0ZXJwbG90TGF5ZXJ9IGZyb20gJ2RlY2suZ2wnO1xuaW1wb3J0IERlY2tHTCBmcm9tICdkZWNrLmdsL3JlYWN0JztcblxuXG5pbXBvcnQge3JlYWRhYmxlSW50ZWdlcn0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0LXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhdHRlclBsb3REZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogJ2RhdGEvc2NhdHRlcnBsb3QtZGF0YS50eHQnLFxuICAgICAgd29ya2VyOiAnd29ya2Vycy9zY2F0dGVycGxvdC1kYXRhLWRlY29kZXIuanMnXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3JNOiB7ZGlzcGxheU5hbWU6ICdNYWxlJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjMDhmJ30sXG4gICAgICBjb2xvckY6IHtkaXNwbGF5TmFtZTogJ0ZlbWFsZScsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAnI2YwOCd9LFxuICAgICAgcmFkaXVzOiB7ZGlzcGxheU5hbWU6ICdSYWRpdXMnLCB0eXBlOiAnbnVtYmVyJywgdmFsdWU6IDAuMywgc3RlcDogMC4xLCBtaW46IDAuMX1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCB2aWV3cG9ydCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy9tYXBTdHlsZTogTUFQQk9YX1NUWUxFUy5MSUdIVCxcbiAgICAgIGxvbmdpdHVkZTogLTc0LFxuICAgICAgbGF0aXR1ZGU6IDQwLjcsXG4gICAgICB6b29tOiAxMSxcbiAgICAgIG1heFpvb206IDE2LFxuICAgICAgcGl0Y2g6IDAsXG4gICAgICBiZWFyaW5nOiAwXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJJbmZvKG1ldGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPkV2ZXJ5IFBlcnNvbiBpbiBOZXcgWW9yayBDaXR5PC9oMz5cbiAgICAgICAgPHA+RWFjaCBkb3QgYWNjb3VudHMgZm9yIDEwIHBlb3BsZS4gRGVuc2l0eSBwZXIgdHJhY3QgZnJvbSAyMDE1IGNlbnN1cyBkYXRhLjwvcD5cbiAgICAgICAgPHA+RGF0YSBzb3VyY2U6IDxhIGhyZWY9XCJodHRwOi8vd3d3LmNlbnN1cy5nb3ZcIj5VUyBDZW5zdXMgQnVyZWF1PC9hPjwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0XCI+SW5zdGFuY2VzXG4gICAgICAgICAgPGI+eyByZWFkYWJsZUludGVnZXIobWV0YS5wb2ludHMgfHwgMCkgfTwvYj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt2aWV3cG9ydCwgcGFyYW1zLCBkYXRhfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGxheWVyID0gbmV3IFNjYXR0ZXJwbG90TGF5ZXIoe1xuICAgICAgaWQ6ICdzY2F0dGVyLXBsb3QnLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGdldFBvc2l0aW9uOiBkID0+IFtkWzBdLCBkWzFdLCAwXSxcbiAgICAgIGdldENvbG9yOiBkID0+IGRbMl0gPT09IDEgPyBwYXJhbXMuY29sb3JNLnZhbHVlIDogcGFyYW1zLmNvbG9yRi52YWx1ZSxcbiAgICAgIGdldFJhZGl1czogZCA9PiBwYXJhbXMucmFkaXVzLnZhbHVlLFxuICAgICAgdXBkYXRlVHJpZ2dlcnM6IHtcbiAgICAgICAgaW5zdGFuY2VDb2xvcnM6IHtjMTogcGFyYW1zLmNvbG9yTS52YWx1ZSwgYzI6IHBhcmFtcy5jb2xvckYudmFsdWV9LFxuICAgICAgICBpbnN0YW5jZVBvc2l0aW9uczoge3JhZGl1czogcGFyYW1zLnJhZGl1cy52YWx1ZX1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RGVja0dMIHsuLi52aWV3cG9ydH0gbGF5ZXJzPXsgW2xheWVyXSB9IC8+XG4gICAgKTtcbiAgfVxufVxuIl19