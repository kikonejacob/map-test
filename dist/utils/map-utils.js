'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _tween = require('tween.js');

var _tween2 = _interopRequireDefault(_tween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewportTween = void 0;

function animate() {
  _tween2.default.update();
  requestAnimationFrame(animate);
}

// get a linear tween
function ease(fromState, toState, duration) {
  return new _tween2.default.Tween(fromState).to(toState, duration);
}

// fly to new viewport
function fly(fromViewport, toViewport, duration, onUpdate) {
  var fromState = {};
  var nanState = {};
  var toState = {};

  Object.keys(toViewport).forEach(function (key) {
    var v0 = fromViewport[key];
    var v1 = toViewport[key];
    if (isNaN(v0) || isNaN(v1)) {
      nanState[key] = v1;
    } else {
      fromState[key] = v0;
      toState[key] = v1;
    }
  });

  if (viewportTween) {
    _tween2.default.remove(viewportTween);
  }

  viewportTween = new _tween2.default.Tween(fromState).to(toState, duration).onUpdate(function () {
    onUpdate(_extends({}, this, nanState));
  });

  return viewportTween;
}

exports.default = {
  init: animate,
  Easing: _tween2.default.Easing,
  ease: ease,
  fly: fly
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9tYXAtdXRpbHMuanMiXSwibmFtZXMiOlsidmlld3BvcnRUd2VlbiIsImFuaW1hdGUiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJlYXNlIiwiZnJvbVN0YXRlIiwidG9TdGF0ZSIsImR1cmF0aW9uIiwiVHdlZW4iLCJ0byIsImZseSIsImZyb21WaWV3cG9ydCIsInRvVmlld3BvcnQiLCJvblVwZGF0ZSIsIm5hblN0YXRlIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2MCIsImtleSIsInYxIiwiaXNOYU4iLCJyZW1vdmUiLCJpbml0IiwiRWFzaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFJQSxzQkFBSjs7QUFFQSxTQUFTQyxPQUFULEdBQW1CO0FBQ2pCLGtCQUFNQyxNQUFOO0FBQ0FDLHdCQUFzQkYsT0FBdEI7QUFDRDs7QUFFRDtBQUNBLFNBQVNHLElBQVQsQ0FBY0MsU0FBZCxFQUF5QkMsT0FBekIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQzFDLFNBQU8sSUFBSSxnQkFBTUMsS0FBVixDQUFnQkgsU0FBaEIsRUFBMkJJLEVBQTNCLENBQThCSCxPQUE5QixFQUF1Q0MsUUFBdkMsQ0FBUDtBQUNEOztBQUVEO0FBQ0EsU0FBU0csR0FBVCxDQUFhQyxZQUFiLEVBQTJCQyxVQUEzQixFQUF1Q0wsUUFBdkMsRUFBaURNLFFBQWpELEVBQTJEO0FBQ3pELE1BQU1SLFlBQVksRUFBbEI7QUFDQSxNQUFNUyxXQUFXLEVBQWpCO0FBQ0EsTUFBTVIsVUFBVSxFQUFoQjs7QUFFQVMsU0FBT0MsSUFBUCxDQUFZSixVQUFaLEVBQXdCSyxPQUF4QixDQUFnQyxlQUFPO0FBQ3JDLFFBQU1DLEtBQUtQLGFBQWFRLEdBQWIsQ0FBWDtBQUNBLFFBQU1DLEtBQUtSLFdBQVdPLEdBQVgsQ0FBWDtBQUNBLFFBQUlFLE1BQU1ILEVBQU4sS0FBYUcsTUFBTUQsRUFBTixDQUFqQixFQUE0QjtBQUMxQk4sZUFBU0ssR0FBVCxJQUFnQkMsRUFBaEI7QUFDRCxLQUZELE1BRU87QUFDTGYsZ0JBQVVjLEdBQVYsSUFBaUJELEVBQWpCO0FBQ0FaLGNBQVFhLEdBQVIsSUFBZUMsRUFBZjtBQUNEO0FBQ0YsR0FURDs7QUFXQSxNQUFJcEIsYUFBSixFQUFtQjtBQUNqQixvQkFBTXNCLE1BQU4sQ0FBYXRCLGFBQWI7QUFDRDs7QUFFREEsa0JBQWdCLElBQUksZ0JBQU1RLEtBQVYsQ0FBZ0JILFNBQWhCLEVBQ2JJLEVBRGEsQ0FDVkgsT0FEVSxFQUNEQyxRQURDLEVBRWJNLFFBRmEsQ0FFSixZQUFXO0FBQ25CQSwwQkFBYSxJQUFiLEVBQXNCQyxRQUF0QjtBQUNELEdBSmEsQ0FBaEI7O0FBTUEsU0FBT2QsYUFBUDtBQUNEOztrQkFFYztBQUNidUIsUUFBTXRCLE9BRE87QUFFYnVCLFVBQVEsZ0JBQU1BLE1BRkQ7QUFHYnBCLFlBSGE7QUFJYk07QUFKYSxDIiwiZmlsZSI6Im1hcC11dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUV0VFTiBmcm9tICd0d2Vlbi5qcyc7XG5cbmxldCB2aWV3cG9ydFR3ZWVuO1xuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICBUV0VFTi51cGRhdGUoKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xufVxuXG4vLyBnZXQgYSBsaW5lYXIgdHdlZW5cbmZ1bmN0aW9uIGVhc2UoZnJvbVN0YXRlLCB0b1N0YXRlLCBkdXJhdGlvbikge1xuICByZXR1cm4gbmV3IFRXRUVOLlR3ZWVuKGZyb21TdGF0ZSkudG8odG9TdGF0ZSwgZHVyYXRpb24pO1xufVxuXG4vLyBmbHkgdG8gbmV3IHZpZXdwb3J0XG5mdW5jdGlvbiBmbHkoZnJvbVZpZXdwb3J0LCB0b1ZpZXdwb3J0LCBkdXJhdGlvbiwgb25VcGRhdGUpIHtcbiAgY29uc3QgZnJvbVN0YXRlID0ge307XG4gIGNvbnN0IG5hblN0YXRlID0ge307XG4gIGNvbnN0IHRvU3RhdGUgPSB7fTtcblxuICBPYmplY3Qua2V5cyh0b1ZpZXdwb3J0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgdjAgPSBmcm9tVmlld3BvcnRba2V5XTtcbiAgICBjb25zdCB2MSA9IHRvVmlld3BvcnRba2V5XTtcbiAgICBpZiAoaXNOYU4odjApIHx8IGlzTmFOKHYxKSkge1xuICAgICAgbmFuU3RhdGVba2V5XSA9IHYxO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcm9tU3RhdGVba2V5XSA9IHYwO1xuICAgICAgdG9TdGF0ZVtrZXldID0gdjE7XG4gICAgfVxuICB9KTtcblxuICBpZiAodmlld3BvcnRUd2Vlbikge1xuICAgIFRXRUVOLnJlbW92ZSh2aWV3cG9ydFR3ZWVuKTtcbiAgfVxuXG4gIHZpZXdwb3J0VHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oZnJvbVN0YXRlKVxuICAgIC50byh0b1N0YXRlLCBkdXJhdGlvbilcbiAgICAub25VcGRhdGUoZnVuY3Rpb24oKSB7XG4gICAgICBvblVwZGF0ZSh7Li4udGhpcywgLi4ubmFuU3RhdGV9KTtcbiAgICB9KTtcblxuICByZXR1cm4gdmlld3BvcnRUd2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBhbmltYXRlLFxuICBFYXNpbmc6IFRXRUVOLkVhc2luZyxcbiAgZWFzZSxcbiAgZmx5XG59O1xuIl19