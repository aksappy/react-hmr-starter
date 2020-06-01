import React, { useContext } from 'react';
import { StateContext } from '../context';
import Dummy from './dummy.jsx'
function RHS() {
  const dummy = useContext(StateContext);

  return (
    <span>
       <Dummy />
    </span>
  );
}

export default RHS;
