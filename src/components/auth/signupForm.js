import React, { Component } from 'react';
import { FormInput, FormButton } from '../formFields';

class SignupForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className = {`${className} sign-up-form`}>
                <Field className='sign-up-form__name'
                    name='name'
                    type='name'
                    title='Name'
                    placeholder='Name'
                    component={FormInput}/>
                <Field className='sign-up-form__email'
                    name='email'
                    type='email'
                    title='Email'
                    placeholder='Email'
                    component={FormInput}/>
                <Field className='sign-up-form__password'
                    name='password'
                    type='password'
                    title='Password'
                    placeholder='Password'
                    component={FormInput}/>
                <Field className='sign-up-form__submit'
                    name='submit'
                    type='submit'
                    title='Submit'
                    component={FormButton}/>
                <Field className='sign-up-form__cancel'
                    name='login'
                    type='login'
                    title='Login'
                    component={FormButton}/>
            </form>
        )
    }
}

export default SignupForm;