import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {connect} from 'react-redux';

// Connect
// connect ('What parts of state do you want?', 'What actions do you want to dispatch?') (Component)

// connect (mapStateToPropsFunc, mapDispatchToPropsFunc) (Component)

function App(props) {
  return (
    <div>
      <h1>Count Goes Here</h1>
      <button>-</button>
      <button>+</button>
    </div>
  );
}

export default App;
