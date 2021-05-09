import { combineReducers } from "redux";
import authReducer from "./authreducer";

// import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
    auth: authReducer,
});
