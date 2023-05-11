import React, {useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {getUserRoutines, removeRoutine} from '../api/indexAPI';
import {CreateRoutine } from '.';

const UserRoutines = ({user, myRoutines, setMyRoutines}) => {
const navigate = useNavigate();

useEffect(() => {
    const getAllUserRoutines = async () => {
    const userRoutines = await getUserRoutines(user);
    console.log(userRoutines);
    console.log(user);
    setMyRoutines(userRoutines)
    };
    getAllUserRoutines();
},[])

console.log(myRoutines)
return (
    <>
    <CreateRoutine />
    {user.username && myRoutines.length > 0 ?
      <>
        {myRoutines.map((routine) => {
            return(
                <div key={routine.id}>
                   <NavLink to={`/myroutines/${routine.id}`}><h4>{routine.name}</h4></NavLink>
                   <p>{routine.creatorName}</p>
                   <p>{routine.goal}</p>
                   <button onClick={() => {
                    navigate(`/routines/${routine.id}/edit`);
                    }}>Edit Routine</button>
                   <button onClick={ async () => {
                    const routineToDelete = await removeRoutine(routine);
                    if(!routineToDelete.error) {
                        const newUserRoutines = await getUserRoutines(user)
                        setMyRoutines(newUserRoutines);
                    }
                    navigate(`/myroutines`);
                    }}>Delete Routine</button>
                </div> 
            )
        })}
      </>
    : 
      <>
        <h2>Looks like you haven't made any Routines yet...</h2>
      </>
    }
    </>
)
};


export default UserRoutines;