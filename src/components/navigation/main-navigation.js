import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function MainNavigation() {
  const userCtx = useContext(UserContext);

  function logoutHandler() {
    console.log("logout");

    fetch("http://localhost:4000/users/sign_out", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("practice_token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          localStorage.removeItem("practice_token");
          userCtx.userLogout();
        }
      })
      .catch((error) => {
        console.log("logout error:", error);
      });
  }

  let userWelcome = userCtx.user ? userCtx.user.username : "Guest";

  return (
    <nav className="main-navigation">
      <div className="nav-title-wrapper">
        <h3 className="welcome-title">
          Welcome <span className="welcome-span">{userWelcome}</span>
        </h3>
      </div>
      <div className="nav-links-wrapper">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link link-active" : "nav-link"
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            isActive ? "nav-link link-active" : "nav-link"
          }
        >
          Posts
        </NavLink>
        <NavLink
          to="/meetups"
          className={({ isActive }) =>
            isActive ? "nav-link link-active" : "nav-link"
          }
        >
          Meetups
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link link-active" : "nav-link"
          }
        >
          Products
        </NavLink>
      </div>

      <div className="auth-links-wrapper">
        { !userCtx.user && (
            <>
                <NavLink
                to="/login"
                className={({ isActive }) =>
                    isActive ? "nav-link link-active" : "nav-link"
                }
                >
                Login
                </NavLink>
                <NavLink
                to="/signup"
                className={({ isActive }) =>
                    isActive ? "nav-link link-active" : "nav-link"
                }
                >
                Signup
                </NavLink>
            </>
        )}
        {userCtx.user && (
            <button className="logout-link" onClick={logoutHandler}>
                Logout
            </button>
        )}
      </div>
    </nav>
  );
}

export default MainNavigation;
