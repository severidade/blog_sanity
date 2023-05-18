import React, { useEffect, useState } from 'react';
import { fetchVideos } from '../utils/fetch';
import SingleVideo from '../components/SingleVideo/SingleVideo';

import { useDispatch } from 'react-redux';
import { setPlayingVideoId } from '../store';

export default function Videos() {
  const [videos, setVideos] = useState(null);
  const dispatch = useDispatch();
  // useDispatch é um hook fornecido pela biblioteca react-redux que permite que componentes do React disparem ações para a store do Redux.

  useEffect(() => {
    fetchVideos()
      .then((data) => setVideos(data))
      .catch(console.error);
    
      // Limpa o estado global ao sair da página
    return () => {
      dispatch(setPlayingVideoId(null)); 
    };
  }, [dispatch]);

  

  if (!videos) return <div className='loading'>Loading...</div>;

  return (
    <main className="container_main">
      <section className="container_section">
        <h2>Vídeos</h2>
        <div className='container_videos'>
          {videos.map((video) => (
            <SingleVideo video={video} />
          ))}
        </div>
      </section>
    </main>
  );
}
