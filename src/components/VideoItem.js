import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './VideoItem.css'

function VideoItem(props) {
  return (
    <div onClick={() => props.videoSelect(props.video)} className="video-item item">
      <img className="ui image" src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title}/>
      <div className="content">
      <div className="header">{props.video.snippet.title}</div>
      <div className="description">{props.video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoItem;