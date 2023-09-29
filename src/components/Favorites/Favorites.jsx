import React from 'react'
import { useSelector } from 'react-redux';


export default function Favorites() {

const favoriteGifs = useSelector((store) => store.favoriteGifs);

console.log('what is favorites', favoriteGifs);


  return (
  <>
    <h1>Displaying All Favorites</h1>
       <br></br>
       {favoriteGifs.map((thing) => {
          return (
            <>
             {/* <button onClick={() => removeFromFavorites(thing)}>Add to favorites</button> */}
             <br></br>
              <img
                key={thing.url}
                src={thing.images.original.url}
                alt="gif"
              ></img>
             
            </>
          );
        })}
  </>
  )
}



