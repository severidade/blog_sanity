import React, { useState, useEffect } from 'react';
import sanityClient from '../cliente';
import Footer from '../components/Footer/Footer';
// import imageUrlBuilder from '@sanity/image-url';
// import BlockContent from '@sanity/block-content-to-react';

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source)
// }

export default function Home() {

  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
      }`)
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if(!author) return <div className='loading'>Loading...</div>;

  return(
    <main>
      <section className='container_section'>
        {/* <figure className='container_image'>
          <img
            src={urlFor(author.authorImage).url()}
            alt={author.name}
          />
        </figure>
        <h1>{author.name}</h1>
        <div>
          <BlockContent blocks={author.bio}/>
        </div> */}
        <h1>Sobre esse blog</h1>
        <p>Sanity é uma plataforma de gerenciamento de conteúdo (Content Management System - CMS) que permite criar, gerenciar e distribuir conteúdo para aplicativos, sites e outros canais digitais. No entanto, ela se diferencia dos CMS tradicionais por ser uma plataforma headless, o que significa que ela separa a camada de gerenciamento de conteúdo da camada de apresentação, permitindo que o conteúdo seja consumido por diferentes interfaces e dispositivos. Além disso, a Sanity é altamente flexível e customizável, permitindo que os desenvolvedores criem soluções sob medida para seus projetos.</p>
      </section>
      <Footer />
    </main>
  )
}