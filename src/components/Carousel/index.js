import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "./carousel.css"

export default function carousel({ children }) {
  const posts = children;

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  // console.log(post.length);
  return(
    <div className='container_carousel'>
      {posts.length > 0 ? (
        <Slider {...settings}>
          {posts.map((post) => (
            <div key={post.slug} className='slider'>
              <div className='conteudo'>
                <h2>{post.title}</h2>
                <p>{post.sub_title}</p>
              </div>
              <figure className="foto">
                <img
                  src={ post.mainImage.asset.url }
                  alt={`Esta é a thumbnail do post "${post.title}"`}
                />
              </figure>
            </div>
          ))}
        </Slider>
      ) : (
        <div className='loading'>Loading...</div>
      )}
    </div>
  )
}