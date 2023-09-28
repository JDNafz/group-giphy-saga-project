import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Header from '../Header/Header';

function DisplayItems() {
    const itemToDisplay = useSelector(state => state.itemToDisplay);

    return (
        <>
            <div>
                {itemToDisplay.map((item, index) => (
                    <div key={index} className="itemContainer">
                        {/* Render the item content here */}
                    </div>
                ))}
            </div>
        </>
    );
}

export default DisplayItems;