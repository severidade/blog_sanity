import React, { useState } from 'react';
import { formatDate } from '../../utils/formatDate';
import BlockContent from '@sanity/block-content-to-react';/* essa vai para o componte*/
import ReactPlayer from 'react-player'; /* essa vai para o componte*/

export default function SingleVideo({ video }) {
  const [playVideoId, setPlayVideoId] = useState(null);

  const handlePlayVideo = (videoId) => {
    setPlayVideoId(videoId);
  };

  return (
    <div 
      className='video'
      key={video._id} 
    >
      <p dangerouslySetInnerHTML={{__html: formatDate(video.publishedAt)}}></p>
      <div className="player_video">
        {playVideoId === video._id ? (
          <ReactPlayer
            className="containar_video"
            url={`https://www.youtube.com/watch?v=${video.video?.youtubeId}`}
            playing={true}
            controls
            width="100%"
            height="100%"
          />
        ) : (
          <div className='thumbnail_container'>
            <img
              src={`https://img.youtube.com/vi/${video.video?.youtubeId}/maxresdefault.jpg`}
              alt={`Thumbnail do vídeo ${video.title}`}
              className="play-button"
              onClick={() => handlePlayVideo(video._id)}
            />
            <button
              className="play_button"
              onClick={() => handlePlayVideo(video._id)}
            >
              Play
            </button>
          </div>
        )}
        
      </div>
      <h3>{video.title}</h3>
      <BlockContent
        blocks={video.body}
        projectId="70kqnxpw"
        dataset="production"
      />
    </div>
  );
}
