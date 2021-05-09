import React from 'react';
import styles from './LogInWindow.module.scss';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authactions';
import LoginWrapper from './LoginWrapper';
import { Link, Redirect } from 'react-router-dom';
class LogInWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false,
        };
    }
    render() {
        if (this.props.loggedin) {
            return <Redirect to="/"></Redirect>;
        } else if (this.state.redirect) {
            return <Redirect to="/dashboard"></Redirect>;
        }
        return (
            <LoginWrapper>
                <p className={styles.alreadyHaveAnAccountLogIn}>
                    Don't have an account yet?{' '}
                    <strong className={styles.alreadyHaveAnAccountLogInEmphasis1}>
                        <Link to="/signup">Sign up</Link>
                    </strong>
                </p>

                <div className="logb-label">Email Address</div>
                <div className="logb-box__con">
                    <div className="logb-box__image">
                        <img
                            alt=""
                            src="https://static.overlay-tech.com/assets/79e89418-0c59-4b27-9a0d-ff9373a5f46c.png"
                        />
                    </div>
                    <div>
                        <form class="ui fluid form">
                            <div class="field">
                                <input
                                    type="text"
                                    className={styles.formInputHard}
                                    required
                                    value={this.state.email}
                                    onChange={(evt) => this.setState({ email: evt.target.value })}
                                />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="logb-label">Password</div>
                <div className="logb-box__con">
                    <div className="logb-box__image">
                        <img
                            alt=""
                            src="https://static.overlay-tech.com/assets/79e89418-0c59-4b27-9a0d-ff9373a5f46c.png"
                        />
                    </div>
                    <div>
                        <form class="ui fluid form">
                            <div class="field">
                                <input
                                    type="password"
                                    className={styles.formInputHard}
                                    required
                                    value={this.state.password}
                                    onChange={(evt) =>
                                        this.setState({ password: evt.target.value })
                                    }
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <button
                    type="submit"
                    className="logb-button"
                    onClick={() => {
                        this.props.login(this.state);
                        this.setState({ password: '', redirect: true });
                    }}
                >
                    <p>LOG IN</p>
                </button>
            </LoginWrapper>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(signIn(creds)),
    };
};
const mapStateToProps = (state) => {
    return {
        loggedin: state.auth.loggedin,
        // lang: state.lang.lang,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInWindow);
