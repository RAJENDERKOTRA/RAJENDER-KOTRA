import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from "./type"

import axios from "axios"



export const intialState = {
    users: [],
    error: '',
    loading: false
}

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST

    }
}
export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        data: users
    }
}
const fetchUserFail = (error) => {
    return {
        type: FETCH_USER_FAIL,
        data: error
    }
}


export const fetchUser = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                let users = response.data.map(user => user.id)
                dispatch(fetchUserSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUserFail(error));
            })
    }
}
