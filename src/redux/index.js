import { configureStore } from '@reduxjs/toolkit'
import redux  from "redux"

// 1. ACTION CREATORS
export function increment(){
  return {
    type: 'INCREMENT'
  }
}

export function decrement(){
  return {
    type: 'DECREMENT'
  }
}

// 2. REDUCERS
function reducer(count = 0, action) {
  switch(action.type) {
    case "INCREMENT":
      return count + 1
    case "DECREMENT":
      return count - 1
    default:
      return count
    }
};

// 3. Create a new REDUX STORE
const store = configureStore(reducer) 

// 4. Set up the SUBSCRIBE function to see changes in the STORE
store.subscribe(() => console.log(store.getState()))

// 5. Export the store as a default export
export default store