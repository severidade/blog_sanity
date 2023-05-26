import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "./carousel.css"
import { Link } from 'react-router-dom';

export default function carousel({ children }) {
  const posts = children;

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 200,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return(
    <div className='container_carousel'>
      {posts.length > 0 ? (
        <Slider {...settings}>
          {posts.map((post) => (
            <div key={post.slug} className='slider'>
              <div className='container_post_summary'>
                <div className='post_summary'>
                  <h2>{post.title}</h2>
                  <p>{post.sub_title}</p>
                </div>
              </div>
              <figure className="foto">
                <img
                  src={ post.mainImage.asset.url }
                  alt={`Esta é a thumbnail do post "${post.title}"`}
                />
              </figure>
              <Link 
                to={"/post/" + post.slug.current}
                key={post.slug.current}
                className='show_more'
              >
                +
              </Link>
            </div>
          ))}
        </Slider>
      ) : (
        <div className='loading'>Loading...</div>
      )}
    </div>
  )
}