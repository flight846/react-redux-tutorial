import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDquXbujYTEacgqWnDyplBe9cEs71z6TcU';

// Create a new component. This component should produce
// some HTML
class App extends Component {
    // states
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        }

        // default YT needs API_KEY, [options], callback
        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={ this.state.selectedVideo } />
                <VideoList
                    onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo }) }
                    videos={ this.state.videos } />
            </div>
        );
    }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
