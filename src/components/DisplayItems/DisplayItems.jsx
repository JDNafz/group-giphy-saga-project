import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";





function DisplayItems() {
      const history = useHistory();
      const dispatch = useDispatch();


  const newGifs = useSelector((state) => state.newGifs);
  console.log("WATER:", newGifs[0]);
  const url0 = newGifs[0];


  const addToFavorites = (thing) => {
    // Dispatch an action to add the GIF to favorites
    dispatch({ type: "ADD_TO_FAVORITES", payload: thing });
  };
  return (
    <>
      <div>
        {newGifs.map((thing) => {
          return (
            <>
             <button onClick={() => addToFavorites(thing)}>Add to favorites</button>
             <br></br>
              <img
                key={thing.url}
                src={thing.images.original.url}
                alt="gif"
              ></img>
             
            </>
          );
        })}
      </div>
    </>
  );
}

export default DisplayItems;
