import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';

const YOUTUBE_API_KEY = 'AIzaSyC8_JIdFGJhNGPTrtLd0YOF-L0iRrpAXjQ';

const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('hello'));
