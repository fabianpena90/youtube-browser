import React, { useState } from 'react';
import SearchBar from './SearchBar'
import 'semantic-ui-css/semantic.min.css'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'


function App(props) {
  const [videos, setVideo] = useState([])
  const [seletedVideo, setSeletedVideo] = useState(null)
  const KEY = 'AIzaSyAnCVqrX_hU5C8whtJKp34U5zjthBGm2Pc'
  
  async function onTermSubmit(term){
    const res = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 10,
        type: 'video',
        key: KEY
      }
    });
    setVideo(res.data.items)
    console.log(res.data.items)
  }

  function videoSelect(videos){
    console.log(videos, 'from hererere')
    // setSeletedVideo(videos)
  }

  return (
    <div style={{marginTop: '10px'}} className="ui container">
      <SearchBar onFormSubmit={onTermSubmit}/>
      <VideoDetail video={seletedVideo} />
      <VideoList videoSelect={videoSelect} videos={videos}/>
    </div>
  );
}

export default App;
