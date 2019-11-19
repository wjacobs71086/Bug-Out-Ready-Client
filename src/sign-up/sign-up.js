import React, { Component } from 'react';
import './sign-up.css';

export class SignupPage extends Component {
    render() {
        return (
            <div>
                <img className="logo" src="../bags_bag_handbag_accessory_accessories-19-512.png" alt="bag" />
                <h1 className="header">Sign In</h1>
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

export default SignupPage;
