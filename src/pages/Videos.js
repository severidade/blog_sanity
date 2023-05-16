import React, { useEffect, useState } from 'react';
import { formatDate } from '../utils/formatDate';
import sanityClient from "../cliente";
import BlockContent from '@sanity/block-content-to-react';
import ReactPlayer from 'react-player';

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [playVideoId, setPlayVideoId] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await sanityClient.fetch(`*[_type == "videos"] | order(publishedAt asc) `);
        setVideos(response);
      } catch (error) {
        console.error('Ocorreu um erro ao buscar os vídeos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handlePlayVideo = (videoId) => {
    setPlayVideoId(videoId);
  };

  return (
    <main className="container_main">
      <section className="container_section">
        <h2>Vídeos</h2>
        {videos.map((video) => (
          <div key={video._id} className='video'>
            <p dangerouslySetInnerHTML={{__html: formatDate(video.publishedAt)}}></p>
            <p>{video.title}</p>
            <div className="video-container">
              {playVideoId === video._id ? (
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${video.video?.youtubeId}`}
                  playing={true}
                  controls
                  width="100%"
                  height="100%"
                />
              ) : (
                <div>
                  <img
                    src={`https://img.youtube.com/vi/${video.video?.youtubeId}/maxresdefault.jpg`}
                    alt={`Thumbnail do vídeo ${video.title}`}
                  />
                  <button
                    className="play-button"
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
      </section>
    </main>
  );
}
