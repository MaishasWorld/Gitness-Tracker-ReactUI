import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { editRoutine, getUserRoutines } from '../api/indexAPI';
// import {CreateRoutine} from '.';

const EditRoutine = ({myRoutines, setMyRoutines, setAllRoutines, allRoutines}) => {
    const id = Number(useParams().id);
    const routine = myRoutines.find(routine => routine.id === id);
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    console.log(routine); //routine object from routine id param match
    const navigate = useNavigate()
    const handleChanges = async (event) => {
        event.preventDefault();
        const updatedRoutine = await editRoutine(id, {name, goal, isPublic});
        console.log(updatedRoutine);
        if (!updatedRoutine.error && updatedRoutine.id) {
            const changedRoutines = myRoutines.filter(item => item.name !== routine.name)
            setMyRoutines(changedRoutines);
            const changedAllRoutines = allRoutines.filter(item => item.name !== routine.name)
            setAllRoutines(changedAllRoutines);
            navigate('/myroutines');
        };
    }
    return (
        <form onSubmit={handleChanges}>
            <label>Routine Name</label><br/>
            <input placeholder="name" value={name}
            type="text" onChange={(event) => 
            setName(event.target.value)}/><br/>

            <label>Goal</label><br/>
            <input placeholder="goal" 
            value={goal} type="text" 
            onChange={(event) => setGoal(event.target.value)}/><br/>

            <label>Public/Private?</label><br/>
            <input type="checkbox" checked
            onChange={(event) => {
                if(event.target.checked) {
                    setIsPublic(true)
                } else {
                setIsPublic(false)}}}/><br/>

            <button type='submit'>Done Making Changes</button>
        </form>
    )
}

export default EditRoutine;