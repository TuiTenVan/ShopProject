import React from 'react';
import Slider from 'react-slick';
import { IoCartOutline, IoHeart, IoOptionsOutline } from 'react-icons/io5';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProductCarousel = () => {
    const settings = {
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 4,
        rows: 1,  
        autoplay: true,
        autoplaySpeed: 5000,  
        responsive: [
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    };

    return (
        <Slider {...settings}>
            <div className="col-lg-3">
                <div className="single_product only">
                    <div className="product_thumb">
                        <a className="primary_img" href="product-details.html"><img src="/img/product/product21.jpg" alt="" /></a>
                        <a className="secondary_img" href="product-details.html"><img src="/img/product/product22.jpg" alt="" /></a>
                        <div class="product_action">
                            <div class="hover_action">
                                <a href="#"><FaPlus /></a>
                                <div class="action_button">
                                    <ul>
                                        <li><a title="add to cart" href="cart.html"><IoCartOutline/></a></li>
                                        <li><a href="wishlist.html" title="Add to Wishlist"><IoHeart/></a></li>

                                        <li><a href="compare.html" title="Add to Compare"><IoOptionsOutline/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="quick_button">
                            <Link to={"/product-detail"}>Xem sản phẩm</Link>
                        </div>

                        <div className="product_sale">
                            <span>-7%</span>
                        </div>
                    </div>
                    <div className="product_content">
                        <h3><a href="product-details.html">Marshall Portable Bluetooth</a></h3>
                        <span className="current_price">£60.00</span>
                        <span className="old_price">£86.00</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="single_product only">
                    <div className="product_thumb">
                        <a className="primary_img" href="product-details.html"><img src="/img/product/product27.jpg" alt="" /></a>
                        <a className="secondary_img" href="product-details.html"><img src="/img/product/product28.jpg" alt="" /></a>
                        <div class="product_action">
                            <div class="hover_action">
                                <a href="#"><FaPlus /></a>
                                <div class="action_button">
                                    <ul>
                                        <li><a title="add to cart" href="cart.html"><IoCartOutline/></a></li>
                                        <li><a href="wishlist.html" title="Add to Wishlist"><IoHeart/></a></li>

                                        <li><a href="compare.html" title="Add to Compare"><IoOptionsOutline/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="quick_button">
                            <Link to={"/product-detail"}>Xem sản phẩm</Link>
                        </div>
                    </div>
                    <div className="product_content">
                        <h3><a href="product-details.html">Koss KPH7 Portable</a></h3>
                        <span className="current_price">£60.00</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="single_product only">
                    <div className="product_thumb">
                        <a className="primary_img" href="product-details.html"><img src="/img/product/product6.jpg" alt="" /></a>
                        <a className="secondary_img" href="product-details.html"><img src="/img/product/product5.jpg" alt="" /></a>
                        <div class="product_action">
                            <div class="hover_action">
                                <a href="#"><FaPlus /></a>
                                <div class="action_button">
                                    <ul>
                                        <li><a title="add to cart" href="cart.html"><IoCartOutline/></a></li>
                                        <li><a href="wishlist.html" title="Add to Wishlist"><IoHeart/></a></li>

                                        <li><a href="compare.html" title="Add to Compare"><IoOptionsOutline/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="quick_button">
                            <Link to={"/product-detail"}>Xem sản phẩm</Link>
                        </div>

                    </div>
                    <div className="product_content">
                        <h3><a href="product-details.html">Beats Solo2 Solo 2</a></h3>
                        <span className="current_price">£60.00</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="single_product only">
                    <div className="product_thumb">
                        <a className="primary_img" href="product-details.html"><img src="/img/product/product7.jpg" alt="" /></a>
                        <a className="secondary_img" href="product-details.html"><img src="/img/product/product8.jpg" alt="" /></a>
                        <div class="product_action">
                            <div class="hover_action">
                                <a href="#"><FaPlus /></a>
                                <div class="action_button">
                                    <ul>
                                        <li><a title="add to cart" href="cart.html"><IoCartOutline/></a></li>
                                        <li><a href="wishlist.html" title="Add to Wishlist"><IoHeart/></a></li>

                                        <li><a href="compare.html" title="Add to Compare"><IoOptionsOutline/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="quick_button">
                            <Link to={"/product-detail"}>Xem sản phẩm</Link>
                        </div>

                        <div className="product_sale">
                            <span>-7%</span>
                        </div>
                    </div>
                    <div className="product_content">
                        <h3><a href="product-details.html">Beats EP Wired</a></h3>
                        <span className="current_price">£60.00</span>
                        <span className="old_price">£86.00</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="single_product only">
                    <div className="product_thumb">
                        <a className="primary_img" href="product-details.html"><img src="/img/product/product24.jpg" alt="" /></a>
                        <a className="secondary_img" href="product-details.html"><img src="/img/product/product25.jpg" alt="" /></a>
                        <div class="product_action">
                            <div class="hover_action">
                                <a href="#"><FaPlus /></a>
                                <div class="action_button">
                                    <ul>
                                        <li><a title="add to cart" href="cart.html"><IoCartOutline/></a></li>
                                        <li><a href="wishlist.html" title="Add to Wishlist"><IoHeart/></a></li>

                                        <li><a href="compare.html" title="Add to Compare"><IoOptionsOutline/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="quick_button">
                            <Link to={"/product-detail"}>Xem sản phẩm</Link>
                        </div>
                    </div>
                    <div className="product_content">
                        <h3><a href="product-details.html">Bose SoundLink Bluetooth</a></h3>
                        <span className="current_price">£60.00</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="single_product only">
                    <div className="product_thumb">
                        <a className="primary_img" href="product-details.html"><img src="/img/product/product10.jpg" alt="" /></a>
                        <a className="secondary_img" href="product-details.html"><img src="/img/product/product11.jpg" alt="" /></a>
                        <div class="product_action">
                            <div class="hover_action">
                                <a href="#"><FaPlus /></a>
                                <div class="action_button">
                                    <ul>
                                        <li><a title="add to cart" href="cart.html"><IoCartOutline/></a></li>
                                        <li><a href="wishlist.html" title="Add to Wishlist"><IoHeart/></a></li>

                                        <li><a href="compare.html" title="Add to Compare"><IoOptionsOutline/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="quick_button">
                            <Link to={"/product-detail"}>Xem sản phẩm</Link>
                        </div>

                        <div className="product_sale">
                            <span>-7%</span>
                        </div>
                    </div>
                    <div className="product_content">
                        <h3><a href="product-details.html">Apple iPhone SE 16GB</a></h3>
                        <span className="current_price">£60.00</span>
                        <span className="old_price">£86.00</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="single_product only">
                    <div className="product_thumb">
                        <a className="primary_img" href="product-details.html"><img src="/img/product/product23.jpg" alt="" /></a>
                        <a className="secondary_img" href="product-details.html"><img src="/img/product/product24.jpg" alt="" /></a>
                        <div class="product_action">
                            <div class="hover_action">
                                <a href="#"><FaPlus /></a>
                                <div class="action_button">
                                    <ul>
                                        <li><a title="add to cart" href="cart.html"><IoCartOutline/></a></li>
                                        <li><a href="wishlist.html" title="Add to Wishlist"><IoHeart/></a></li>

                                        <li><a href="compare.html" title="Add to Compare"><IoOptionsOutline/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="quick_button">
                            <Link to={"/product-detail"}>Xem sản phẩm</Link>
                        </div>
                    </div>
                    <div className="product_content">
                        <h3><a href="product-details.html">JBL Flip 3 Portable</a></h3>
                        <span className="current_price">£60.00</span>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default ProductCarousel;
