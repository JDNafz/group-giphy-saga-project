import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DisplayItems from "../DisplayItems/DisplayItems";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function SearchForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const fetchGifs = () => {
    dispatch({ type: "FETCH_GIFS", payload: searchTerm });
    history.push("/DisplayItems");
  };

    // const fetchFruit = () => {
    //   dispatch({ type: "FETCH_FRUIT"})
    // }

  // Displays the fruit selection buttons on the DOM
  return (
    <div>
      <input
        id="inputField"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={(event) => fetchGifs()}>Search</button>
    </div>
  );
}
