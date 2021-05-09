import React, { useState, useEffect } from 'react';
import styles from './LogInWindow.module.scss';
import cx from 'classnames';
import { connect } from "react-redux";
import { clearError, signIn } from "../../store/actions/authactions";
import axios from 'axios';

function LogInWindow() {
    const [emailInput, setEmailInput] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={styles.signUpPage}>
            <p className={styles.icon}><a href="/" style={{color: 'white'}}>Eventable</a></p>
            <div className={styles.flexWrapperSix}>
                <div className={styles.flexWrapperEight}>
                <div className={styles.relativeWrapperFour}>
                    <p className={styles.label4}>
                    Let’s get started
                    </p>
                    <p className={styles.alreadyHaveAnAccountLogIn}>
                    Don't have an account yet?{" "}
                    <strong
                        className={
                        styles.alreadyHaveAnAccountLogInEmphasis1
                        }
                    >
                        <a href="/signup">
                            Sign up
                        </a>
                    </strong>
                    </p>
                </div>
                <div className={styles.relativeWrapperFive}>
                    <p className={styles.label5}>Email Address</p>
                    <div className={styles.flexWrapperNine}>
                        <table>
                            <tr>
                                <td>
                                    <img
                                        alt=""
                                        src="https://static.overlay-tech.com/assets/79e89418-0c59-4b27-9a0d-ff9373a5f46c.png"
                                    />
                                </td>
                                <td>
                                    <form class="ui fluid form">
                                        <div class="field">
                                            <input type="text" className={styles.formInputHard} required value={emailInput} onChange={(evt) => setEmailInput(evt.target.value)} />
                                        </div>
                                    </form>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className={styles.relativeWrapperSix}>
                    <p className={styles.label6}>Password</p>
                    <div className={styles.flexWrapperTen}>
                        <table>
                            <tr>
                                <td>
                                    <img
                                        alt=""
                                        src="https://static.overlay-tech.com/assets/82ad5a9e-815b-49b7-a2f8-0a456f472a9e.png"
                                    />
                                </td>
                                <td>
                                    <form class="ui fluid form">
                                        <div class="field">
                                            <input type="password" className={styles.formInputHard} required value={password} onChange={(evt) => setPassword(evt.target.value)} />
                                        </div>
                                    </form>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className={styles.flexWrapperThirteen} />
                <button type="submit" className={styles.flexWrapperEleven} onClick={async () => {
                    // Put something here
                    setPassword("");
                }}>
                    <p className={styles.registrationButton}>
                        LOG IN
                    </p>
                </button>
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