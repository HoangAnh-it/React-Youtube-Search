import { NavLink } from 'react-router-dom';
import '../styles/Nav.scss';

const Nav = () => {
    return (
        <>
            <div className="topnav">
                <NavLink activeclassname="active" to="/">Home</NavLink>
                <NavLink activeclassname="active" to="/search">Search</NavLink>
            </div>
        </>
    )
}

export default Nav;
