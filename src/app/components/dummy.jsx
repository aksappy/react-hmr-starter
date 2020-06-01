import React, { useContext } from 'react';
import { StateContext } from '../context';

export default function Dummy() {
  const context = useContext(StateContext);

  return <b>{context.name}</b>;
}
