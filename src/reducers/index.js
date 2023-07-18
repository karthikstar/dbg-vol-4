import topEightReducer from './topEightReducer';
import topFourReducer from './topFourReducer';
import suitReducer from './suitReducer';

// const redux = require('redux');
// const combineReducers = redux.combineReducers;

const rootReducer = {
    topEight: topEightReducer,
    topFour: topFourReducer,
    suit: suitReducer
};

export default rootReducer;