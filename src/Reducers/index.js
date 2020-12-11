import { combineReducers } from 'redux';
import NewUser from './newReducer';

export default combineReducers ({
    user:NewUser
});
