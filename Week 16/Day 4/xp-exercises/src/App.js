import React, { Component } from 'react'
import Counter from './Counter';
import { createStore } from 'redux'
import counterReducer from './Reducer'
import { Provider } from 'react-redux'

let store = createStore(counterReducer)

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Counter />
    </div>
    </Provider>
  );
}

export default App;
