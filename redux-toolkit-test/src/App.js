import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, incrementBy } from './redux/CounterSlice';
import {getUser} from './redux/UserSlice';


function App() {
  const count = useSelector((state)=> state.counter);
  const user = useSelector((state)=> state.user)
  console.log(user)
  const dispatch = useDispatch();
  React.useEffect(()=> {
    dispatch(getUser({count}));

  }, [count])
  return (
    <div className="App">
        <p>User name is: {user.name} </p>
        <p>Count: {count}</p>
        <button onClick={()=> dispatch(increment()) }>
          increment
        </button>
        {/*  Adding payload */}
        <button onClick={()=> dispatch(incrementBy({byValue: 5})) }>
          increment by 5
        </button>
    </div>
  );
}

export default App;
