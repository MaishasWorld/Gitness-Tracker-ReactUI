import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser, getUser } from "../api/indexAPI";

const Login = ({setIsLoggedIn, setToken, setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { data } = await loginUser(username, password);
        const currentUser = await getUser(data.token);
        
        if(data.token) {
            setToken(data.token);
            //currentUser.data?
            setUser(currentUser);
            setIsLoggedIn(true);
            localStorage.setItem('token', data.token);
        }
        setUsername('');
        setPassword('');
        navigate('/myroutines');
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
                <input required type='text' placeholder='username' value={username} onChange={(event) => setUsername(event.target.value)}></input>
                <input required type='text' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <button type='submit'>Login</button>
                <p>Don't have an Account? <NavLink to="/register">Register Here</NavLink></p>
        </form>
        </>
    )
}

export default Login;