'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreamParser = StreamParser;
var workers = {};

function StreamParser(workerUrl, callback) {
  var parsedLength = 0;

  if (workers[workerUrl]) {
    workers[workerUrl].terminate();
  }

  var workerInstance = new Worker(workerUrl);
  workers[workerUrl] = workerInstance;
  var streamedData = [];

  workerInstance.onmessage = function (e) {
    var _e$data = e.data,
        action = _e$data.action,
        data = _e$data.data,
        meta = _e$data.meta;

    switch (action) {
      case 'add':
        if (data && data.length) {
          streamedData = streamedData.concat(data);
          callback(streamedData, meta);
        }
        break;
      case 'end':
        workerInstance.terminate();
        break;
    }
  };

  this.onProgress = function (e) {
    var responseText = e.target.responseText;

    var lineBreak = responseText.lastIndexOf('\n') + 1;

    workerInstance.postMessage({
      event: 'progress',
      text: responseText.slice(parsedLength, lineBreak)
    });
    parsedLength = lineBreak;
  };

  this.onLoad = function (target) {
    var responseText = target.responseText;

    workerInstance.postMessage({
      event: 'load',
      text: responseText.slice(parsedLength)
    });
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy93b3JrZXItdXRpbHMuanMiXSwibmFtZXMiOlsiU3RyZWFtUGFyc2VyIiwid29ya2VycyIsIndvcmtlclVybCIsImNhbGxiYWNrIiwicGFyc2VkTGVuZ3RoIiwidGVybWluYXRlIiwid29ya2VySW5zdGFuY2UiLCJXb3JrZXIiLCJzdHJlYW1lZERhdGEiLCJvbm1lc3NhZ2UiLCJlIiwiZGF0YSIsImFjdGlvbiIsIm1ldGEiLCJsZW5ndGgiLCJjb25jYXQiLCJvblByb2dyZXNzIiwicmVzcG9uc2VUZXh0IiwidGFyZ2V0IiwibGluZUJyZWFrIiwibGFzdEluZGV4T2YiLCJwb3N0TWVzc2FnZSIsImV2ZW50IiwidGV4dCIsInNsaWNlIiwib25Mb2FkIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsWSxHQUFBQSxZO0FBRmhCLElBQU1DLFVBQVUsRUFBaEI7O0FBRU8sU0FBU0QsWUFBVCxDQUFzQkUsU0FBdEIsRUFBaUNDLFFBQWpDLEVBQTJDO0FBQ2hELE1BQUlDLGVBQWUsQ0FBbkI7O0FBRUEsTUFBSUgsUUFBUUMsU0FBUixDQUFKLEVBQXdCO0FBQ3RCRCxZQUFRQyxTQUFSLEVBQW1CRyxTQUFuQjtBQUNEOztBQUVELE1BQU1DLGlCQUFpQixJQUFJQyxNQUFKLENBQVdMLFNBQVgsQ0FBdkI7QUFDQUQsVUFBUUMsU0FBUixJQUFxQkksY0FBckI7QUFDQSxNQUFJRSxlQUFlLEVBQW5COztBQUVBRixpQkFBZUcsU0FBZixHQUEyQixhQUFLO0FBQUEsa0JBQ0RDLEVBQUVDLElBREQ7QUFBQSxRQUN2QkMsTUFEdUIsV0FDdkJBLE1BRHVCO0FBQUEsUUFDZkQsSUFEZSxXQUNmQSxJQURlO0FBQUEsUUFDVEUsSUFEUyxXQUNUQSxJQURTOztBQUU5QixZQUFPRCxNQUFQO0FBQ0EsV0FBSyxLQUFMO0FBQ0UsWUFBSUQsUUFBUUEsS0FBS0csTUFBakIsRUFBeUI7QUFDdkJOLHlCQUFlQSxhQUFhTyxNQUFiLENBQW9CSixJQUFwQixDQUFmO0FBQ0FSLG1CQUFTSyxZQUFULEVBQXVCSyxJQUF2QjtBQUNEO0FBQ0Q7QUFDRixXQUFLLEtBQUw7QUFDRVAsdUJBQWVELFNBQWY7QUFDQTtBQVRGO0FBV0QsR0FiRDs7QUFlQSxPQUFLVyxVQUFMLEdBQWtCLFVBQVNOLENBQVQsRUFBWTtBQUFBLFFBQ3JCTyxZQURxQixHQUNMUCxFQUFFUSxNQURHLENBQ3JCRCxZQURxQjs7QUFFNUIsUUFBTUUsWUFBWUYsYUFBYUcsV0FBYixDQUF5QixJQUF6QixJQUFpQyxDQUFuRDs7QUFFQWQsbUJBQWVlLFdBQWYsQ0FBMkI7QUFDekJDLGFBQU8sVUFEa0I7QUFFekJDLFlBQU1OLGFBQWFPLEtBQWIsQ0FBbUJwQixZQUFuQixFQUFpQ2UsU0FBakM7QUFGbUIsS0FBM0I7QUFJQWYsbUJBQWVlLFNBQWY7QUFDRCxHQVREOztBQVdBLE9BQUtNLE1BQUwsR0FBYyxVQUFTUCxNQUFULEVBQWlCO0FBQUEsUUFDdEJELFlBRHNCLEdBQ05DLE1BRE0sQ0FDdEJELFlBRHNCOztBQUU3QlgsbUJBQWVlLFdBQWYsQ0FBMkI7QUFDekJDLGFBQU8sTUFEa0I7QUFFekJDLFlBQU1OLGFBQWFPLEtBQWIsQ0FBbUJwQixZQUFuQjtBQUZtQixLQUEzQjtBQUlELEdBTkQ7QUFPRCIsImZpbGUiOiJ3b3JrZXItdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3b3JrZXJzID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBTdHJlYW1QYXJzZXIod29ya2VyVXJsLCBjYWxsYmFjaykge1xuICB2YXIgcGFyc2VkTGVuZ3RoID0gMDtcblxuICBpZiAod29ya2Vyc1t3b3JrZXJVcmxdKSB7XG4gICAgd29ya2Vyc1t3b3JrZXJVcmxdLnRlcm1pbmF0ZSgpO1xuICB9XG5cbiAgY29uc3Qgd29ya2VySW5zdGFuY2UgPSBuZXcgV29ya2VyKHdvcmtlclVybCk7XG4gIHdvcmtlcnNbd29ya2VyVXJsXSA9IHdvcmtlckluc3RhbmNlO1xuICBsZXQgc3RyZWFtZWREYXRhID0gW107XG5cbiAgd29ya2VySW5zdGFuY2Uub25tZXNzYWdlID0gZSA9PiB7XG4gICAgY29uc3Qge2FjdGlvbiwgZGF0YSwgbWV0YX0gPSBlLmRhdGE7XG4gICAgc3dpdGNoKGFjdGlvbikge1xuICAgIGNhc2UgJ2FkZCc6XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgICBzdHJlYW1lZERhdGEgPSBzdHJlYW1lZERhdGEuY29uY2F0KGRhdGEpO1xuICAgICAgICBjYWxsYmFjayhzdHJlYW1lZERhdGEsIG1ldGEpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZW5kJzpcbiAgICAgIHdvcmtlckluc3RhbmNlLnRlcm1pbmF0ZSgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25Qcm9ncmVzcyA9IGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCB7cmVzcG9uc2VUZXh0fSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGxpbmVCcmVhayA9IHJlc3BvbnNlVGV4dC5sYXN0SW5kZXhPZignXFxuJykgKyAxO1xuXG4gICAgd29ya2VySW5zdGFuY2UucG9zdE1lc3NhZ2Uoe1xuICAgICAgZXZlbnQ6ICdwcm9ncmVzcycsXG4gICAgICB0ZXh0OiByZXNwb25zZVRleHQuc2xpY2UocGFyc2VkTGVuZ3RoLCBsaW5lQnJlYWspXG4gICAgfSk7XG4gICAgcGFyc2VkTGVuZ3RoID0gbGluZUJyZWFrO1xuICB9O1xuXG4gIHRoaXMub25Mb2FkID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY29uc3Qge3Jlc3BvbnNlVGV4dH0gPSB0YXJnZXQ7XG4gICAgd29ya2VySW5zdGFuY2UucG9zdE1lc3NhZ2Uoe1xuICAgICAgZXZlbnQ6ICdsb2FkJyxcbiAgICAgIHRleHQ6IHJlc3BvbnNlVGV4dC5zbGljZShwYXJzZWRMZW5ndGgpXG4gICAgfSk7XG4gIH07XG59XG4iXX0=