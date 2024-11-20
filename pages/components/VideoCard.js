import React from 'react';
import ReactPlayer from 'react-player';

const VideoCard = ({ defaultThumbnail, hoverThumbnail, videoUrl }) => {
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <div
      style={{
        backgroundSize: 'auto 100%',
        backgroundImage: showVideo
          ? `url(${hoverThumbnail})`
          : `url(${defaultThumbnail})`,
      }}
      onMouseEnter={() => setShowVideo(true)}
      onMouseLeave={() => setShowVideo(false)}
    >
      {showVideo && (
        <ReactPlayer
          url={videoUrl}
          playing={true}
          muted={true}
          controls={true}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default VideoCard;
