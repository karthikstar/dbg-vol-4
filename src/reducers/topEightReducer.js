import { UPDATE_TOP_EIGHT_LINEUP } from '../actions/types';

const initialState = {
    topEightBattlersList: [
        { name: "wonwoo" },
        { name: "mingyu" },
        { name: "jeonghan" },
        { name: "hoshi" },
        { name: "joshua" },
        { name: "scoups" },
        { name: "woozi" },
        { name: "DK" }
    ],
    numTest: 6
}

const topEightReducer = (state = initialState, action) => {
    switch(action.type) {
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



export default topEightReducer;