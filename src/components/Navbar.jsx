import React from "react";
import { NavLink, useNavigate} from "react-router-dom";
import './Navbar.css';

const Navbar = ({isLoggedIn, setIsLoggedIn, setUser, setToken,}) => {
    const navigate = useNavigate();
    return (
        <>
            <nav>
                <h1 id='header'>Fitness Tracker</h1>
                {isLoggedIn || localStorage.token ? (
                    <>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/routines">All Routines</NavLink>
                        <NavLink to="/myroutines">My Routines</NavLink>
                        <NavLink to="/activities">Activities</NavLink>
                        <button id='logout-button'
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