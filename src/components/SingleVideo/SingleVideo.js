import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '../../utils/formatDate';
import BlockContent from '@sanity/block-content-to-react';
import ReactPlayer from 'react-player';
import styles from './SingleVideo.module.css';
import { setPlayingVideoId } from '../../store'; // Importa a ação do Redux

export default function SingleVideo({ video }) {
  const dispatch = useDispatch();
  const playingVideoId = useSelector((state) => state);

  const handlePlayVideo = (videoId) => {
    dispatch(setPlayingVideoId(videoId));
  };

  return (
    <div className={ styles.video } key={video._id}>
      <div className={ styles.player_video }>
        {playingVideoId === video._id ? (
          <ReactPlayer
            className={ styles.containar_video }
            url={`https://www.youtube.com/watch?v=${video.video?.youtubeId}`}
            playing={true}
            controls
            width="100%"
            height="100%"
          />
        ) : (
          <div className={ styles.thumbnail_container }>
            <img
              src={`https://img.youtube.com/vi/${video.video?.youtubeId}/maxresdefault.jpg`}
              alt={`Thumbnail do vídeo ${video.title}`}
              className="play-button"
              onClick={() => handlePlayVideo(video._id)}
            />
            <button
              className={ styles.play_button }
              onClick={() => handlePlayVideo(video._id)}
            />
          </div>
        )}
      </div>
      <div className={ styles.data_video }>
        <h3>{video.title}</h3>
        <BlockContent blocks={video.body} projectId="70kqnxpw" dataset="production" />
      </div>
      {/* <p dangerouslySetInnerHTML={{ __html: formatDate(video.publishedAt) }}></p> */}

      <div className={ styles.container_post_date }>
            <span 
              className={ styles.post_date }
              dangerouslySetInnerHTML={{__html: formatDate(video.publishedAt)}}>
            </span>
            <div className={ styles.bottom_wire }></div>
      </div>
    </div>
  );
}
