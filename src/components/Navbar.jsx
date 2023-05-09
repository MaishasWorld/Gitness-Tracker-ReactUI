import React from "react";
import { NavLink, useNavigate} from "react-router-dom";

const Navbar = ({isLoggedIn}) => {
    const navigate = useNavigate();
    return (
        <>
            <nav>
                <h1>Fitness Tracker</h1>
                {isLoggedIn ? (
                    <>
                        <NavLink to="/routines">All Routines</NavLink>
                        <NavLink to="/myroutines">My Routines</NavLink>
                        <NavLink to="/activities">Activities</NavLink>
                        <button
                            onClick={() => {
                                setIsLoggedIn(false);
                                setUser({});
                                setToken("");
                                localStorage.removeItem("token");
                                navigate("/");
                            }}
                        >Logout</button>
                    </>
                ) : (
                    <>
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/routines">All Routines</NavLink>
                      <NavLink to="/login">Login</NavLink>
                      <NavLink to="/activities">Activities</NavLink> 
                    </>
                )}
            </nav>
        </>
    );
};

export default Navbar;