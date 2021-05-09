import { combineReducers } from "redux";
import authReducer from "./authReducer";

// import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
    auth: authReducer,
});
