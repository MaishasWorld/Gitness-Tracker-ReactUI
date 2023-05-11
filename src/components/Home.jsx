import React from "react";

const Home = ({isLoggedIn, user}) => {
    return(
        <>
        {isLoggedIn || localStorage.token ? 
            (<>
            <h1>Hello, {user.username}!</h1>

            </>) 
            : 
            (<>
            <h1>Welcome To Fitness Tracker!</h1>
            <p>Sign in OR Register to create your workouts!</p>
            </>)
        }
        </>
    )
}

export default Home;