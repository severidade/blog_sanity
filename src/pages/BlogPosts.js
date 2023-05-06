import React, { useState, useEffect } from 'react';
import sanityClient from "../cliente.js";
import PosstList from '../componentes/PostList/PostList.js';

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
        <h2>NEW on the Blog</h2>
        <div className='container_list_posts'>        
        {/* O operador && é usado para verificar se postData tem algum valor antes de executar o método map. Se postData for null ou undefined, a expressão retorna false e o método map não é executado, evitando possíveis erros. */}
          {postData && postData.map((post, index) =>(
            <PosstList key={post.slug.current} post={post}/>
          ))}
        </div>
      </section>
    </main>
  )
}