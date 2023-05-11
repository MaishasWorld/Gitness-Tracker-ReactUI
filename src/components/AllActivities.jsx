import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getAllActivities } from "../api/indexAPI";
import { CreateActivity } from ".";

const AllActivities = ({
  allActivities,
  isLoggedIn,
  token,
  setAllActivities,
  }) => {
  useEffect(() => {
    const getAllPublicActivities = async () => {
      const allActivities = await getAllActivities();
      console.log(allActivities);
      setAllActivities(allActivities);
    };
    getAllPublicActivities();
  }, []);

  return (
    <>
    <CreateActivity
    allActivities={allActivities}
    setAllActivities={setAllActivities}
    />
      {isLoggedIn || localStorage.token ? (
        <>
          <h2>All Activities</h2>
          {/* <form onSubmit={handleSubmit}>
            <h4>Create A New Activity</h4>
            <input
              required
              type="text"
              placeholder="Activity Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>

            <input
              required
              type="text"
              placeholder="Goal"
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
            ></input>

            <input
              type="checkbox"
              onChange={(event) => {
                if (event.target.checked) {
                  setIsPublic(true);
                } else {
                  setIsPublic(false);
                }
              }}
            />

            <button type="submit">Create Routine</button>
          </form> */}
          {allActivities.map((activity) => {
            return (
              <div key={activity.id}>
                <NavLink to={`/activities/${activity.id}`}>
                  <h4>{activity.name}</h4>
                </NavLink>
                <p>{activity.description}</p>
              </div>
            );
          })}
          ;
        </>
      ) : (
        <>
          <h2>All Activities</h2>
          {allActivities.map((activity) => {
            return (
              <div key={activity.id}>
                <NavLink to={`/activities/${activity.id}`}>
                  <h4>{activity.name}</h4>
                </NavLink>
                <p>{activity.description}</p>
              </div>
            );
          })}
          ;
        </>
      )}
    </>
  );
};

export default AllActivities;
