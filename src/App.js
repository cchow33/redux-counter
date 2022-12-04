import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelect} from 'react-redux';
import {increment, decrement} from './redux'

function App(props) {
  return (
    <div>
      <h1>Redux Counter</h1>
        <h1>{props.count}</h1>
        <button onClick={props.increment}>-</button>
        <button onClick={props.decrement}>+</button>
    </div>
  )
}

export default App
