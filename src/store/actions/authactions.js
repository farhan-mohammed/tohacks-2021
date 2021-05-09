export const signIn = (credentials) => {
    return (dispatch, getFirebase) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((info) => {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: { uid: info.user.uid, userData: data },
                });
            })
            .catch((err) => {
                dispatch({
                    type: "LOGIN_ERROR",
                    error: err.message,
                });
            });
    };
};

export const signOut = () => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({ type: "LOGOUT_SUCCESS" });
            });
    };
};

export const register = ({ email, password, name, username, scq, sca }) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        console.log(scq);
        console.log(sca);
        // Do registeration & generate profile
        firebase
            .createUser(
                { email, password },
                { email, name, username, scq, sca }
            ) //Params login creds & profile info
            .then((auth) => {
                dispatch({ type: "REGISTERATION_COMPLETE" });
            })
            .catch((err) => {
                dispatch({ type: "REGISTERATION_ERROR", error: err.message });
            });
    };
};
