import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1,
        // Pasing payload
        incrementBy: (state,action) => {
            const {byValue} = action.payload;
            return state + byValue
        }
    }
})

// Actions and the reducer can be found on the object returned by createSlice. We do not want to import whole slice
export const {increment, decrement, incrementBy} = counterSlice.actions;
export default counterSlice.reducer