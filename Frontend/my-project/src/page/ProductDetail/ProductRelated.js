import React, { useState } from 'react';
import Slider from 'react-slick';
import { IoCartOutline, IoHeart, IoOptionsOutline } from 'react-icons/io5';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Modal from './ProductModal';

function ProductRelated() {
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
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
    };

    return (

        <>
            <Slider {...settings}>
                <div className="col-lg-3">
                    <div className="single_product only">
                        <div className="product_thumb">
                            <Link className="primary_img" to="product-details.html"><img src="/img/product/product21.jpg" alt="" /></Link>
                            <Link className="secondary_img" to="product-details.html"><img src="/img/product/product22.jpg" alt="" /></Link>
                            <div className="product_action">
                                <div className="hover_action">
                                    <Link to="#"><FaPlus /></Link>
                                    <div className="action_button">
                                        <ul>
                                            <li><Link title="add to cart" to="cart.html"><IoCartOutline /></Link></li>
                                            <li><Link to="wishlist.html" title="Add to Wishlist"><IoHeart /></Link></li>
                                            <li><Link to="compare.html" title="Add to Compare"><IoOptionsOutline /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="quick_button">
                                <Link to="#" onClick={showModal}>+ quick view</Link>
                            </div>
                            <div className="product_sale">
                                <span>-7%</span>
                            </div>
                        </div>
                        <div className="product_content">
                            <h3><Link to="product-details.html">Marshall Portable Bluetooth</Link></h3>
                            <span className="current_price">£60.00</span>
                            <span className="old_price">£86.00</span>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="col-lg-3">
                    <div className="single_product only">
                        <div className="product_thumb">
                            <Link className="primary_img" href="product-details.html"><img src="/img/product/product27.jpg" alt="" /></Link>
                            <Link className="secondary_img" href="product-details.html"><img src="/img/product/product28.jpg" alt="" /></Link>
                            <div className="product_action">
                                <div className="hover_action">
                                    <Link href="#"><FaPlus /></Link>
                                    <div className="action_button">
                                        <ul>
                                            <li><Link title="add to cart" href="cart.html"><IoCartOutline /></Link></li>
                                            <li><Link href="wishlist.html" title="Add to Wishlist"><IoHeart /></Link></li>
                                            <li><Link href="compare.html" title="Add to Compare"><IoOptionsOutline /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="quick_button">
                            <Link to="#" onClick={showModal}>+ quick view</Link>
                            </div>
                        </div>
                        <div className="product_content">
                            <h3><Link href="product-details.html">Koss KPH7 Portable</Link></h3>
                            <span className="current_price">£60.00</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="single_product only">
                        <div className="product_thumb">
                            <Link className="primary_img" href="product-details.html"><img src="/img/product/product6.jpg" alt="" /></Link>
                            <Link className="secondary_img" href="product-details.html"><img src="/img/product/product5.jpg" alt="" /></Link>
                            <div className="product_action">
                                <div className="hover_action">
                                    <Link href="#"><FaPlus /></Link>
                                    <div className="action_button">
                                        <ul>
                                            <li><Link title="add to cart" href="cart.html"><IoCartOutline /></Link></li>
                                            <li><Link href="wishlist.html" title="Add to Wishlist"><IoHeart /></Link></li>
                                            <li><Link href="compare.html" title="Add to Compare"><IoOptionsOutline /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="quick_button">
                            <Link to="#" onClick={showModal}>+ quick view</Link>
                            </div>
                        </div>
                        <div className="product_content">
                            <h3><Link href="product-details.html">Beats Solo2 Solo 2</Link></h3>
                            <span className="current_price">£60.00</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="single_product only">
                        <div className="product_thumb">
                            <Link className="primary_img" href="product-details.html"><img src="/img/product/product7.jpg" alt="" /></Link>
                            <Link className="secondary_img" href="product-details.html"><img src="/img/product/product8.jpg" alt="" /></Link>
                            <div className="product_action">
                                <div className="hover_action">
                                    <Link href="#"><FaPlus /></Link>
                                    <div className="action_button">
                                        <ul>
                                            <li><Link title="add to cart" href="cart.html"><IoCartOutline /></Link></li>
                                            <li><Link href="wishlist.html" title="Add to Wishlist"><IoHeart /></Link></li>
                                            <li><Link href="compare.html" title="Add to Compare"><IoOptionsOutline /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="quick_button">
                            <Link to="#" onClick={showModal}>+ quick view</Link>
                            </div>
                            <div className="product_sale">
                                <span>-7%</span>
                            </div>
                        </div>
                        <div className="product_content">
                            <h3><Link href="product-details.html">Beats EP Wired</Link></h3>
                            <span className="current_price">£60.00</span>
                            <span className="old_price">£86.00</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="single_product only">
                        <div className="product_thumb">
                            <Link className="primary_img" href="product-details.html"><img src="/img/product/product24.jpg" alt="" /></Link>
                            <Link className="secondary_img" href="product-details.html"><img src="/img/product/product25.jpg" alt="" /></Link>
                            <div className="product_action">
                                <div className="hover_action">
                                    <Link href="#"><FaPlus /></Link>
                                    <div className="action_button">
                                        <ul>
                                            <li><Link title="add to cart" href="cart.html"><IoCartOutline /></Link></li>
                                            <li><Link href="wishlist.html" title="Add to Wishlist"><IoHeart /></Link></li>
                                            <li><Link href="compare.html" title="Add to Compare"><IoOptionsOutline /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="quick_button">
                            <Link to="#" onClick={showModal}>+ quick view</Link>
                            </div>
                        </div>
                        <div className="product_content">
                            <h3><Link href="product-details.html">Bose SoundLink Bluetooth</Link></h3>
                            <span className="current_price">£60.00</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="single_product only">
                        <div className="product_thumb">
                            <Link className="primary_img" href="product-details.html"><img src="/img/product/product10.jpg" alt="" /></Link>
                            <Link className="secondary_img" href="product-details.html"><img src="/img/product/product11.jpg" alt="" /></Link>
                            <div className="product_action">
                                <div className="hover_action">
                                    <Link href="#"><FaPlus /></Link>
                                    <div className="action_button">
                                        <ul>
                                            <li><Link title="add to cart" href="cart.html"><IoCartOutline /></Link></li>
                                            <li><Link href="wishlist.html" title="Add to Wishlist"><IoHeart /></Link></li>
                                            <li><Link href="compare.html" title="Add to Compare"><IoOptionsOutline /></Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="quick_button">
                            <Link to="#" onClick={showModal}>+ quick view</Link>
                            </div>

                            <div className="product_sale">
                                <span>-7%</span>
                            </div>
                        </div>
                        <div className="product_content">
                            <h3><Link href="product-details.html">Apple iPhone SE 16GB</Link></h3>
                            <span className="current_price">£60.00</span>
                            <span className="old_price">£86.00</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="single_product only">
                        <div className="product_thumb">
                            <Link className="primary_img" href="product-details.html"><img src="/img/product/product23.jpg" alt="" /></Link>
                            <Link className="secondary_img" href="product-details.html"><img src="/img/product/product24.jpg" alt="" /></Link>
                            <div className="product_action">
                                <div className="hover_action">
                                    <Link href="#"><FaPlus /></Link>
                                    <div className="action_button">
                                        <ul>
                                            <li><Link title="add to cart" href="cart.html"><IoCartOutline /></Link></li>
                                            <li><Link href="wishlist.html" title="Add to Wishlist"><IoHeart /></Link></li>
                                            <li><Link href="compare.html" title="Add to Compare"><IoOptionsOutline /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="quick_button">
                            <Link to="#" onClick={showModal}>+ quick view</Link>
                            </div>
                        </div>
                        <div className="product_content">
                            <h3><Link href="product-details.html">JBL Flip 3 Portable</Link></h3>
                            <span className="current_price">£60.00</span>
                        </div>
                    </div>
                </div>
            </Slider>
            <Modal isVisible={isModalVisible} hideModal={hideModal} />
        </>
    );
}

export default ProductRelated;
