import React, { useEffect, useState } from 'react';
import { formatDate } from '../utils/formatDate';
import sanityClient from "../cliente";
import BlockContent from '@sanity/block-content-to-react';

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
                <iframe
                  width="100%"
                  height="56.25%"
                  // Proporção de aspecto 16:9 (9 / 16 * 100%)
                  src={`https://www.youtube.com/embed/${video.video?.youtubeId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
