import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 8000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
};

function BlogCarousel() {
    return (
        <Slider {...sliderSettings} className="blog_thumb_active">
            <div className="single_blog_thumb">
                <a href="#"><img src="/img/blog/blog1.png" alt="Blog 1" /></a>
            </div>
            <div className="single_blog_thumb">
                <a href="#"><img src="/img/blog/blog2.png" alt="Blog 2" /></a>
            </div>
            <div className="single_blog_thumb">
                <a href="#"><img src="/img/blog/blog3.png" alt="Blog 3" /></a>
            </div>
            <div className="single_blog_thumb">
                <a href="#"><img src="/img/blog/blog1.png" alt="Blog 4" /></a>
            </div>
        </Slider>
    );
}

export default BlogCarousel;
