import React, { Component } from 'react';
import SigninForm from './signinForm';
import AuthHeader from './authHeader';

class Signin extends Component {
    render(){
        return(
            <div className="sign-in">
                <AuthHeader className='sign-in__auth-header'/>
                <SigninForm className='sign-in__form'/>
            </div>
           
        )
    }
}

export default Signin;