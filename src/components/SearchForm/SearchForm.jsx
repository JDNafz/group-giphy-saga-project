import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


export default function SearchForm(){
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('')
    const addFruit = () => {
      dispatch({ type: "ADD_FRUIT", payload: searchTerm})
    
    }

    const fetchFruit = () => {
      dispatch({ type: "FETCH_FRUIT"})
    }

    // Displays the fruit selection buttons on the DOM
    return (
        <div>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <button onClick={(event) => fetchFruit()}>Search</button>
        </div>
    )
}


