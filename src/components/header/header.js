import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <a className='header__logo-link'>
                    <img className='header__img' src='http://via.placeholder.com/50x50'/>
                </a>
                <div className='header__links'>
                    <a className='header__link'>Login</a>
                    <a className='header__link'>Settings</a>
                </div>
            </div>
        )
    }
}

export default Header;