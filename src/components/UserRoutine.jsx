import React, { useState } from 'react';
import { useParams, NavLink, } from 'react-router-dom';
import { removeRoutineActivity, addActivityToRoutine } from '../api/indexAPI';

const UserRoutine = ({ myRoutines, allActivities, setAllActivities}) => {
    const id = Number(useParams().id);
    const routine = myRoutines.find(routine => routine.id === id);
    const [activityId, setActivityId] = useState(0);
    const [count, setCount] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
            const data = await addActivityToRoutine(routine, activityId, count, duration); 
        setCount('');
        setDuration('');

    }

    if(routine) {
    return (
        <>
            <h1>Workout: {routine.name}</h1>
            <h2>By: {routine.creatorName}</h2>
            <h3>Goal: {routine.goal}</h3>
            {routine.activities.map(activity => {
                return(
                    <div key={activity.id}>
                        <h4>Activity: {activity.name}</h4>
                        <p>{activity.description}</p>
                        <ul>
                            <li>Time: {activity.duration}</li>
                            <li>Reps: {activity.count}</li>
                        </ul>
                        <button onClick={ async () => {
                            const routineActivityToDelete = await removeRoutineActivity(activity);
                            if(!routineActivityToDelete.error) {
                                const newActivities = allActivities.filter((activity) => activity.id !== routineActivityToDelete.id)
                                setAllActivities(newActivities);
                            };
                            }}>Delete Activity</button>
                    </div>
                )
            })}
            <form onSubmit={handleSubmit}>
                <select onChange={ (event) => {setActivityId(event.target.value)}}>
                    {allActivities.map(activity => {
                        return <option key={activity.id} value={activity.id}>{activity.name}</option>
                    })}
                </select>
                <input type="text" placeholder="count" value={count} onChange={(event) => setCount(event.target.value)}/>
                <input type="text" placeholder="duration" value={duration} onChange={(event) => setDuration(event.target.value)}/>
                <button type="submit">Add Activity</button>
            </form>
        
        </>
    )};
};

export default UserRoutine;


