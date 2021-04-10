import {call, put} from 'redux-saga/effects';
import {requestGetUser} from "../requests/user";
import {setUser} from '../../UserSlice';

export function* handleGetUser(action){
    console.log('handle user action is: ', action)
    try {
        // yield is similar to wait in this case
        const response = yield call(requestGetUser, action.payload);
        // we got the user data now we need to dispatch it to our user store
        const {data} = response;
        yield put(setUser({...data}))
    } catch (error){
        console.log(error)
    }
}