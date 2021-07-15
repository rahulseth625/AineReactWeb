import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './UserTypes';

import axios from 'axios';

export const fetchUsersRequest = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload : error
    }
}

 // action creator
 export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // response.data is the array of users
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            // error.message is the error description
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}
