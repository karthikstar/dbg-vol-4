import { UPDATE_DIAMOND_SUIT_POINTS } from '../actions/types';
import { UPDATE_HEART_SUIT_POINTS } from '../actions/types';
import { UPDATE_CLUB_SUIT_POINTS } from '../actions/types';
import { UPDATE_SPADE_SUIT_POINTS } from '../actions/types';
import { UPDATE_SUIT_POINTS } from '../actions/types';

// suit points order : diamond, club, heart, spade
const initialState = {
    suitPointsList: [
        { points: "0" },
        { points: "0" },
        { points: "0" },
        { points: "0" }
    ]
}

const suitReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_SUIT_POINTS:
            {return action.payload.length == 0 ?
                {...state} :
                {
                    ...state,
                    suitPointsList: action.payload
                }
            }
        default: 
            return state;
    }
} 

export default suitReducer;