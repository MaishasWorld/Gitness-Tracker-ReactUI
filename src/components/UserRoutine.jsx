import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { removeRoutineActivity } from '../api/indexAPI';

const UserRoutine = ({ myRoutines}) => {
    const id = Number(useParams().id);
    const routine = myRoutines.find(routine => routine.id === id);
    const [userRoutine, setUserRoutine] = useState({});
      
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
                        <button>Edit Activity</button>
                        <button onClick={ async () => {
                            const routineActivityToRemove = await removeRoutineActivity(activity);
                            // if(!routineActivityToRemove.error) 
                                                       
                            // {
                            //     const newRoutineActivities = await getRoutineActivities(user)
                            //     setMyRoutines(newUserRoutines);
                            // }
                            navigate(`/myroutines/:id`);
                            }}
                        
                        >Delete Activity</button>
                    </div>
                )
            })}
            <>Form</>
            <button>Add Activity</button>
        </>
    )};
};

export default UserRoutine;