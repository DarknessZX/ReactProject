import React from 'react';

const VideoDetail = (props) => {

  if (!props.video) {
    return (
      <div>Loading...</div>
    )
  }

  const video = props.video;
  const videoId = video.id.videoId;
  const ytUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className = "video_detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={ytUrl}></iframe>
      </div>
      <div className = "details">
        <label>{video.snippet.title}</label>
        <label>{video.snippet.description}</label>
      </div>
    </div>
  )
}

export default VideoDetail;
