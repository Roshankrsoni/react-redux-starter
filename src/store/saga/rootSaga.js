import { all, fork } from 'redux-saga/effects'
/**
 * Admin
 */
import { watchGetSplceImagesSaga } from './test/getSplaceImage'

export default function* rootSaga() {
  yield all([
    /**
     * Admin
     */

    fork(watchGetSplceImagesSaga)
  ])
}
