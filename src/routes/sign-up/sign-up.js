import React, { Component } from 'react';
import './sign-up.css';
import SignUpForm from '../../SignUpForm/SignUpForm';
import AuthService from '../../Services/auth-api-service';


//----- Similar to the login page but for registering a new user. Uses the service function to make a POST request to submit new user to the database. 

//----- Maybe New feature will be to check if the user has any bags yet and then direct them straight to the newBagForm.
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
