import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from "./reducers/index";
import { createStore } from "redux";  

const state = {
  tech: "React"
};
const store = createStore(reducer, state);

class App extends Component {
  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
