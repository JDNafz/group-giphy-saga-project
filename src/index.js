import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

// function* fetchFruit() {
//   try {
//     const fruitResponse = yield axios.get("/fruit"); // Next line is the .then( assuming no errors
//     // put() sends to somewhere in same document
//     yield put({ type: "SET_BASKET", payload: fruitResponse.data });
//   } catch (error) {
//     console.log("error fetching fruit", error);
//   }
// }
// function* postFruit(action) {
//   try {
//     // console.log (action.payload);
//     yield axios.post("/fruit", {fruit:action.payload});
//     yield put({ type: "FETCH_FRUIT" });
//   } catch (error) {
//     console.log("error posting fruit", error);
//   }
// }

// function* deleteFruit(action) {
//   try {
//     // console.log (action.payload);
//     yield axios.delete(`${action.payload}`);
//     yield put({ type: "FETCH_FRUIT" });
//   } catch (error) {
//     console.log("error deleting fruit", error);
//   }
// }


// SAGAS ALL GO HERE
function* rootSaga() {
//   yield takeLatest("FETCH_FRUIT", fetchFruit);
//   yield takeLatest("ADD_FRUIT", postFruit);
//   yield takeLatest("DELETE_FRUIT", deleteFruit);

  
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// This function (our reducer) will be called when an
// action is dipatched. state = ['Apple'] sets the default
// value of the array.




const ReducerName = (state = [], action) => {
  switch (action.type) {
    case "SCREAMER":
      return action.payload;
    default:
      return state;
  }
};

// REDUCERS GO HERE
const storeInstance = createStore(
  combineReducers({
    ReducerName, //JD init, change this
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
