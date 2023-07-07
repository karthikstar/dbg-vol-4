import { UPDATE_TOP_EIGHT_LINEUP } from './types'

export const updateTopEightLineup = (newLineup = []) => {
    return {
        type: UPDATE_TOP_EIGHT_LINEUP,
        info: 'Update list of battlers in top 8',
        payload: newLineup
    }
}