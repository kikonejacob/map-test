import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


function appReducer ( state=[], action){
    switch(state) 
    {
        default:
            return state;
    }
}


export default createStore(
  combineReducers({
    app: appReducer,
  }),
  applyMiddleware(thunk)
);
