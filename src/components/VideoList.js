import React from 'react';
import VideoItem from './VideoItem'
import 'semantic-ui-css/semantic.min.css'

function VideoList(props) {
  console.log(props)
  let singleVideo = props.videos.map((eachVideo) => {
    return <VideoItem videoSelect={props.videoSelect} video={eachVideo} />
  })
  
  return (
    <div className="ui relaxed divided list">
      {singleVideo}
    </div>
  );
}

export default VideoList;