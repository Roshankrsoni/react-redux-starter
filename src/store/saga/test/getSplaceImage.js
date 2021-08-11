import axios from 'axios'
import { takeLatest, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { history } from '../../../utils/history'

// import { UNAUTHENTICATED_ERROR } from '../../../constants/defaults'
import { getImages } from '../../apis/test/splaceApis'

import {
  GET_SPLACE_IMAGE_START,
  GET_SPLACE_IMAGE_SUCCESS,
  GET_SPLACE_IMAGE_ERROR
} from '../../action/test/actionTypes'

function* getSplceImagesSaga({ page }) {
  try {
    const response = yield axios.get(getImages(page))
    const result = yield response.data
    yield put({
      type: GET_SPLACE_IMAGE_SUCCESS,
      payload: result
    })

    if (result.length) {
      toast.success('Success')
    }
  } catch (error) {
    console.log('error====>', error)
    yield put({
      type: GET_SPLACE_IMAGE_ERROR,
      payload: 'Something went wrong'
    })
    if (
      error.response &&
      error.response.data.error
      // &&  error.response.data.error === UNAUTHENTICATED_ERROR
    ) {
      history.push('/login')
    }
    if (error.response && error.response.data.message) {
      toast.error(error.response.data.message)
    } else {
      toast.error('Error')
    }
  }
}

export function* watchGetSplceImagesSaga() {
  yield takeLatest(GET_SPLACE_IMAGE_START, getSplceImagesSaga)
}
