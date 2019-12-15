import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import Details from '../json_view/details';
import {GOOGLE_OAUTH_KEY, WELCOME_TEXT, LOGIN_TEXT} from '../utils';
import './login.scss';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            showUploadPage: false
        }
    }

    responseGoogle = (response) => {
        this.setState({
            showUploadPage: true
        })
    }

    authFailed = () =>{
        alert("Something went wrong, Please try Agian!!")
    }
    render() {
        return (
            <div>
                {this.state.showUploadPage?<Details />:
                    <div className="login">
                        <div>
                            {WELCOME_TEXT}
                        </div>

                        <div>
                            {LOGIN_TEXT}
                        </div>

                        <div>
                            <GoogleLogin
                                clientId={GOOGLE_OAUTH_KEY}
                                buttonText="Sign In"
                                onSuccess={this.responseGoogle}
                                onFailure={this.authFailed}
                                cookiePolicy={'single_host_origin'}
                                className="google-login"
                            
                            />
                        </div>
                    </div>}
            </div>
        )
    }
}

export default Login;
