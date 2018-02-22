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
            <div className="search-bar">
                <input
                    value = { this.state.term }
                    onChange = { evt => this.onInputChange(evt.target.value) }
                />
            </div>
        )
    }

    onInputChange(term) {
        this.setState( {term} );
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;
