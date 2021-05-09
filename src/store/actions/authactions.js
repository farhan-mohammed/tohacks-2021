export const signIn = (credentials) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        console.log(firebase);
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((info) => {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: { uid: info.user.uid },
                });
            })
            .catch((err) => {
                dispatch({
                    type: 'LOGIN_ERROR',
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
                dispatch({ type: 'LOGOUT_SUCCESS' });
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
            .createUser({ email, password }, { email, name, username, scq, sca }) //Params login creds & profile info
            .then((auth) => {
                dispatch({ type: 'REGISTERATION_COMPLETE' });
                alert('W');
            })
            .catch((err) => {
                dispatch({ type: 'REGISTERATION_ERROR', error: err.message });
                alert('L');
            });
    };
};

export const clearError = () => {
    return { type: 'CLEAR_ERROR' };
};
