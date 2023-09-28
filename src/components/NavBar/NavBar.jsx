import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
// import MenuItem from '../MenuItem/MenuItem';

function NavBar() {
    const navBar = useSelector(store => store.navBar);

    console.log('navBar', navBar);

    return (
        <>
            <div>   
                {/* <ul>
                    {navBarOptions.map((navItem, index) =>
                        <MenuItem key={navItem.id} navItem={navItem} />
                    )}
                </ul> */}
                <SearchForm />
            </div>
        </>
    );
}

export default NavBar;