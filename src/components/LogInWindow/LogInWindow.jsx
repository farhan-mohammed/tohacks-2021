import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import styles from './LogInWindow.module.scss';
import axios from 'axios';

function LogInWindow() {
    const [emailInput, setEmailInput] = useState("");
    const [passInput, setPassInput] = useState("");

    return (
        <div id="master" className={styles.logInWrap}>
            <div className={styles.logInBox}>
                <div className={styles.formWrapper}>
                    <Form>
                        <TextField id="formInputEmail" className={styles.formInput} label="Email" type="text" variant="outlined" size="small" required value={emailInput}
                          InputLabelProps={{ shrink: true }} onChange={(evt) => setEmailInput(evt.target.value)} />
                        <div className={styles.formInputSeparator} />
                        <TextField id="formInputPassword" className={styles.formInput} label="Password" type="password" variant="outlined" size="small" required value={passInput}
                          InputLabelProps={{ shrink: true }} onChange={(evt) => setPassInput(evt.target.value)} />
                        <div className={styles.formInputSeparator} />
                        <div className={styles.logInContainer}>
                            <Button id="loginButton" variant="primary" type="submit" className={styles.logInButton} onClick={async () => {
                                
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
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default LogInWindow;