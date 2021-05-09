import React, { useState, useEffect } from 'react';
import styles from './LogInWindow.module.scss';
import cx from 'classnames';
import { connect } from "react-redux";
import { clearError, signIn } from "../../store/actions/authactions";
import axios from 'axios';

function LogInWindow() {
    const [emailInput, setEmailInput] = useState("");
    const [passInput, setPassInput] = useState("");

    return (
        <div id="master" className={styles.logInWrap}>
            <div className={styles.logInBox}>
                <div className={styles.formWrapper}>
                    <form class="ui fluid form">
                        <div class="field">
                            <input type="text" placeholder="Email" required value={emailInput} onChange={(evt) => setEmailInput(evt.target.value)} />
                        </div>
                        <div className={styles.formInputSeparator} />
                        <div class="field">
                            <input type="password" placeholder="Password" required value={passInput} onChange={(evt) => setPassInput(evt.target.value)} />
                        </div>
                        <div className={styles.formInputSeparator} />
                        <div className={styles.logInContainer}>
                            <button id="loginButton" type="submit" className={cx("ui primary button", styles.logInButton)} onClick={async () => {
                                
                                // Use identifier (i.e. username / email) to get account in database
                                // let inMemoryToken = false;
                                // let accountObject = await getAccountObj(identInput);
                                // if (accountObject !== undefined) {
                                    // Account is found in database; then, check if credentials match
                                    // inMemoryToken = await getSessionPerm(accountObject.email, passInput);
                                // }

                                // Unsuccessful credentials: show error caption & reset password field
                                setPassInput("");
                            }}>
                                Log In
                            </button>
                        </div>
                        <div className={styles.signupBlurb}>
                            <a href="/signup">
                                Sign Up
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(signIn(creds)),
        clearError: () => dispatch(clearError()),
    };
};
const mapStateToProps = (state) => {
    console.log(state);
    return {
        loggedin: state.auth.loggedin,
        error: state.auth.error,
        // lang: state.lang.lang,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInWindow);