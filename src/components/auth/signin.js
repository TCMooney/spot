import React, { Component } from 'react';
import SigninForm from './signinForm';

class Signin extends Component {
    render(){
        return(
            <div className="signin">
                <img src='http://via.placeholder.com/100x100' className='signin__logo'/>
                <img className='signin__img' src='http://via.placeholder.com/500x500'/>
                <SigninForm className='sign-in__form'/>
            </div>
           
        )
    }
}

export default Signin;