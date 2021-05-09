import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landing.scss';
export default class Landing extends Component {
    render() {
        return (
            <div className="body">
                <div className="lan-heading">
                    <div className="lan-heading__title">Eventable</div>
                    <div className="lan-heading__button-con">
                        <div className="lan-heading__button">
                            <Link
                                to="/login"
                                className="ui  basic button"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Login
                            </Link>
                        </div>
                        <div className="lan-heading__button">
                            <Link
                                to="/signup"
                                className="ui primary button"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="lan-body">
                    <div className="lan-body__heading">Welcome to Eventable</div>
                    <div className="lan-body__big">From: Organizers</div>
                    <div className="lan-body__big">To: Attendees</div>
                    <div className="lan-body__heading">Made Quick & Easy, Just for you!</div>
                    <div className="lan-body__bodytext">
                        Eventable is a platform/libraries that organizers can use to mass mail
                        attendees more information such as schedule, workshops and speaker
                        information so that attendees have a physical copy of a what they want to
                        make.
                    </div>
                    <div className="lan-body__mailbox">
                        <img
                            alt="mailbox"
                            src="https://static.overlay-tech.com/assets/eea6f51a-6269-4f8c-b39d-fb38130d7c56.svg"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
