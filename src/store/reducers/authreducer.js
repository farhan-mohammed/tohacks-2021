const INIT_STATE = {
    loggedin: false,
};
const authReducer = (state = INIT_STATE, action, curState) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            alert(action.error);
            return {
                ...state,
                loggedin: false,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loggedin: true,
            };
        default:
            return state;
    }
};

export default authReducer;
