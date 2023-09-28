import React from 'react';
// import axios from 'axios';
import { HashRouter as Router, Route } from "react-router-dom";

import './App.css';
// import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar'
import DisplayItems from '../DisplayItems/DisplayItems'
import searchBar from '../SearchBar/SearchBar'


function App(props) {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchMenu()
  // }, [])

  // const fetchMenu = () => {
  //   axios.get('/api/pizza')
  //     .then((result) => {
  //       console.log('GET /api/pizza success', result.data);

  //       dispatch({
  //         type: 'MENU_REFRESH',
  //         payload: result.data
  //       });
  //     })
  //     .catch((err) => {
  //       console.log('GET /api/pizza fail', err);
  //     })
  // }


  return (
    <Router>
      <div className='App'>
          
        <Route path="/">
            <navBar />
          </Route>

          <Route path="/" exact>
            <displayItems />
          </Route>

          <Route path="/" exact>
            <searchBar />
          </Route>
{/* Extra Routes 
          <Route path="/checkout" exact>
            <CheckoutPage />
          </Route>

          <Route path="/admin" exact>
            <AdminPage />
          </Route> */}
          </div>
    </Router>

  );
}

export default App;
