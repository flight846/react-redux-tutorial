import React, { Component } from 'react';

class SearchBar extends Component {
    // render method
    render() {
        return <input onChange = { this.onInputChange }/>;
    }

    // define another method
    onInputChange(evt) {
        console.log(evt.target.value);
    }
}

export default SearchBar;
