import { useSelector } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './NavBar.css'

function NavBar() {
    const navBar = useSelector(store => store.navBar);

    console.log('navBar', navBar);

    return (
        <>
            <div className='nav'>   
                    <Link to={"/"}><div>Favorites</div></Link>
                    <Link to={"/favorites"}><div>Search</div></Link>
            </div>
        </>
    );
}

export default NavBar;