import { configureStore } from '@reduxjs/toolkit'

// 1. ACTION CREATORS
function increment(){
  return {
    type: 'INCREMENT'
  }
}

function decrement(){
  return {
    type: 'DECREMENT'
  }
}

// 2. REDUCERS
function incrementReducer(count = 0, action) {
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
const store = createStore(reducer)

// 4. Set up the SUBSCRIBE function to see changes in the STORE
store.subscribe(() => console.log(store.getState()))

// 5. Export the store as a default export
export default store