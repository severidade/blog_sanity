import React, { useState, useEffect } from 'react';
import sanityClient from "../cliente.js";
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/formatDate.js';

export default function BlogPosts() {
  const [postData, setPost ] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"] | order(publishedAt desc) {
        title,
        sub_title,
        slug,
        mainImage{
          asset-> {
            _id,
            url
          },
          alt
        },
        thumbnailImage{
          asset-> {
            _id,
            url
          },
          alt
        },
        publishedAt
      }`)
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

   if(!postData) return <div>Carregendo...</div>;

  return(
    <main className='container_main'>
      <section>
        {/* <h1>Blog Posts Página</h1> */}
        <h2>NEW on the Blog</h2>
        <div className='containar_posts'>
        {/* O operador && é usado para verificar se postData tem algum valor antes de executar o método map. Se postData for null ou undefined, a expressão retorna false e o método map não é executado, evitando possíveis erros. */}
          {postData && postData.map((post, index) =>(
            <article className='post'>
              <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                <span className='post_container'>
                  <div className='sideWire'></div>
                  <figure className='container_img_post'>
                    <img
                      src={ post.thumbnailImage ? post.thumbnailImage.asset.url : post.mainImage.asset.url }
                      alt={`Esta é a thumbnail do post "${post.title}"`}
                  />
                  </figure>
                  <span className='post_title'>
                    <h3>{post.title}</h3>
                    <p>{post.sub_title}</p>
                  </span>
                  <div className='container_post_date'>
                    <span className='post_date' 
                      dangerouslySetInnerHTML={{__html: formatDate(post.publishedAt)}}>
                    </span>
                    <div class="fio"></div>
                  </div>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

// import React from 'react';

// export default function BlogPosts() {

//   return(
//     <div className='container_blog'>
//       <h1>Página que lista todos os posts</h1>
//     </div>
//   )
// }