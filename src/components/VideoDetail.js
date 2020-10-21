import React from 'react';

function VideoDetail(props) {
  console.log(props)
  if(!props.videos){
    return <div>Loading video...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${props.videos.id.videoId}`
  return (
    <div>
    <div className="ui embed">
      <iframe src={videoSrc} />
    </div>
      <div className="ui segment">
        <h4 className="ui header">{props.videos.snippet.title}</h4>
      </div>
    </div>
  );
}

export default VideoDetail;