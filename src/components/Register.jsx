import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, getUser } from "../api/indexAPI";

const Register = ({setIsLoggedIn, setToken, setUser, token}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = await registerUser(username, password);
        if(data.token) {
            setToken(data.token);
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
            <h2>New User Registration</h2>
                <input required type='text' placeholder='username' value={username} onChange={(event) => setUsername(event.target.value)}></input>
                <input required type='text' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <button type='submit'>Sign Up & In</button>
        </form>
        </>
    )
}

export default Register;