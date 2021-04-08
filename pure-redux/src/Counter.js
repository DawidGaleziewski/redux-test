import React from 'react';
//  to read variable we need useSelector
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment } from './redux/ducks/counter';

const Counter = ()=> {
    // we want to get a reducer that the variable is inside off
    const count = useSelector(state => state.counter.count);

    // we need hook to dispatch a action
    const dispatch = useDispatch(); // allows us to call any functions in our redux. 
    const handleIncrement = () => {
        dispatch(increment())
    };

    const handleDecrement = () => {
        dispatch(decrement())
    }

    console.log('counter is: ', useSelector(state => state.counter))
    return <div>
        <span>{count}</span>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>decrement</button>
    </div>
}

export default Counter;