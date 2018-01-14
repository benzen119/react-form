import { ADD_USER_SUCCESS } from '../constants';

let status = {
    success: null
}

export default (state = status, action) => {

    switch (action.type) {
        case ADD_USER_SUCCESS:
           const { success } = action;
           status = {
               success
           }
           return status;
        default:
            return state;
    }
};
