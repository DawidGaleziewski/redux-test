import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { useDispatch, useSelector} from "react-redux";
import {getUser} from "./redux/ducks/user";

function App() {

  const dispatch = useDispatch();

  // We can use the http call now by dispatching it
  React.useEffect(()=> {
    dispatch(getUser())
  }, [])

  // We can now get our user from the redux store. We are taking user value from user reducer
  const user = useSelector((state) => state.user.user)
  console.log('user is: ', user)

  return (
    <div className="App">
      <h2>User is: {user ? user.name : null} </h2>
        <Counter />
    </div>
  );
}

export default App;
