import { UPDATE_TOP_FOUR_LINEUP } from '../actions/types';

const initialState = {
    topFourBattlersList: [
        { name: " " },
        { name: " " },
        { name: " " },
        { name: " " }
    ]
}

const topFourReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_TOP_FOUR_LINEUP: 
            {return action.payload.length == 0 ?
                {...state} :
                {
                    ...state,
                    topFourBattlersList: action.payload
                }
            }
        default: 
            return state;
    }
} 

export default topFourReducer;