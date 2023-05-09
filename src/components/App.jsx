import React, { useState, useEffect } from "react";
import {
    Navbar,
    Home,
    AllRoutines,
    Routine,
    UserRoutines,
    AllActivities,
    Login,
    Register
} from ".";
import { Routes, Route } from "react-router-dom";
import { getAllRoutines } from "../api/indexAPI";

const App = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [user, setUser] = useState({});
const [token, setToken] = useState(localStorage.token);
const [allRoutines, setAllRoutines] = useState([]);
const [myRoutines, setMyRoutines] = useState([]);
const [activities, setActivities] = useState([]);


//What is this called?
useEffect(() => {
    const getAllPublicRoutines = async () => {
      const routines = await getAllRoutines();
      setAllRoutines(routines);
    };
    getAllPublicRoutines();
}, []);

 return (
    <>
        <Navbar 
            setIsLoggedIn = { setIsLoggedIn }
            isLoggedIn = { isLoggedIn }
            setUser= { setUser }
            setToken= { setToken }
        />
        <Routes>
            <Route
                path="/"
                element= {
                    <Home 
                        user={user}
                        isLoggedIn={isLoggedIn}
                    />
                }
            />
            <Route
                path="/routines"
                element= {
                    <AllRoutines 
                    allRoutines = {allRoutines}
                    />
                }
            />
            <Route
                path="/myroutines"
                element= {
                    <UserRoutines />
                }
            />
            <Route
                path="/activities"
                element= {
                    <AllActivities />
                }
            />
            <Route
                path="/login"
                element= {
                    <Login 
                        setToken={setToken}
                        setUser={setUser}
                        setIsLoggedIn={setIsLoggedIn}
                    />
                }
            />
            <Route
                path="/register"
                element= {
                    <Register 
                        setIsLoggedIn ={setIsLoggedIn}
                        setToken ={setToken}
                        setUser ={setUser}
                    />
                }
            />
            <Route
                path="/routines/:id"
                element={
                    <Routine
                        allRoutines={allRoutines}
                    />
                }
            />
        </Routes>
    </>
 )
}

export default App;