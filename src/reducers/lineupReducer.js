import { UPDATE_TOP_EIGHT_LINEUP } from '../actions/types';
import { UPDATE_TOP_FOUR_LINEUP } from '../actions/types';
import { UPDATE_TOP_TWO_LINEUP } from '../actions/types';
import { saveState } from '../localStorage'

const initialState = {
    topTwoBattlersList: [
        { name: "" },
        { name: "" },
        { name: "" }  
    ],
    topFourBattlersList: [
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" }
    ],
    topEightBattlersList: [
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" }
    ]
}

const lineupReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_TOP_TWO_LINEUP: 
            {return action.payload.length == 0 ?
                {...state} :
                {
                    ...state,
                    topTwoBattlersList: action.payload
                }
            }
        case UPDATE_TOP_FOUR_LINEUP: 
            {return action.payload.length == 0 ?
                {...state} :
                {
                    ...state,
                    topFourBattlersList: action.payload
                }
            }
        case UPDATE_TOP_EIGHT_LINEUP: 
            {return action.payload.length == 0 ?
                {...state} :
                {
                    ...state,
                    topEightBattlersList: action.payload
                }
            }
        default:
            return state;
    }
} 

export default lineupReducer;