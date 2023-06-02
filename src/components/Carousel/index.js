import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "./carousel.css"
import { Link } from 'react-router-dom';

export default function Carousel({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const posts = children;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    swipeThreshold: 1, // reduz o deslizamento horizontal para ativar o slider - padrao é 5
    beforeChange: (current, next) => setCurrentSlide(next)
  };

  return(
    <div className='container_carousel'>
      {posts.length > 0 ? (
        <Slider {...settings}>
          {posts.map((post, index) => (
            <div key={post.slug} className='slider'>
              <div className='container_slider'>
                <div className='container_post_summary'>
                  <div className='post_summary'>
                    <h2>{post.title}</h2>
                    <p>{post.sub_title}</p>
                  </div>
                </div>
                <figure className="container_slider_picture">
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
                 Read More
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className='loading_carousel'>Loading...</div>
      )}
      {posts.length > 0 && (
        <div className="total_posts">
          <ul className="dots">
            {posts.map((post, index) => (
              <li
                key={post.slug}
                className={index === currentSlide ? 'active' : ''}
              >
                <button>{index + 1}</button>
              </li>
            ))}
          </ul>
          <span className="total_items">{posts.length}</span>
        </div>
      )}
    </div>
  )
}
