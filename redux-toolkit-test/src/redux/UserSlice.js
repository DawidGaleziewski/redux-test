import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: null
    },
    reducers: {
        // we can just add empty function as this will not really do anything. It will just call our http call
        getUser(state, action){},
        setUser(state, action){
            // set user state after it was fetched
            const userData = action.payload;
            return {...state, ...userData}
        }
    }
})

// Actions and the reducer can be found on the object returned by createSlice. We do not want to import whole slice
export const {getUser, setUser} =  userSlice.actions;
export default  userSlice.reducer