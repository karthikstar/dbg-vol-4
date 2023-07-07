import { UPDATE_TOP_FOUR_LINEUP } from './types'

export const updateTopFourLineup = () => {
    return {
        type: UPDATE_TOP_FOUR_LINEUP,
        info: 'Update list of battlers in top 4'
    }
}