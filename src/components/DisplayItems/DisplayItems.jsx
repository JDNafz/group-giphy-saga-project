import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import Header from '../Header/Header';

function displayItems() {

    // Get the menu from redux.
    // It didn't have to live in redux, but didn't plan very well and thought I may need to use it othe rplaces.
    // So I put it in redux.
    // By the time I realised I only use it here, there was no point in redoing it as a react variable here.
    // const navBar = useSelector(store => store.navBar);

    console.log('Display Items', );

    return (
        <>
            <div>   
            {/* <ul>
                {navBarOptions.map((navItem, index) =>
                    <MenuItem key={navItem.id} navItem={navItem} />
                )}
            </ul> */}
            </div>
        </>
    );
}

export default displayItems;