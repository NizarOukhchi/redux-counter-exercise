import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';
import Input from './Input';

import { INCREMENT, DECREMENT, ADD_TO_LIST } from './redux/actionTypes';

function App() {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input);
  const counter = useSelector((state) => state.counter.value);

  return (
    <div style={{ padding: 10 }}>
      <Counter />
      <button
        onClick={() => {
          dispatch({ type: INCREMENT });
          dispatch({ type: ADD_TO_LIST, payload: counter + 1 });
        }}
      >
        Increment
      </button>
      <button onClick={() => dispatch({ type: DECREMENT })}>decerement</button>
      <Input />

      <div>{input}</div>
    </div>
  );
}

export default App;
