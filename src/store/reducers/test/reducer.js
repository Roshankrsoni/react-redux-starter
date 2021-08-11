import {
  GET_SPLACE_IMAGE_SUCCESS,
  GET_SPLACE_IMAGE_ERROR,
  GET_SPLACE_IMAGE_START
} from '../../action/test/actionTypes'

const INITIAL_STATE = {
  Images: [],
  Loading: false
}

export const imageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /**
     * GET Images
     */
    case GET_SPLACE_IMAGE_START:
      return {
        ...state,
        Loading: true,
        Images: []
      }
    case GET_SPLACE_IMAGE_SUCCESS:
      return {
        ...state,
        Loading: false,
        Images: action.payload
      }
    case GET_SPLACE_IMAGE_ERROR:
      return {
        ...state,
        Loading: false,
        Images: []
      }

    default:
      return state
  }
}
