// Will combine all ducks and middle ware and combine it in redux
import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './ducks/counter';
import userReducer from "./ducks/user";
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

// Run our watchers/listeners.
// We want anything that is in the generator function to be running in the background waiting to be dispatched
sagaMiddleware.run(watcherSaga)

export default store;