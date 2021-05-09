import React, { useState, useEffect } from 'react';
import styles from './SignUpWindow.module.scss';
import cx from 'classnames';
import axios from 'axios';

function SignUpWindow() {
    const [emailInput, setEmailInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [passConfInput, setPassConfInput] = useState("");

    return (
        <div id="master" className={styles.signUpWrap}>
            <div className={styles.signUpBox}>
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
                        <div class="field">
                            <input type="password" placeholder="Confirm Password" required value={passConfInput} onChange={(evt) => setPassConfInput(evt.target.value)} />
                        </div>
                        <div className={styles.formInputSeparator} />
                        <div className={styles.signUpContainer}>
                            <button id="signupButton" type="submit" className={cx("ui primary button", styles.signUpButton)} onClick={async () => {
                                
                                // Use identifier (i.e. username / email) to get account in database
                                // let inMemoryToken = false;
                                // let accountObject = await getAccountObj(identInput);
                                // if (accountObject !== undefined) {
                                    // Account is found in database; then, check if credentials match
                                    // inMemoryToken = await getSessionPerm(accountObject.email, passInput);
                                // }

                                // Unsuccessful credentials: show error caption & reset password field
                                if (passInput == passConfInput) {
                                    setPassInput("");
                                    setPassConfInput("");
                                }
                            }}>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpWindow;