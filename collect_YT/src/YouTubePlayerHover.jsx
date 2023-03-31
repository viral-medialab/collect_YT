import React, { useRef } from 'react';

function YouTubePlayerHover({ key, data }) {
  const playerRef = useRef(null);

  const handleHover = () => {
    playerRef.current.playVideo();
  };

  const handleLeave = () => {
    playerRef.current.pauseVideo();
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
     <iframe style={cell} controls key={key} src={"https://www.youtube.com/embed/" + data} allowFullScreen></iframe>
      <iframe
        // ref={playerRef}
        key={key}
        src={"https://www.youtube.com/embed/" + data.id}
        // src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubePlayerHover;
