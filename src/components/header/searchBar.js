import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

function FormSearchBar(props) {
    return (
        <div className='search-bar-grid'>
            <input className={`${props.className} form-search-bar search-bar-grid__input`} {...props.input}  type='text' placeholder={`${props.placeholder}`} />
        </div>
    )
}

class SearchBar extends Component {
    render(){
        const { className } = this.props;
        return (
            <div className={`{${className} search-bar}`}>
                <Field className='search-bar__input'
                    name='search'
                    type='search'
                    title='Search'
                    placeholder='Search'
                    component={FormSearchBar}/>
            </div>
        )
    }
}

SearchBar = reduxForm({
    form: 'SearchBar'
})(SearchBar);

export default SearchBar;