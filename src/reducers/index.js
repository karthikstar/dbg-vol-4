import suitReducer from './suitReducer';
import lineupReducer from './lineupReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    suit: suitReducer,
    lineup: lineupReducer
});

export default rootReducer;