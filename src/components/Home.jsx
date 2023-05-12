import React from "react";
import './Home.css';

const Home = ({isLoggedIn, user}) => {
    return(
        <>
        {isLoggedIn || localStorage.token ? 
            (<>
            <h1 id='startup'>Hello, {user.username}!</h1>

            </>) 
            : 
            (<>
            <h1 id='welcome'>Welcome To Fitness Tracker!</h1>
            <p id='register'>Sign in OR Register to create your workouts!</p>
            </>)
        }
        </>
    )
}

export default Home;