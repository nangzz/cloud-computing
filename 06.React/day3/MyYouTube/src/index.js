import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDUQNBZPxK9I8y-u6Z7IsAwPH_neqi4jf8';

class App extends Component {
  
  constructor(props) {
    super(props); // 부모의 생성자 함수를 호출 (Component)

    this.state = {
      videos: [],
    }

    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({
        videos: data,
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
