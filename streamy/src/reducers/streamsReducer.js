import _ from 'lodash';
import { CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS } from "../actions/types";

const initialState = {};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };

        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };

        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};

        case DELETE_STREAM:
            return { ...state, [action.payload.id]: null };

        case EDIT_STREAM:
            return _.omit(state, action.payload);
    
        default:
            return state;
    }
}

export default authReducer;
