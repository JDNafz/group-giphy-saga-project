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
    const gifResponse = yield axios.get("/api/giphy/" + action.payload);
    try {
      yield put({ type: "SET_GIFS", payload: gifResponse.data.data });
    } catch {
      console.log("failed to SET_GIFS", error);
    }
  } catch (error) {
    console.log("error fetching gifs", error);
  }
}

function* postFavorite(action) {
  try {
    // yield console.log("IN postFavorite", action.payload);
    yield axios.post("/api/favorite", action.payload);
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
//   yield takeLatest("ADD_GIFS", postGifs);
//   yield takeLatest("DELETE_FRUIT", deleteFruit);

  
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// This function (our reducer) will be called when an
// action is dipatched. state = ['Apple'] sets the default
// value of the array.

// REDUCER
const newGifs = (state = [{ url: "", title: "" }], action) => {
  switch (action.type) {
    case "SET_GIFS":
      //only save the img and the title(a.k.a. description in state)
      const images = action.payload.map((file) => {
        return {
          url: file.images.original.url,
          title: file.title,
        };
      });
      return images;
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
