import React, { useEffect, useState } from 'react';
import { fetchVideos } from '../utils/fetch';
import SingleVideo from '../components/SingleVideo/SingleVideo';

export default function Videos() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchVideos()
      .then((data) => setVideos(data))
      .catch(console.error);
  }, []);

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
