import topEightReducer from './topEightReducer';
import topFourReducer from './topFourReducer';

// const redux = require('redux');
// const combineReducers = redux.combineReducers;

const rootReducer = {
    topEight: topEightReducer,
    topFour: topFourReducer
};

export default rootReducer;