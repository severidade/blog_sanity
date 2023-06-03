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
      <section className='container_home'>
        <h1 className='post_title'>Sobre esse blog</h1>
        <p>Este blog em React adota a abordagem headless, na qual a camada de gerenciamento de conteúdo é separada da camada de apresentação. Diferentemente dos CMS tradicionais, como o WordPress, essa separação permite que o conteúdo seja consumido por diferentes interfaces e dispositivos de forma mais flexível. Dos CMS headless disponíveis optei por usar o Sanity pela facilidade de instalação e configuração</p>

        <p>Essa experiência de configurar e integrar o Sanity com o React foi uma valiosa oportunidade de aprendizado e prática, permitindo que eu explorasse as capacidades do CMS headless e entendesse como ele pode ser utilizado para criar aplicações web mais dinâmicas e personalizáveis.</p>

        <h1>Dependências</h1>
        <ul>
          <li>O <strong>ReactPlayer</strong>, usado na seção de vídeos, é uma biblioteca popular e poderosa para reprodução de mídia em aplicações React. Ela oferece uma maneira fácil de incorporar e controlar diferentes tipos de mídia, como vídeos e áudios, em componentes React.</li>
          <li>Para a criação do Carrossel de imagens na página Home usei o <strong>Slick Carousel</strong> devido a sua facilidade de uso, configuração e API intuitiva. </li>
        </ul>
    
      </section>
      <Footer />
    </main>
  )
}