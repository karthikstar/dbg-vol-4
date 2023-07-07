import { UPDATE_TOP_FOUR_LINEUP } from '../actions/types';

const initialState = {
    topFourBattlersList: [
        { id: '1', name: 'syasya' },
        { id: '2', name: 'ggg'}
    ]
}

const topFourReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_TOP_FOUR_LINEUP: return {
            ...state,
            topFourBattlersList: state.topFourBattlersList
        }
        default: 
            return state;
    }
} 



export default topFourReducer;