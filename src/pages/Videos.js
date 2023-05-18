import React, { useEffect, useState } from 'react';
import { fetchVideos } from '../utils/fetch';

import { formatDate } from '../utils/formatDate';/* essa vai para o componte*/
import BlockContent from '@sanity/block-content-to-react';/* essa vai para o componte*/
import ReactPlayer from 'react-player'; /* essa vai para o componte*/

export default function Videos() {
  const [videos, setVideos] = useState(null);
  const [playVideoId, setPlayVideoId] = useState(null); /* essa vai para o componte*/

  useEffect(() => {
    fetchVideos()
      .then((data) => setVideos(data))
      .catch(console.error);
  }, []);

  /* essa vai para o componte*/
  const handlePlayVideo = (videoId) => {
    setPlayVideoId(videoId);
  };

  if (!videos) return <div className='loading'>Loading...</div>;


  return (
    <main className="container_main">
      <section className="container_section">
        <h2>Vídeos</h2>
        <div className='container_videos'>
          {videos.map((video) => (
            <div 
              className='video'
              key={video._id} 
            >
              <p dangerouslySetInnerHTML={{__html: formatDate(video.publishedAt)}}></p>
              <p>{video.title}</p>
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
              <BlockContent
                blocks={video.body}
                projectId="70kqnxpw"
                dataset="production"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
