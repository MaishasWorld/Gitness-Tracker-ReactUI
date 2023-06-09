import React from 'react';
import { useParams } from 'react-router-dom';

const Routine = ({allRoutines, myRoutines}) => {
    const id = Number(useParams().id);
    const routine = allRoutines.find(routine => routine.id === id);
    console.log(routine)
    // const userRoutine = myRoutines.find(routine => routine.id === id);
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
                    </div>
                )
            })}
        </>
    )};
};

export default Routine;