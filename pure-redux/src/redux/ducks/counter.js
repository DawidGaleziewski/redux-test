// Action names
// We want to add it to variable to avoid things like spelling errors
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// Function for the action
export const increment = () => ({
    type: INCREMENT
})

export const decrement = ()=> ({
    type: DECREMENT
})

// State
const initialState = {
    count: 0
}

// Reducer
// Good to set up our default state to initial state just in case
export default (state = initialState, action)=> {
    switch(action.type){
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}