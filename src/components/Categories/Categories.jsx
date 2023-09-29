import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
//favorites
//dispatch from favorites
//axios post call to server to create table 
//fetch 



export default function Categories() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('')
    const fetchGifCategories = () => {
      dispatch({ type: "FETCH_GIFS", payload: searchTerm})
      history.push('/DisplayItems')
    }


  return (
    <>
        <div>Categorie{pageName}</div>

    </>
  )
}
