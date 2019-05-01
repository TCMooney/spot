import React, { Component } from 'react';
import Details from './auth/details';

class Footer extends Component {
    render(){
        const { className } = this.props;
        const links = [
            {
                _id: 0,
                title: 'Home',
                onClick: () => history.push('/')
            },
            {
                _id: 1,
                title: 'Create Account',
                onClick: () => history.push('/signup')
            },
            {
                _id: 2,
                title: 'About',
                onClick: () => history.push('/about')
            },
        ]
        return(
            <div className={`${className} footer`}>
                {this.props.children}
                <div className='footer-links'>
                    <Details className='footer-details' links={links}/>
                </div>
            </div>
        )
    }
}

export default Footer;