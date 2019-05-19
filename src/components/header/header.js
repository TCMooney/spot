import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../history';

import SearchBar from './searchBar';

class Header extends Component {
    render() {
        return(
            <div className='header'>
                <img src='http://via.placeholder.com/100x100' className='header__logo'/>
                <SearchBar className='header__search'/>
                <div className='header__bar'></div>
            </div>
        )
    }
}


export default Header;