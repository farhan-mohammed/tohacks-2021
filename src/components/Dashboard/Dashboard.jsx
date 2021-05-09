import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.scss';
import cx from 'classnames';
import axios from 'axios';

function Dashboard() {
    const [components, setComponents] = useState([]);

    useEffect(() => {
        setComponents([
            <span>h1: RU Hacks 2020</span>,
            <span>h2: description of aoshdoashdo</span>,
            <img src="secret.png" />,
            <span>div: amogus amogus amogus amogus amogus amogus amogus amogus amogus amogus amogus amogus amogus</span>,
            <img src="amogus.png" />
        ]);
    }, []);

    return (
        <div className={styles.dashboardWrapper}>
            <div className="ui vertical inverted sidebar menu left uncover visible" id="toc">
                <div className="item" style={{textAlign: 'center'}}>
                    <a href="/">
                        <b className={styles.eventableIcon}>Eventable</b>
                    </a>
                </div>
                <div className={styles.sidebarSeparator} />
                <a href="/" className="item">
                    Home
                </a>
                <a className="item">
                    Link DB
                </a>
                <a className="item">
                    Settings
                </a>
                <a className="item">
                    Logout
                </a>
            </div>
            <div className="pusher">
                <div className="full height">
                    <div className={styles.dashboardContainer}>
                        <div className={styles.buildBox}>
                            {components.map(current => {
                                return (
                                    <div className={styles.buildComponent}>
                                        {current}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;