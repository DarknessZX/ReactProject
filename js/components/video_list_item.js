import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  const onVideoSelect = props.onVideoSelect;
  const imgUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item media_item" onClick = {() => onVideoSelect(video) }>
      <div className = "row">
        <div className = "col-md-4">
          <img className = "img-responsive" src={imgUrl} />
        </div>
        <div className = "col-md-6">
          <label>{video.snippet.title}</label>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
