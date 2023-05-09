import React from 'react';
import { NavLink } from 'react-router-dom';

const AllRoutines = ({allRoutines}) => {
    return (
        <>
            <h2>All Routines</h2>
            {allRoutines.map((routine) => {
                return (
                   <div key={routine.id}>
                   <NavLink to={`/routines/${routine.id}`}><h4>{routine.name}</h4></NavLink>
                   <p>{routine.creatorName}</p>
                   <p>{routine.goal}</p>
                   </div> 
                )
            })};
        </>
    )
}

export default AllRoutines;