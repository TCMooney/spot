import React, { Component } from 'react';

class AuthHeader extends Component {
    render() {
        return(
            <div className='auth-header'>
                <img src='http://via.placeholder.com/100x100' className='auth-header__logo'/>
                <div className='auth-header__line'></div>
            </div>
        )
    }
}

export default AuthHeader;