import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '../../utils/formatDate';
import BlockContent from '@sanity/block-content-to-react';
import ReactPlayer from 'react-player';
import { setPlayingVideoId } from '../../store'; // Importa a ação do Redux

export default function SingleVideo({ video }) {
  const dispatch = useDispatch();
  const playingVideoId = useSelector((state) => state);

  const handlePlayVideo = (videoId) => {
    dispatch(setPlayingVideoId(videoId));
  };

  return (
    <div className='video' key={video._id}>
      <div className="player_video">
        {playingVideoId === video._id ? (
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
      <BlockContent blocks={video.body} projectId="70kqnxpw" dataset="production" />
      <p dangerouslySetInnerHTML={{ __html: formatDate(video.publishedAt) }}></p>
    </div>
  );
}
