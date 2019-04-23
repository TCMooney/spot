import React, { Component } from 'react';
import SigninForm from './signinForm';
import AuthHeader from './authHeader';

class Signin extends Component {
    render(){
        return(
            <div className="signin">
                <AuthHeader className='signin__auth-header'/>
                <SigninForm className='signin__form'/>
            </div>
           
        )
    }
}

export default Signin;