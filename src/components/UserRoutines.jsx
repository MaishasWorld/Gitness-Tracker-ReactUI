import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {getUserRoutines} from '../api/indexAPI';

const UserRoutines = ({user, myRoutines, setMyRoutines, allRoutines}) => {
    console.log(user);
//Get array of users routines 

useEffect(() => {
    const getAllUserRoutines = async () => {
    const userRoutines = await getUserRoutines (user.username) 
    console.log(userRoutines);
    setMyRoutines(userRoutines)
    };
    getAllUserRoutines();
},[])

//Map over the array to get all routine objects of the array
//set state of my routines to that array ^

return (
    <>
        {myRoutines.map(routine => {
            return(
                <div key={routine.id}>
                   <NavLink to={`/routines/${routine.id}`}><h4>{routine.name}</h4></NavLink>
                   <p>{routine.creatorName}</p>
                   <p>{routine.goal}</p>
                   </div> 
            )
        })}
    </>
)};


export default UserRoutines;