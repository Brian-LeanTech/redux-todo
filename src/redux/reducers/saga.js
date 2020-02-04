import { call, put, takeEvery /*takeLatest*/ } from 'redux-saga/effects'

function* fetchMock(action) {
    try {
        const user = yield call(Api.fetchMock, action.payload)
        yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (error) {
        yield put({ type: 'USER_FETCH_FAILED', message: error.message })
    }
}

function* mySaga() {
    yield takeEvery('USER_FETCH_REQUEST', fetchMock)
}

export default mySaga
