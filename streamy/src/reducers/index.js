import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamsReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: formReducer, // the key name must be 'form'
    stream: streamReducer
});