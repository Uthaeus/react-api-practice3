import { NavLink } from "react-router-dom";

function MainNavigation() {

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
                auth
            </div>
        </nav>
    );
}

export default MainNavigation;