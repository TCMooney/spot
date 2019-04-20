import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields';

class SigninForm extends Component{
    render() {
        const { className } = this.props 
        return(
            <form className={`${className} signin-form`}>
                <Field className='sign-in-form__email'
                    name='email'
                    type='email'
                    title='Email'
                    placeholder='Email'
                    component={FormInput}/>
                <Field className='sign-in-form__password'
                    name='password'
                    type='password'
                    title='Password'
                    placeholder='Password'
                    component={FormInput}/>
                <Field className='sign-in-form__login'
                    name='login'
                    type='login'
                    title='Login'
                    component={FormButton}/>
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'SigninForm'
})(SigninForm);

export default SigninForm;