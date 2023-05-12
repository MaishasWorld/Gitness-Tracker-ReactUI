const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
};

export const getUser = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        });
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
    }
};

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}

export const getAllRoutines = async () => {
    try {
        const response = await fetch(`${BASE_URL}/routines`, {
          headers: {
          'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        // console.log(result);
        return result;
    } catch (err) {
        console.error(err);
    }
}

export const getUserRoutines = async (user) => {
    try {
    const token = localStorage.getItem("token")
    const response = await fetch(`${BASE_URL}/users/${user.username}/routines`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    const result = await response.json();
    return result;
    } catch (err){
    console.error(err);
    }
}

export const createRoutine = async (name, goal, isPublic) => {
    try {
      const token = localStorage.getItem("token")
      const response = await fetch(`${BASE_URL}/routines`, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: name,
          goal: goal,
          isPublic: isPublic
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
}

export const editRoutine = async (id, fields) => {
    try {
      const token = localStorage.getItem("token")
      const response = await fetch(`${BASE_URL}/routines/${id}`, {
        method: "PATCH",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(fields)
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
}

export const removeRoutine = async (routine) => {
    try {
      const token = localStorage.getItem("token")
      const response = await fetch(`${BASE_URL}/routines/${routine.id}`, {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
}

export const getAllActivities = async () => {
    try {
      const response = await fetch(`${BASE_URL}/activities`, {
        headers: {
          'Content-Type': 'application/json',
          
        },
      });
  
      const result = await response.json();
  
      return result
    } catch (err) {
      console.error(err);
    }
  }
       
  export const createActivity = async (name, description) => {
    try {
      const token = localStorage.getItem("token")
      const response = await fetch(`${BASE_URL}/activities`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: name,
          description: description
        }) 
      });
  
      const result = await response.json();
  
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  
  export const removeRoutineActivity = async (activity) => {
    try {
      const token = localStorage.getItem("token")
      console.log(activity);
      const response = await fetch(`${BASE_URL}/routine_activities/${activity.id}`, {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
        
 export const addActivityToRoutine = async (routine, activityId, count, duration) => {
    try {
      const token = localStorage.getItem("token")
      const response = await fetch(`${BASE_URL}/routines/${routine.id}/activities`, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          activityId: activityId,
          count: count,
          duration: duration
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }