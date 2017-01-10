import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

const YOUTUBE_API_KEY = 'AIzaSyC8_JIdFGJhNGPTrtLd0YOF-L0iRrpAXjQ';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    
    this.videoSearch('LOL');
  }

  videoSearch(param) {
    YTSearch ({key: YOUTUBE_API_KEY, term: param }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchChange = {param => this.videoSearch(param)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos= {this.state.videos}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('hello'));
