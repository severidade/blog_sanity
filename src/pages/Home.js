import React, { useState, useEffect } from 'react';
// import sanityClient from '../cliente';
import Footer from '../components/Footer/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { fetchHomeCarousel } from '../utils/fetch';
// import { Link } from 'react-router-dom';

export default function Home() {

  const [posts, setPosts] = useState([]);
  const numPostsToShow = 3;

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
      {/* <Slider>
        <div>
          Conteúdo do slide 1
        </div>
        <div>
          Conteúdo do slide 2
        </div>
        <div>
          Conteúdo do slide 3
        </div>
      </Slider> */}
      {posts.length > 0 ? (
          <Slider>
            {posts.map((post) => (
              <div key={post.slug} className='slider'>
                {/* Conteúdo do slide */}
                <div className='conteudo'>
                  <h2>{post.title}</h2>
                  <p>{post.sub_title}</p>
                </div>
                <figure className="foto">
                  <img
                    // className={ styles.thumbnail }
                    src={ post.mainImage.asset.url }
                    alt={`Esta é a thumbnail do post "${post.title}"`}
                  />
                </figure>
                {/* <Link to={`/posts/${post.slug}`}>Ver Post</Link> */}
              </div>
            ))}
          </Slider>
        ) : (
          <div className='loading'>Loading...</div>
        )}
      <section className='container_section'>
        <h1>Sobre esse blog</h1>
        <p>Sanity é uma plataforma de gerenciamento de conteúdo (Content Management System - CMS) que permite criar, gerenciar e distribuir conteúdo para aplicativos, sites e outros canais digitais. No entanto, ela se diferencia dos CMS tradicionais por ser uma plataforma headless, o que significa que ela separa a camada de gerenciamento de conteúdo da camada de apresentação, permitindo que o conteúdo seja consumido por diferentes interfaces e dispositivos. Além disso, a Sanity é altamente flexível e customizável, permitindo que os desenvolvedores criem soluções sob medida para seus projetos.</p>
      </section>
      <Footer />
    </main>
  )
}