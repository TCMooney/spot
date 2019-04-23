import React, { Component } from 'react';

class AuthHeader extends Component {
    render() {
        const { className } = this.props;
        return(
            <div className='auth-header'>
                <img src='http://via.placeholder.com/100x100' className={`${className} auth-header__logo`}/>
            </div>
        )
    }
}

export default AuthHeader;