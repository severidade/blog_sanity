import React, { useEffect, useState } from 'react';
import { fetchVideos } from '../utils/fetch';
import SingleVideo from '../components/SingleVideo/SingleVideo';
import Pagination from '../components/Pagination/Pagination';

import { useDispatch } from 'react-redux';
import { setPlayingVideoId } from '../store';
import Footer from '../components/Footer/Footer';

export default function Videos() {
  const [videos, setVideos] = useState(null);
  const dispatch = useDispatch();
  // useDispatch é um hook fornecido pela biblioteca react-redux que permite que componentes do React disparem ações para a store do Redux.

  const [pageNumber, setPageNumber] = useState(0);
  const [perPage, setPerPage] = useState(null);


  useEffect(() => {
    fetchVideos()
      .then((data) => setVideos(data))
      .catch(console.error);
    
      // Limpa o estado global ao sair da página
    return () => {
      dispatch(setPlayingVideoId(null)); 
    };
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPerPage(3);
      } else if (window.innerWidth < 900) {
        setPerPage(4);
      } else {
        setPerPage(8);
      }
    };
    
    handleResize(); // quando o componete e montado

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!videos) return <div className='loading'>Loading...</div>;

  const pageCount = Math.ceil(videos.length / perPage);
  const handlePageClick = (data) => {
    setPageNumber(data.selected);
  };

  const start = pageNumber * perPage;
  const end = start + perPage;
  const currentItems = videos.slice(start, end);

  return (
    <main className="container_main">
      <section className="container_section">
        <h2>Vídeos</h2>
        <div className='container_videos'>
          {currentItems.map((video) => (
            <SingleVideo video={video} />
          ))}
          { pageCount > 1 && (
            <Pagination 
              pageCount={pageCount}
              handlePageClick={handlePageClick}
              currentPage={pageNumber}
            />
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
