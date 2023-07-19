import { UPDATE_TOP_EIGHT_LINEUP } from './types'
import { UPDATE_TOP_FOUR_LINEUP } from './types'
import { UPDATE_TOP_TWO_LINEUP } from './types'

export const updateTopEightLineup = (newLineup = []) => {
    return {
        type: UPDATE_TOP_EIGHT_LINEUP,
        info: 'Update list of battlers in top 8',
        payload: newLineup
    }
}

export const updateTopFourLineup = (newLineup = []) => {
    return {
        type: UPDATE_TOP_FOUR_LINEUP,
        info: 'Update list of battlers in top 4',
        payload: newLineup
    }
}

export const updateTopTwoLineup = (newLineup = []) => {
    return {
        type: UPDATE_TOP_TWO_LINEUP,
        info: 'Update list of battlers in top 2',
        payload: newLineup
    }
}