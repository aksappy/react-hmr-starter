import React, { useState, useEffect, useContext } from 'react';
import {StateContext} from '../context';
import Dummy from './dummy.jsx'

function LHS() {
  const [count, setCount] = useState(42);
  const [msg, setMsg] = useState('Empty');

  useEffect(() => {
      setMsg(`Clicked ${count} times`);
  });
  return (
    <div>
      <span>
        <Dummy />
      </span>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default LHS;
