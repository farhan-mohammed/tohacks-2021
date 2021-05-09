const INIT_STATE = {
    loggedin: false,
};
const authReducer = (state = INIT_STATE, action, curState) => {
    switch (action.type) {
        case "LOGIN_ERROR":
            return {
                ...state,
                loggedin: false,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                loggedin: true,
            };
    }
};

export default authReducer;
