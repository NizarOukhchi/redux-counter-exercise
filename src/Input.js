import React from 'react';
import { useDispatch } from 'react-redux';

const Input = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: 20 }}>
      <input
        onChange={(e) =>
          dispatch({
            type: 'UPDATE',
            payload: e.target.value,
          })
        }
      />
    </div>
  );
};

export default Input;
