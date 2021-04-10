import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, incrementBy } from './redux/CounterSlice';



function App() {
  const count = useSelector((state)=> state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
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
