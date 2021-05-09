import React, { useState, useEffect } from 'react';
import styles from './Landing.module.scss';
import cx from 'classnames';
import axios from 'axios';

function Landing() {

    return (
        <div className={styles.landingPage}>
            <div className={styles.flexWrapperFour}>
            <p className={styles.icon}>Eventable</p>
            <div className={styles.flexWrapperThree}>
                <a href="/login">
                    <p className={styles.loginButton}>LOG IN</p>
                </a>
            </div>
            <div className={styles.flexWrapperTwo}>
                <a href="/signup">
                    <p className={styles.signupButton}>SIGN UP</p>
                </a>
            </div>
            </div>
            <div className={styles.relativeWrapperOne}>
                <img
                    alt=""
                    className={
                    styles.openedMailboxWithLetterByOblikStud
                    }
                    src="https://static.overlay-tech.com/assets/eea6f51a-6269-4f8c-b39d-fb38130d7c56.svg"
                />
                <p className={styles.label1}>
                    Welcome to Eventable
                </p>
                {/* <p
                    className={
                    styles.shortDescriptionBlurbLoremIpsumDol
                    }
                >
                    <strong
                    className={
                        styles.shortDescriptionBlurbLoremIpsumDolEmphasis0
                    }
                    >
                    short description blurb:
                    </strong>{" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed faucibus nunc in erat consectetur
                        rhoncus. Pellentesque dapibus ligula eu justo
                        fringilla, id fermentum purus pretium. Vestibulum
                        ante ipsum primis in faucibus orci luctus.
                </p> */}
                <div className={styles.relativeWrapperOne}>
                    <p className={styles.fromHackathonToHacker}>
                        FROM: HACKATHON
                    <br />
                        TO: HACKER
                    </p>
                    <p className={styles.label2}>
                        Made Quick &amp; Easy, Just For You!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Landing;