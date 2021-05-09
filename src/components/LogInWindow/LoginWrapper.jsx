import React, { Component } from 'react';
import './Login.scss';
import personImage from '../../media/signup.png';
export default class LoginWrapper extends Component {
    render() {
        return (
            <div className="log-con">
                <div className="log-header">
                    <div className="log-header__title">Eventable</div>
                </div>
                <div className="log-body">
                    <div className="log-body__left">
                        <img alt="" src={personImage} />
                        <div>Sign up for free and start using our services immediately!</div>
                    </div>
                    <div className="log-body__right">
                        <div className="logb-con">
                            <div className="logb-title"> Let’s get started</div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
