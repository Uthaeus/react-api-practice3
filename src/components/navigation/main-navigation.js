import { NavLink } from "react-router-dom";

function MainNavigation() {

    function logoutHandler() {
        console.log('logout');
    }

    return (
        <nav className="main-navigation">
            <div>
                Title
            </div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/meetups">Meetups</NavLink>
                <NavLink to="/products">Products</NavLink>
            </div>

            <div>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                <button onClick={logoutHandler}>Logout</button>
            </div>
        </nav>
    );
}

export default MainNavigation;