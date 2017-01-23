'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.normalizeParam = normalizeParam;
exports.readableInteger = readableInteger;

var _d3Color = require('d3-color');

function normalizeParam(p) {
  var value = p.value;

  var displayValue = void 0;

  switch (p.type) {
    case 'color':
      var color = (0, _d3Color.rgb)(value);
      value = [color.r, color.g, color.b];
      displayValue = '#' + value.map(function (v) {
        return '' + (v < 16 ? '0' : '') + v.toString(16);
      }).join('');
      break;

    default:
      displayValue = value.toString();
  }
  return _extends({}, p, { value: value, displayValue: displayValue });
}

function readableInteger(x) {
  if (!x) {
    return 0;
  }
  if (x < 1000) {
    return x.toString();
  }
  x /= 1000;
  if (x < 1000) {
    return x.toFixed(1) + 'K';
  }
  x /= 1000;
  return x.toFixed(1) + 'M';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9mb3JtYXQtdXRpbHMuanMiXSwibmFtZXMiOlsibm9ybWFsaXplUGFyYW0iLCJyZWFkYWJsZUludGVnZXIiLCJwIiwidmFsdWUiLCJkaXNwbGF5VmFsdWUiLCJ0eXBlIiwiY29sb3IiLCJyIiwiZyIsImIiLCJtYXAiLCJ2IiwidG9TdHJpbmciLCJqb2luIiwieCIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBRWdCQSxjLEdBQUFBLGM7UUFtQkFDLGUsR0FBQUEsZTs7QUFyQmhCOztBQUVPLFNBQVNELGNBQVQsQ0FBd0JFLENBQXhCLEVBQTJCO0FBQUEsTUFDM0JDLEtBRDJCLEdBQ2xCRCxDQURrQixDQUMzQkMsS0FEMkI7O0FBRWhDLE1BQUlDLHFCQUFKOztBQUVBLFVBQVFGLEVBQUVHLElBQVY7QUFDQSxTQUFLLE9BQUw7QUFDRSxVQUFNQyxRQUFRLGtCQUFJSCxLQUFKLENBQWQ7QUFDQUEsY0FBUSxDQUFDRyxNQUFNQyxDQUFQLEVBQVVELE1BQU1FLENBQWhCLEVBQW1CRixNQUFNRyxDQUF6QixDQUFSO0FBQ0FMLHFCQUFlLE1BQU1ELE1BQU1PLEdBQU4sQ0FDbkI7QUFBQSxxQkFBUUMsSUFBSSxFQUFKLEdBQVMsR0FBVCxHQUFlLEVBQXZCLElBQTRCQSxFQUFFQyxRQUFGLENBQVcsRUFBWCxDQUE1QjtBQUFBLE9BRG1CLEVBRW5CQyxJQUZtQixDQUVkLEVBRmMsQ0FBckI7QUFHQTs7QUFFRjtBQUNFVCxxQkFBZUQsTUFBTVMsUUFBTixFQUFmO0FBVkY7QUFZQSxzQkFBV1YsQ0FBWCxJQUFjQyxZQUFkLEVBQXFCQywwQkFBckI7QUFDRDs7QUFFTSxTQUFTSCxlQUFULENBQXlCYSxDQUF6QixFQUE0QjtBQUNqQyxNQUFJLENBQUNBLENBQUwsRUFBUTtBQUNOLFdBQU8sQ0FBUDtBQUNEO0FBQ0QsTUFBSUEsSUFBSSxJQUFSLEVBQWM7QUFDWixXQUFPQSxFQUFFRixRQUFGLEVBQVA7QUFDRDtBQUNERSxPQUFLLElBQUw7QUFDQSxNQUFJQSxJQUFJLElBQVIsRUFBYztBQUNaLFdBQU9BLEVBQUVDLE9BQUYsQ0FBVSxDQUFWLElBQWUsR0FBdEI7QUFDRDtBQUNERCxPQUFLLElBQUw7QUFDQSxTQUFPQSxFQUFFQyxPQUFGLENBQVUsQ0FBVixJQUFlLEdBQXRCO0FBQ0QiLCJmaWxlIjoiZm9ybWF0LXV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZ2J9IGZyb20gJ2QzLWNvbG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtKHApIHtcbiAgbGV0IHt2YWx1ZX0gPSBwO1xuICBsZXQgZGlzcGxheVZhbHVlO1xuXG4gIHN3aXRjaCAocC50eXBlKSB7XG4gIGNhc2UgJ2NvbG9yJzpcbiAgICBjb25zdCBjb2xvciA9IHJnYih2YWx1ZSk7XG4gICAgdmFsdWUgPSBbY29sb3IuciwgY29sb3IuZywgY29sb3IuYl07XG4gICAgZGlzcGxheVZhbHVlID0gJyMnICsgdmFsdWUubWFwKFxuICAgICAgdiA9PiBgJHt2IDwgMTYgPyAnMCcgOiAnJ30ke3YudG9TdHJpbmcoMTYpfWBcbiAgICApLmpvaW4oJycpO1xuICAgIGJyZWFrO1xuXG4gIGRlZmF1bHQ6XG4gICAgZGlzcGxheVZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuICByZXR1cm4gey4uLnAsIHZhbHVlLCBkaXNwbGF5VmFsdWV9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZGFibGVJbnRlZ2VyKHgpIHtcbiAgaWYgKCF4KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKHggPCAxMDAwKSB7XG4gICAgcmV0dXJuIHgudG9TdHJpbmcoKTtcbiAgfVxuICB4IC89IDEwMDA7XG4gIGlmICh4IDwgMTAwMCkge1xuICAgIHJldHVybiB4LnRvRml4ZWQoMSkgKyAnSyc7XG4gIH1cbiAgeCAvPSAxMDAwO1xuICByZXR1cm4geC50b0ZpeGVkKDEpICsgJ00nO1xufVxuIl19