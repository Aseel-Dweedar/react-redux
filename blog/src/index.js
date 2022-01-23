import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// Provider holding the App
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index"
// importing redux thunk with allow us to return a function that auto called with (dispatch) and (getState) argument 
// we need it if we need to reach outside our redux store // API requests
// every time we dispatch an action will pass to redux thunk first then will send to reducers
import thunk from "redux-thunk"

// Apply Middleware to our redux app
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store} > <App /> </Provider>, document.querySelector("#root"));