import React, { Component } from 'react';

class SearchBar extends Component {
    // initialise state
    constructor(props) {
        super(props);

        // record user search term state
        this.state = { term: '' };
    }

    // render method
    render() {
        return (
            <div>
                <input onChange = { evt => this.setState({ term: evt.target.value })}/>
            </div>
        )
    }
}

export default SearchBar;
