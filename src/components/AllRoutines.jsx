import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {getAllRoutines } from '../api/indexAPI';
const AllRoutines = ({allRoutines, setAllRoutines}) => {

    useEffect(() => {
        const getAllPublicRoutines = async () => {
        const allRoutines = await getAllRoutines();
        console.log(allRoutines);
        setAllRoutines(allRoutines)
        };
        getAllPublicRoutines();
    },[])

    return (
        <>
            <h2>All Routines</h2>
            {allRoutines.map((routine) => {
                return (
                   <div key={routine.id}>
                   <NavLink to={`/routines/${routine.id}`}><h4>{routine.name}</h4></NavLink>
                   <p>By: {routine.creatorName}</p>
                   <p>Goal: {routine.goal}</p>
                   </div> 
                )
            })};
        </>
    )
}

export default AllRoutines;