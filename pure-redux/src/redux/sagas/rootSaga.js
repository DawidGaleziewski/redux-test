import {takeLatest} from 'redux-saga/effects';
import { handleGetUser } from './handlers/user';
import { GET_USER } from '../ducks/user';


// Generator function in saga
export function* watcherSaga(){
    // look for any actions that have been dispatched by our redux store. Those will be mapped to the handlers that will do the api calls
    yield takeLatest(GET_USER, handleGetUser)
}