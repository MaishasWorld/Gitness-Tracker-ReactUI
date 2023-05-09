const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api/`

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
                Authorization: `Bearer ${token}`,
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
}

export const getAllRoutines = async () => {
    try {
        const response = await fetch(`${BASE_URL}/routines`, {
          headers: {
          'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.error(err);
    }
}
