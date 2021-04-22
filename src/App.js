import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// reducer- function that used to update store
// two arguments - state, action
// state - old state/state before update
// action - what happened/ what update
// return updated or old state

import {createStore} from 'redux'
import {DECREASE, INCREASE} from './actions'
import reducer from './reducer'
// react-redux  - Provider -  wraps app, connect - used in components
import {Provider} from 'react-redux'
// dispatch method - send actions to the store
// actions (objects) - must have type property - what kind of action
// dont mutate the state - redux built on immutability

// store.getState() - 

// initial store
const initialStore = {
cart:cartItems,
total:0,
amount:0
}
// reducer
// function reducer(state, action){
//   console.log({state, action})
//   if(action.type === DECREASE){
//     return {...state,count: state.count -1}

//   }
//   if(action.type === INCREASE){
//     return {...state,count: state.count +1}

//   }
  
//   return state
// }
// store
const store = createStore(reducer, initialStore)
console.log(store.getState())


function App(){
  // cart setup
return (
    <Provider store={store}>
      
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
