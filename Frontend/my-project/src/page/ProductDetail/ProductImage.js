import React, { useState } from 'react';
import { Image } from 'antd';
import Slider from 'react-slick';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ProductDetailsTab = () => {
    const [mainImage, setMainImage] = useState('/img/product/product8.jpg'); 

    const handleImageClick = (newSrc) => {
        setMainImage(newSrc); 
    };

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <button type="button" className="slick-prev"><LeftOutlined /></button>,
        nextArrow: <button type="button" className="slick-next"><RightOutlined /></button>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="col-lg-5 col-md-5">
            <div className="product-details-tab">
                <div id="img-1" className="zoomWrapper single-zoom">
                    <Link href="#">
                        <Image className='ImgProduct' id="zoom1" src={mainImage} data-zoom-image="/img/product/product5.jpg" alt="big-1" style={{ width: '100%', height: 'auto' }} />
                    </Link>
                </div>

                <div className="single-zoom-thumb">
                    <Slider {...settings} className="s-tab-zoom">
                        <div>
                            <img className='ImgProduct' onClick={() => handleImageClick('/img/product/product4.jpg')} src="/img/s-product/product3.jpg" alt="zo-th-1" />
                        </div>
                        <div>
                            <img className='ImgProduct' onClick={() => handleImageClick('/img/product/product6.jpg')} src="/img/s-product/product.jpg" alt="zo-th-1" />
                        </div>
                        <div>
                            <img className='ImgProduct' onClick={() => handleImageClick('/img/product/product8.jpg')} src="/img/s-product/product2.jpg" alt="zo-th-1" />
                        </div>
                        <div>
                            <img className='ImgProduct' onClick={() => handleImageClick('/img/product/product2.jpg')} src="/img/s-product/product4.jpg" alt="zo-th-1" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsTab;
