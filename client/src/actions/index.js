import { ADD_USER_SUCCESS } from '../constants';
import axios from 'axios';

const url = 'http://localhost:3001/api/adduser';

export const postUser = (user) => {
    return (dispatch) => {
        return axios.post(url, user)
            .then(response => {
                dispatch(postUserSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const postUserSuccess = (user) => {
    return {
        type: ADD_USER_SUCCESS,
        user
    }
};