// Combine all reducers and slices

import counterSlice from "./CounterSlice";

import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';

const reducer = combineReducers({
    counter: counterSlice
})
const store = configureStore({
    reducer,
    // We can disable middleware here. first we can get all default middleware and then disable one we dont want
    middleware: [...getDefaultMiddleware({thunk: false})]
});

export default store;