import { UPDATE_TOP_FOUR_LINEUP } from './types'

export const updateTopFourLineup = (newLineup = []) => {
    return {
        type: UPDATE_TOP_FOUR_LINEUP,
        info: 'Update list of battlers in top 4',
        payload: newLineup
    }
}