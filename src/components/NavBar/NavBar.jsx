import { useSelector } from 'react-redux';
// import { Link } from "react-router-dom";
// import Header from '../Header/Header';
// import MenuItem from '../MenuItem/MenuItem';

function navBar() {
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
                <span><button>Favorites</button></span>
                <span><button>Ducks</button></span>
                <span><button>General</button></span>
            </div>
        </>
    );
}

export default navBar;