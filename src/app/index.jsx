import React, { Component, createContext } from 'react';
import LHS from './components/lhs.jsx';
import RHS from './components/rhs.jsx';
import { StateContext } from './context/index';

export default class App extends Component {
  render() {
    let value = { name: 'AK' };
    return (
      <div style={{ fontSize: 18 }}>
        <StateContext.Provider value={value}>
          <span>
            <LHS />
          </span>
          <span>
            <RHS />
          </span>
        </StateContext.Provider>
      </div>
    );
  }
}
