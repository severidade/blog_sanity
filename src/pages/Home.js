import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import { fetchHomeCarousel } from '../utils/fetch';

import Carousel from '../components/Carousel';

export default function Home() {

  const [posts, setPosts] = useState([]);
  const numPostsToShow = 5;

  useEffect(() => {
    async function fetchCarouselPostsData() {
      try {
        const data = await fetchHomeCarousel(numPostsToShow);
        setPosts(data);
      } catch (error) {
        // Lida com o erro na busca dos posts para o carrossel
      }
    }

    fetchCarouselPostsData();
  }, []);

  if(!posts) return <div className='loading'>Loading...</div>;

  return(
    <main className='container_main'>
      <Carousel children={ posts }/>
      <section className='container_section'>
        <h1>Sobre esse blog</h1>
        <p>Sanity é uma plataforma de gerenciamento de conteúdo (Content Management System - CMS) que permite criar, gerenciar e distribuir conteúdo para aplicativos, sites e outros canais digitais. No entanto, ela se diferencia dos CMS tradicionais por ser uma plataforma headless, o que significa que ela separa a camada de gerenciamento de conteúdo da camada de apresentação, permitindo que o conteúdo seja consumido por diferentes interfaces e dispositivos. Além disso, a Sanity é altamente flexível e customizável, permitindo que os desenvolvedores criem soluções sob medida para seus projetos.</p>
      </section>
      <Footer />
    </main>
  )
}