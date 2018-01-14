import { ADD_USER_SUCCESS } from '../constants';
import axios from 'axios';

const url = 'http://localhost:3001/api/adduser';

export const postUser = (user) => {
    return (dispatch) => {
        return axios.post(url, user)
            .then(response => {
                console.log(response);
                dispatch(addUserSuccess(true))
            })
            .catch(error => {
                 console.log(error);
            });
    };
};

export const addUserSuccess = (success) => {
    return {
        type: ADD_USER_SUCCESS,
        success
    }
};