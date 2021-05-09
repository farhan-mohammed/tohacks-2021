import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import styles from './LogInWindow.module.scss';
import cx from 'classnames';
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
                            <input type="text" placeholder="Password" required value={passInput} onChange={(evt) => setPassInput(evt.target.value)} />
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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogInWindow;