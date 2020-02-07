import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = '';

class App extends Component {
  
  constructor(props) {
    super(props); // 부모의 생성자 함수를 호출 (Component)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  handleSelect = (selectedVideo) => {
    this.setState({
      selectedVideo: selectedVideo
    });
  }

  render() {
    const _videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300);

    return (
      <div>
        <SearchBar 
          onSearchTermChange={_videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
