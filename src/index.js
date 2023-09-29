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

// SAGAS

//fetches new gifs from giphy
function* fetchGifs(action) {
  try {
    console.log("in sagas fetchGifs")
    const gifResponse = yield axios.get("/api/giphy/" + action.payload); // 
    // console.log("SMOKE", gifResponse)
    yield put({ type: "SET_GIFS", payload: gifResponse.data.data });
  } catch (error) {
    console.log("error fetching gifs", error);
  }
}


// function* postFavoriteGifs(action) {
//   try {
//     // console.log (action.payload);
//     yield axios.post("/api/favorite", action.payload);
//     yield put({ type: "SET_GIFS", payload: {gif });
//   } catch (error) {
//     console.log("error posting fruit", error);
//   }
// }


// ...

function* postFavoriteGifs(action) {
  try {
    yield axios.post("/api/favorite", action.payload);

    // Dispatch a SET_GIFS action with an appropriate payload if needed
    // Replace 'payloadValue' with the actual payload you want to send
    yield put({ type: "SET_GIFS", payload: action.payload });
  } catch (error) {
    console.log("Error posting GIF", error);
  }
}

// Watch for a specific action to trigger the postFavoriteGifs saga
function* watchPostFavoriteGifs() {
  yield takeLatest('POST_FAVORITE_GIFS', postFavoriteGifs);
}






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
  yield takeLatest("FETCH_GIFS", fetchGifs);
  yield takeLatest("ADD_FAVORITE_GIFS", postFavoriteGifs);
//   yield takeLatest("DELETE_FRUIT", deleteFruit);

  
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// This function (our reducer) will be called when an
// action is dipatched. state = ['Apple'] sets the default
// value of the array.





// REDUCER
const newGifs = (state = [{url: "", images: {original: {url: ""}}}], action) => {
  switch (action.type) {
    case "SET_GIFS":
      return action.payload;
    default:
      return state;
  }
};

const favoriteGifs = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
console.log('whats action.payload', action.payload);  
      return action.payload;
    default:
      return state;
  }
};



const storeInstance = createStore(
  combineReducers({
    newGifs, //JD init, change this
    favoriteGifs,
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
