import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT, STREAM_CREATE } from "./types";

export const signIn = id => {
    return {
        type: SIGN_IN,
        payload: id
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = formValues => dispatch => {
    streams.post('/streams', formValues);
    dispatch({
        type: STREAM_CREATE
    })
}
