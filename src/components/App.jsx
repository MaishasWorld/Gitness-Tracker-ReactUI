import React, { useState, useEffect } from "react";
import {
    Navbar,
    Home,
    AllRoutines,
    Routine,
    UserRoutines,
    AllActivities,
    Login,
    Register,
    CreateRoutine,
    EditRoutine,
    UserRoutine,
    CreateActivity
} from ".";
import { Routes, Route } from "react-router-dom";
//import { getAllRoutines } from "../api/indexAPI";

const App = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [user, setUser] = useState({});
const [token, setToken] = useState(localStorage.token);
const [allRoutines, setAllRoutines] = useState([]);
const [myRoutines, setMyRoutines] = useState([]);
const [allActivities, setAllActivities] = useState([]);


//What is this called?
// useEffect(() => {
//     const getAllPublicRoutines = async () => {
//       const routines = await getAllRoutines();
//       setAllRoutines(routines);
//     };
//     getAllPublicRoutines();
// }, []);

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
                    setAllRoutines = {setAllRoutines}
                    />
                }
            />
            <Route
                path="/myroutines"
                element= {
                    <UserRoutines 
                    user={user}
                    myRoutines={myRoutines}
                    setMyRoutines={setMyRoutines}
                    allRoutines={allRoutines}
                    setAllRoutines={setAllRoutines}
                    />
                }
            />
            <Route
                path="/activities"
                element= {
                    <AllActivities 
                        allActivities={allActivities}
                        setAllActivities={setAllActivities}
                        isLoggedIn={isLoggedIn}
                        token={token}
                    />
                }
            />
            <Route
                path="/login"
                element= {
                    <Login 
                        setToken={setToken}
                        setUser={setUser}
                        setIsLoggedIn={setIsLoggedIn}
                        token={token}
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
                        token ={token} 
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
            <Route
                path="/myroutines/:id"
                element={
                    <UserRoutine
                        myRoutines={myRoutines}
                    />
                }
            />
            <Route
                path="/myroutines"
                element={
                    <CreateRoutine 
                        token={token}
                        myRoutines={myRoutines}
                        setMyRoutines={setMyRoutines}
                        allRoutines={allRoutines}
                        setAllRoutines={setAllRoutines}
                        user={user}
                    />
                }
            />
            <Route
                path="/activities/new"
                element={
                    <CreateActivity 
                        token={token}
                        allActivities={allActivities}
                        setAllActivities={setAllActivities}
                    />
                }
            />

            
            <Route
                path="/routines/:id/edit"
                element= {
                    <EditRoutine 
                    token={token}
                    myRoutines={myRoutines}
                    setMyRoutines={setMyRoutines}
                    allRoutines={allRoutines}
                    setAllRoutines={setAllRoutines}
                    user={user}
                    />

                }
            />
        </Routes>
    </>
 )
}

export default App;