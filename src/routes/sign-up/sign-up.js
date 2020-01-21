import React, { Component } from 'react';
import './sign-up.css';
import SignUpForm from '../../SignUpForm/SignUpForm';
import AuthService from '../../Services/auth-api-service';


export class SignupPage extends Component {
    static defaultProps = {
        history: {
          push: () => {},
        },
      }
    
      handleSignUpSuccess = user => {
        AuthService.createUserCall(user);
        const { history } = this.props
        history.push('/login')
      }
    
    render() {
        return (
            <div>
                <SignUpForm
                    onSignUpSuccess={this.handleSignUpSuccess}>
                </SignUpForm>
            </div>
        )
    }
}

export default SignupPage;
