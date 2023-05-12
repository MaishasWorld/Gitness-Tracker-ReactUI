import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { createActivity } from '../api/indexAPI';

const CreateActivity = ({token, allActivities, setAllActivities }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
       const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newActivity = await createActivity(name, description);
            console.log(newActivity)
        if(!newActivity.error && newActivity !== undefined) {
            setAllActivities([...allActivities, newActivity]);
        } else {
            alert('Activity Already Exists!')
        }
    
        setName('');
        setDescription('');
        navigate('/activities');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Make a New Activity</h4>
                <input required type='text' 
                  placeholder='Activity Name' value={name} 
                  onChange={(event) => setName(event.target.value)}>
                </input>

                <input required type='text' 
                  placeholder='Description' value={description} 
                  onChange={(event) => setDescription(event.target.value)}>
                </input>

                <button type='submit'>Create Activity</button>
        </form>
    );
};

export default CreateActivity