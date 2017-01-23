'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function appReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (state) {
        default:
            return state;
    }
}

exports.default = (0, _redux.createStore)((0, _redux.combineReducers)({
    app: appReducer
}), (0, _redux.applyMiddleware)(_reduxThunk2.default));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJhcHBSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFHQSxTQUFTQSxVQUFULEdBQXVDO0FBQUEsUUFBakJDLEtBQWlCLHVFQUFYLEVBQVc7QUFBQSxRQUFQQyxNQUFPOztBQUNuQyxZQUFPRCxLQUFQO0FBRUk7QUFDSSxtQkFBT0EsS0FBUDtBQUhSO0FBS0g7O2tCQUdjLHdCQUNiLDRCQUFnQjtBQUNkRSxTQUFLSDtBQURTLENBQWhCLENBRGEsRUFJYixpREFKYSxDIiwiZmlsZSI6InJlZHVjZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5cblxuZnVuY3Rpb24gYXBwUmVkdWNlciAoIHN0YXRlPVtdLCBhY3Rpb24pe1xuICAgIHN3aXRjaChzdGF0ZSkgXG4gICAge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShcbiAgY29tYmluZVJlZHVjZXJzKHtcbiAgICBhcHA6IGFwcFJlZHVjZXIsXG4gIH0pLFxuICBhcHBseU1pZGRsZXdhcmUodGh1bmspXG4pO1xuIl19