import React, { Component } from 'react';
import './LoginPage.css';
import LoginForm from '../../LoginForm/LoginForm';
import { Link } from 'react-router-dom';

export class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }
      handleLoginSuccess = () => {
        const { location, history} = this.props;
        const destination = (location.state || {}).from || '/bags';
        history.push(destination);
        }
    render() {
        return (
            <div>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
          className="loginForm"
        />
        <h4>Don't have an account yet?</h4>
        <Link
            to='/sign-up'
        >Sign-Up</Link>
        <h6>Try it out first, UserName: ready Password: go</h6>
            </div>
        )
    }
}

export default LoginPage;
