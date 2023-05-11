import React, { useState} from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { createRoutine } from '../api/indexAPI';

const CreateRoutine = ({token, setMyRoutines, myRoutines, setAllRoutines, allRoutines }) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newRoutine = await createRoutine(name, goal, isPublic);
            console.log(newRoutine, "HI453453453453")
            if(!newRoutine.error && newRoutine !== undefined) {
            setMyRoutines([newRoutine, ...myRoutines]);
            setAllRoutines([newRoutine, ...allRoutines]);
        }
        setName('');
        setGoal('');
        navigate('/myroutines');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Make a New Routine</h4>
                <input required type='text' 
                  placeholder='Routine Name' value={name} 
                  onChange={(event) => setName(event.target.value)}>
                </input>

                <input required type='text' 
                  placeholder='Goal' value={goal} 
                  onChange={(event) => setGoal(event.target.value)}>
                </input>

                <input type="checkbox"
                onChange={(event) => {
                  if(event.target.checked) {
                    setIsPublic(true)
                  } else {
                    setIsPublic(false)}}}/> 

                <button type='submit'>Create Routine</button>
        </form>
    );
};


export default CreateRoutine