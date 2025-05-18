import React from 'react';
import VideoJS from 'video.js';

export default function VideoPlayer({ src }) {
  const videoRef = React.useRef(null);
  
  React.useEffect(() => {
    const player = VideoJS(videoRef.current, {
      controls: true,
      sources: [{
        src,
        type: 'application/x-mpegURL'
      }]
    });
    
    return () => player.dispose();
  }, [src]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js" />
    </div>
  );
}
