import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import { decrement } from './redux/counterSlice';
import { increment } from './redux/counterSlice';

function App() {

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
    <div className='App'>
      <div className="counter">
        <button id="decrease" onClick={()=> dispatch(decrement())}>-</button>
        <div className="count">{counter}</div>
        <button id="increase" onClick={()=> dispatch(increment())}>+</button>
      </div>
    </div>
    </>
  );
}

export default App
