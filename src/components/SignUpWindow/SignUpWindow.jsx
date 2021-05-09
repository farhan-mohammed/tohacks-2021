import React, { Component } from 'react';
import styles from './SignUpWindow.module.scss';
import { connect } from 'react-redux';
import { register } from '../../store/actions/authactions';

class SignUpWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }
    render() {
        return (
            <div className={styles.signUpPage}>
                <p className={styles.icon}>
                    <a href="/" style={{ color: 'white' }}>
                        Eventable
                    </a>
                </p>
                <div className={styles.flexWrapperSix}>
                    <div className={styles.flexWrapperTwelve}>
                        <div className={styles.relativeWrapperSeven}>
                            <div className={styles.roomSprite}>
                                <div className={styles.flexWrapperFourteen}>
                                    <img
                                        alt=""
                                        className={styles.vector}
                                        src="https://static.overlay-tech.com/assets/617ed867-d814-4a31-b4fa-47bd3faa3cee.svg"
                                    />
                                    <div className={styles.relativeWrapperThree}>
                                        <img
                                            alt=""
                                            className={styles.vectorTwo}
                                            src="https://static.overlay-tech.com/assets/ac9eaa08-4ecf-498f-8c7b-4cce0da011bf.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.nut}
                                            src="https://static.overlay-tech.com/assets/a69106b0-3e6f-4249-a2c9-eab6dc7466df.svg"
                                        />
                                        <div className={styles.flexWrapperFive}>
                                            <img
                                                alt=""
                                                className={styles.vectorThree}
                                                src="https://static.overlay-tech.com/assets/612b3d8a-1ffc-45a4-b79f-5b66088327b2.svg"
                                            />
                                            <img
                                                alt=""
                                                className={styles.appleImage}
                                                src="https://static.overlay-tech.com/assets/edba2fab-37db-489d-b61c-a83eed676ac1.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.relativeWrapperTwo}>
                                    <div className={styles.plantSprite}>
                                        <div className={styles.relativeWrapperOne}>
                                            <div className={styles.potSprite}>
                                                <div className={styles.flexWrapperOne}>
                                                    <img
                                                        alt=""
                                                        src="https://static.overlay-tech.com/assets/7ae69b84-2794-4475-bec9-87b3f33f5ede.svg"
                                                    />
                                                </div>
                                                <div className={styles.flexWrapperTwo}>
                                                    <img
                                                        alt=""
                                                        src="https://static.overlay-tech.com/assets/c6204e6f-adfa-441f-afa7-4a9f523126a0.svg"
                                                    />
                                                </div>
                                            </div>
                                            <img
                                                alt=""
                                                className={styles.vectorFour}
                                                src="https://static.overlay-tech.com/assets/743ddad9-7a6f-4884-b277-b30591ea6eac.svg"
                                            />
                                            <img
                                                alt=""
                                                className={styles.vectorFive}
                                                src="https://static.overlay-tech.com/assets/f93c82ae-4039-437a-b436-4a72ed0a0897.svg"
                                            />
                                            <img
                                                alt=""
                                                className={styles.vectorThree}
                                                src="https://static.overlay-tech.com/assets/d5d98030-328c-4611-aa4e-198761ef8ee1.svg"
                                            />
                                        </div>
                                        <img alt="" src="https://via.placeholder.com/0x0.09" />
                                    </div>
                                    <img
                                        alt=""
                                        className={styles.vectorSix}
                                        src="https://static.overlay-tech.com/assets/ea332306-b79f-442d-a273-58b0031f86e0.svg"
                                    />
                                    <div className={styles.flexWrapperThree}>
                                        <img
                                            alt=""
                                            className={styles.vectorThree}
                                            src="https://static.overlay-tech.com/assets/5849525e-4abb-497a-bcd7-85d43b43c05b.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorSeven}
                                            src="https://static.overlay-tech.com/assets/a8dc19f7-0ef8-49ed-a782-4c2c749bbb6e.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorEight}
                                            src="https://via.placeholder.com/84.81x77.58"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorNine}
                                            src="https://static.overlay-tech.com/assets/43eaea31-33c6-4bb0-9f36-f7e3e1f8cee8.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorTen}
                                            src="https://static.overlay-tech.com/assets/b1b763be-7fa6-41e3-ae00-ff94990679b3.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorEleven}
                                            src="https://static.overlay-tech.com/assets/48e61d6b-d9bd-46b4-baf7-deef9374862a.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorTwelve}
                                            src="https://static.overlay-tech.com/assets/9ba79e8d-e807-4953-85dd-4a9c63d15bce.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorThirteen}
                                            src="https://static.overlay-tech.com/assets/4ffdf8aa-5d88-424d-812a-1192f7e67be9.svg"
                                        />
                                    </div>
                                    <div className={styles.flexWrapperFour}>
                                        <img
                                            alt=""
                                            className={styles.vectorThree}
                                            src="https://static.overlay-tech.com/assets/badc39b3-f8d4-435a-9ec2-2f9afb4cd3a3.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorFourteen}
                                            src="https://static.overlay-tech.com/assets/38a753ca-c8a5-4e4c-98b0-6c3644ef301f.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorFifteen}
                                            src="https://static.overlay-tech.com/assets/bbef9f39-0793-4c17-8717-298c0247df36.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorSixteen}
                                            src="https://static.overlay-tech.com/assets/7536c212-094e-49de-b46d-8ee3c8ff3f84.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorSeventeen}
                                            src="https://static.overlay-tech.com/assets/f2c833fa-9046-4ff4-84ac-0d1c65dd2ee1.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorEighteen}
                                            src="https://static.overlay-tech.com/assets/c2e97544-2031-459b-8d2b-714b5bf8b83d.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorNineteen}
                                            src="https://static.overlay-tech.com/assets/b3c9a5c4-63a7-4bbc-88fc-6d147959fe31.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorTwenty}
                                            src="https://static.overlay-tech.com/assets/aed5aff3-576a-49a2-9315-a58d01b811af.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorTwentyOne}
                                            src="https://static.overlay-tech.com/assets/4e7caf84-6153-4520-a5a5-18e6894a585c.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorTwentyTwo}
                                            src="https://static.overlay-tech.com/assets/1609335c-2687-4c6d-8ba5-f8f11e2f5481.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorTwentyThree}
                                            src="https://static.overlay-tech.com/assets/231c80c1-f9ca-4e0c-8f98-2fc5406c08d3.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorTwentyFour}
                                            src="https://static.overlay-tech.com/assets/fb800aa4-da98-44a2-8f01-661e1ba89b98.svg"
                                        />
                                        <img
                                            alt=""
                                            className={styles.vectorTwentyFive}
                                            src="https://static.overlay-tech.com/assets/93c8ad19-89b3-490b-9b54-4aa613772bbf.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.flexWrapperSeven}>
                                <img
                                    alt=""
                                    src="https://static.overlay-tech.com/assets/508ef4da-7aea-43af-b15e-85349d2ec245.svg"
                                />
                            </div>
                        </div>
                        <p className={styles.label3}>
                            Sign up for free and start using our services immediately!
                        </p>
                    </div>
                    <div className={styles.flexWrapperEight}>
                        <div className={styles.relativeWrapperFour}>
                            <p className={styles.label4}>Let’s get started</p>
                            <p className={styles.alreadyHaveAnAccountLogIn}>
                                Already have an account?{' '}
                                <strong className={styles.alreadyHaveAnAccountLogInEmphasis1}>
                                    <a href="/login">Log in</a>
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
                                                    <input
                                                        type="text"
                                                        className={styles.formInputHard}
                                                        required
                                                        value={this.state.email}
                                                        onChange={(evt) =>
                                                            this.setState({
                                                                email: evt.target.value,
                                                            })
                                                        }
                                                    />
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
                                                    <input
                                                        type="password"
                                                        className={styles.formInputHard}
                                                        required
                                                        value={this.state.password}
                                                        onChange={(evt) =>
                                                            this.setState({
                                                                password: evt.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </form>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className={styles.flexWrapperThirteen}>
                            {/* Nobody cares about this checkbox honestly */}
                            <input type="checkbox" className={styles.termsCheckbox} />
                            <p className={styles.iAgreeToEventablesTermsOfService}>
                                <strong
                                    className={styles.iAgreeToEventablesTermsOfServiceEmphasis0}
                                >
                                    I agree to Eventable’s{' '}
                                </strong>
                                &nbsp;<span className={styles.underlineable}>Terms of Service</span>
                                &nbsp;{' '}
                                <strong
                                    className={styles.iAgreeToEventablesTermsOfServiceEmphasis0}
                                >
                                    and
                                </strong>{' '}
                                &nbsp;<span className={styles.underlineable}>Privacy Policy</span>
                                &nbsp;
                            </p>
                        </div>
                        <button
                            type="submit"
                            className={styles.flexWrapperEleven}
                            onClick={async () => {
                                // Put something here
                                this.props.register({
                                    email: this.state.email,
                                    password: this.state.password,
                                });
                                this.setState({ password: '' });
                            }}
                        >
                            <p>REGISTER</p>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    error: state.auth.error,
    registerredirect: state.auth.registerredirect,
    // lang: state.lang.lang,
});

const mapDispatchToProps = (dispatch) => ({
    register: ({ email, password }) => dispatch(register({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpWindow);
