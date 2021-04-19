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
// initial store
const initialStore = {
  count: 78
}
// reducer
function reducer(state, action){
  console.log({state, action})
  return state
}
// store
const store = createStore(reducer, initialStore)
console.log(store.getState())


function App(){
  // cart setup
return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
