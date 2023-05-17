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
        const response = await sanityClient.fetch(
          `*[_type == "videos"] | order(publishedAt asc) {
            title,
            _id,
            video,
            publishedAt,
            body,
            documents[]->{
              _id,
              title,
              url,
              pdfFile,
              classification
            }
          }`
        );
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

  const renderDocument = (doc) => {
    if (doc.classification === 'Link') {
      return (
        <a
          className='link'
          href={doc.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {doc.title}
        </a>
      );
    } else if (doc.classification === 'PDF') {
      return (
        <a
          className='pdf_file'
          href={`blog.severidade.com.br/${doc._id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {doc.title}
        </a>
      );
    } else {
      return doc.title;
    }
  };

  console.log(videos[2]);

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
              {/* Verifica se tem documento e se a matriz é maior que 0 */}
              {video.documents && video.documents.length > 0 && (
                <ul>
                  {video.documents.map((doc) => (
                    <li key={doc.title}>
                      {renderDocument(doc)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
