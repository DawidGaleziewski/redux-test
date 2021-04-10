import {takeLatest} from 'redux-saga/effects';
import {handleGetUser} from "./handlers/user";
import {getUser} from "../UserSlice";

export function* watcherSaga(){
    // we want to pass type value of getUser. It converts to user/GetUser
    yield takeLatest(getUser.type, handleGetUser);
}