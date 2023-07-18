import { UPDATE_SUIT_POINTS } from './types'

export const updateSuitPoints = (newPointsList = []) => {
    return {
        type: UPDATE_SUIT_POINTS,
        info: 'Update number of points for suit',
        payload: newPointsList
    }
}