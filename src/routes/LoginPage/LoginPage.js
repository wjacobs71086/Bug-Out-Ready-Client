import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

export class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }
      handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
      }
    render() {
        return (
            <div>
                <img className="logo" src="../bags_bag_handbag_accessory_accessories-19-512.png" alt="bag" />
                <h1 className="header">Log In</h1>
                    <label>username</label>
                <input type="text" placeholder="ready" />
                    <label>password</label>
                <input type="text" placeholder="go" />
                <button>Submit</button>
                <p>For demo: username = ready, password = go</p>
                
                <button>Submit</button>
            </div>
        )
    }
}

export default LoginPage;
