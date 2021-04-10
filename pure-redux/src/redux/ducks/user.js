// We will fallow the ducks method for this
// When we want to dispatch get user from our component
export const GET_USER = 'GET_USER';
// When we want to dispatch set user to fetch the data once we have the user
const SET_USER = "SET_USER";

export const getUser = () => ({
    type: GET_USER
})

export const setUser = (user) => ({
    type: SET_USER,
    user
})

const initialState = {
    user: undefined
}

// Reducer that will set the data once the api call was done
export default (state = initialState, action) => {
    switch (action.type){
        case SET_USER:
            const {user} = action;
            return {...state, user}
        default:
            return state
    }
}