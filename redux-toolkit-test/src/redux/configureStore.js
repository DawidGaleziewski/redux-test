// Combine all reducers and slices

import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import {watcherSaga} from './sagas/rootSaga';

// Slices
import counterSlice from "./CounterSlice";
import UserSlice from './UserSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    counter: counterSlice,
    user: UserSlice
})
const store = configureStore({
    reducer,
    // We can disable middleware here. first we can get all default middleware and then disable one we dont want
    // We can also add other middleware like saga
    middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
});
sagaMiddleware.run(watcherSaga)

export default store;