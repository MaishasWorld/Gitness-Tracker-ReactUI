import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser, getUser } from "../api/indexAPI";

const Login = ({setIsLoggedIn, setToken, setUser, token }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = await loginUser(username, password);
        console.log(data);
        const token = data.token;
        if(data.token) {
            setToken(data.token);
            //currentUser.data?
            setUser(data.user);
            setIsLoggedIn(true);
            localStorage.setItem('token', token);
        }
        setUsername('');
        setPassword('');
        navigate('/myroutines');
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
                <input required type='text' placeholder='username' value={username} autoComplete='on' onChange={(event) => setUsername(event.target.value)}></input>
                <input required type='text' placeholder='password' value={password} autoComplete='on' onChange={(event) => setPassword(event.target.value)}></input>
                <button type='submit'>Login</button>
                <p>Don't have an Account? <NavLink to="/register">Register Here</NavLink></p>
        </form>
        </>
    )
}

export default Login;