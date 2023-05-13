import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function MainNavigation() {
    const userCtx = useContext(UserContext);

    function logoutHandler() {
        console.log('logout');

        fetch('http://localhost:4000/users/sign_out', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice_token')}`
            }
        })
        .then(response => {
            if (response.ok) {
                localStorage.removeItem('practice_token');
                userCtx.userLogout();
            }   
        })
        .catch(error => {
            console.log('logout error:', error);
        });
    }

    let userWelcome = userCtx.user ? userCtx.user.username : 'Guest';

    return (
        <nav className="main-navigation">
            <div>
                <h3>Welcome {userWelcome}</h3>
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