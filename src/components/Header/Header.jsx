import { useSelector } from 'react-redux';

function Header({ pageName }) {

    const orderTotal = useSelector(store => store.orderTotal);

    return (
        <header className='App-header'>
            {/* <img src="../../" alt="" /> */}
            <h1 className='App-title'>{pageName}</h1>
        </header>
    );

}
export default Header;
