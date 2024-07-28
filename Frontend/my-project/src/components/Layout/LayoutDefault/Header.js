import React, { useState, useEffect, useRef } from 'react';
import { IoChevronDownOutline, IoSearchOutline, IoCartOutline, IoCloseSharp, IoMenuOutline } from "react-icons/io5";

import { Link } from "react-router-dom"

function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [linksDropdownOpen, setLinksDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            if (scroll > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setLinksDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLinksClick = () => {
        setLinksDropdownOpen(!linksDropdownOpen);
    };

    return (
        <>
            <div className="off_canvars_overlay">
            </div>
            <div className="offcanvas_menu">
                <div className="canvas_open">
                    <Link to={"/"}><IoMenuOutline /></Link>
                </div>
                <div className="offcanvas_menu_wrapper">
                    <div className="canvas_close">
                        <Link to={"/"}><IoCloseSharp /></Link>
                    </div>
                    <div className="welcome_text">
                        <ul>
                            <li><span>Free Delivery:</span> Take advantage of our time to save event</li>
                            <li><span>Free Returns *</span> Satisfaction guaranteed</li>
                        </ul>
                    </div>

                    <div className="top_right">
                        <ul>
                            <li className="top_links"><Link to="/">My Account <IoChevronDownOutline /></Link>
                                <ul className="dropdown_links">
                                    <li><a href="wishlist.html">My Wish List </a></li>
                                    <li><a href="my-account.html">My Account </a></li>
                                    <li><Link to={"/login"}>Sign In</Link></li>
                                    <li><a href="compare.html">Compare Products  </a></li>
                                </ul>
                            </li>
                            <li className="language"><a href="compare.html"><img src="assets/img/logo/language.png" alt="" /> English <i className="ion-chevron-down"></i></a>
                                <ul className="dropdown_language">
                                    <li><a href="compare.html"><img src="assets/img/logo/cigar.jpg" alt="" /> French</a></li>
                                    <li><a href="compare.html"><img src="assets/img/logo/language2.png" alt="" />German</a></li>
                                </ul>
                            </li>
                            <li className="currency"><a href="compare.html">USD <i className="ion-chevron-down"></i></a>
                                <ul className="dropdown_currency">
                                    <li><a href="compare.html">EUR</a></li>
                                    <li><a href="compare.html">BRL</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="search_bar">
                        <form action="#">
                            <select className="select_option" name="select" id="categori">
                                <option selected value="1">All Categories</option>
                                <option value="2">Accessories</option>
                                <option value="3">Bridge</option>
                                <option value="4">Hub</option>
                                <option value="5">Repeater</option>
                                <option value="6">Switch</option>
                                <option value="7">Video Games</option>
                                <option value="8">PlayStation 3</option>
                                <option value="9">PlayStation 4</option>
                                <option value="10">Xbox 360</option>
                                <option value="11">Xbox One</option>
                            </select>
                            <input placeholder="Search entire store here..." type="text" />
                            <button type="submit"><IoSearchOutline /></button>
                        </form>
                    </div>
                    <div className="cart_area">
                        <div className="middel_links">
                            <ul>
                                <li><a href="login.html">Login</a></li>
                                <li>/</li>
                                <li><a href="login.html">Register</a></li>
                            </ul>

                        </div>
                        <div className="cart_link">
                            <Link to={"/cart"}><IoCartOutline />2 item(s)</Link>
                            <div className="mini_cart">
                                <div className="cart_item top">
                                    <div className="cart_img">
                                        <a href="#"><img src="/img/s-product/product.jpg" alt="" /></a>
                                    </div>
                                    <div className="cart_info">
                                        <a href="#">Apple iPhone SE 16GB</a>
                                        <span>1x $60.00</span>

                                    </div>
                                    <div className="cart_remove">
                                        <a href="#"><IoCloseSharp /></a>
                                    </div>
                                </div>
                                <div className="cart_item bottom">
                                    <div className="cart_img">
                                        <a href="#"><img src="assets/img/s-product/product2.jpg" alt="" /></a>
                                    </div>
                                    <div className="cart_info">
                                        <a href="#">Marshall Portable  Bluetooth</a>
                                        <span> 1x $160.00</span>
                                    </div>
                                    <div className="cart_remove">
                                        <a href="#"><IoCloseSharp /></a>
                                    </div>
                                </div>
                                <div className="cart__table">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="text-left">Sub-Total :</td>
                                                <td className="text-right">$150.00</td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Total :</td>
                                                <td className="text-right">$184.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="cart_button view_cart">
                                    <Link to={"/cart"}>View Cart</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div id="menu" className="text-left ">
                        <ul className="offcanvas_main_menu">
                            <li className="menu-item-has-children active">
                                <Link to={"/"}>Home</Link>
                                <ul className="sub-menu">
                                    <li><a href="index.html">Home 1</a></li>
                                    <li><a href="index-2.html">Home 2</a></li>
                                    <li><a href="index-3.html">Home 3</a></li>
                                    <li><a href="index-4.html">Home 4</a></li>
                                    <li><a href="index-5.html">Home 5</a></li>
                                    <li><a href="index-6.html">Home 6</a></li>
                                    <li><a href="index-7.html">Home 7</a></li>
                                    <li><a href="index-8.html">Home 8</a></li>
                                    <li><a href="index-9.html">Home 9</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link to={"/shop"}>Shop</Link>
                                <ul className="sub-menu">
                                    <li className="menu-item-has-children">
                                        <Link to={"/shop"}>Shop Layouts</Link>
                                        <ul className="sub-menu">
                                            <li><a href="shop.html">shop</a></li>
                                            <li><a href="shop-fullwidth.html">Full Width</a></li>
                                            <li><a href="shop-fullwidth-list.html">Full Width list</a></li>
                                            <li><a href="shop-right-sidebar.html">Right Sidebar </a></li>
                                            <li><a href="shop-right-sidebar-list.html"> Right Sidebar list</a></li>
                                            <li><a href="shop-list.html">List View</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">other Pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="portfolio.html">portfolio</a></li>
                                            <li><a href="portfolio-details.html">portfolio details</a></li>
                                            <li><a href="cart.html">cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="my-account.html">my account</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Product Types</a>
                                        <ul className="sub-menu">
                                            <li><a href="product-details.html">product details</a></li>
                                            <li><a href="product-sidebar.html">product sidebar</a></li>
                                            <li><a href="product-grouped.html">product grouped</a></li>
                                            <li><a href="variable-product.html">product variable</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link to={"/blogs"}>blog</Link>
                                <ul className="sub-menu">
                                    <li><a href="blog.html">blog</a></li>
                                    <li><a href="blog-details.html">blog details</a></li>
                                    <li><a href="blog-sidebar.html">blog  Sidebar</a></li>
                                    <li><a href="blog-fullwidth.html">blog fullwidth</a></li>
                                </ul>

                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">pages </a>
                                <ul className="sub-menu">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="services.html">services</a></li>
                                    <li><a href="faq.html">Frequently Questions</a></li>
                                    <li><a href="contact.html">contact</a></li>
                                    <li><a href="login.html">login</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="404.html">Error 404</a></li>
                                    <li><a href="compare.html">compare</a></li>
                                    <li><a href="privacy-policy.html">privacy policy</a></li>
                                    <li><a href="coming-soon.html">coming soon</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="my-account.html">my account</a>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="about.html">About Us</a>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="contact.html"> Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="offcanvas_footer">
                        <span><a href="#"><i className="fa fa-envelope-o"></i> info@yourdomain.com</a></span>
                        <ul>
                            <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li className="pinterest"><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                            <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <header className="header_area header_three">
                <div className="header_top">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12">
                                <div className="welcome_text">
                                    <ul>
                                        <li><span>Free Delivery:</span> Take advantage of our time to save event</li>
                                        <li><span>Free Returns *</span> Satisfaction guaranteed</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="top_right text-right">
                                    <ul>
                                        <li className="top_links" ref={dropdownRef}>
                                            <Link onClick={handleLinksClick} className={linksDropdownOpen ? 'open' : ''}>
                                                My Account <IoChevronDownOutline />
                                            </Link>
                                            <ul className={`dropdown_links ${linksDropdownOpen ? 'open' : ''}`}>
                                                <li><a href="wishlist.html">My Wish List</a></li>
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><Link to={"/login"}>Sign In</Link></li>
                                                <li><a href="compare.html">Compare Products</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_middel">
                    <div className="container-fluid">
                        <div className="middel_inner">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="search_bar">
                                        <form action="#">
                                            <input placeholder="Search entire store here..." type="text" />
                                            <button type="submit"><IoSearchOutline /></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="logo">
                                        <Link to={"/"}><img src="/img/logo/logo.png" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cart_area">
                                        <div className="cart_link">
                                            <Link to={"/cart"}><IoCartOutline /> 2 item(s)</Link>
                                            <div className="mini_cart">
                                                <div className="cart_item top">
                                                    <div className="cart_img">
                                                        <Link href="#"><img src="/img/s-product/product2.jpg" alt="123" /></Link>
                                                    </div>
                                                    <div className="cart_info">
                                                        <Link href="#">Apple iPhone SE 16GB</Link>
                                                        <span>1x $60.00</span>
                                                    </div>
                                                    <div className="cart_remove">
                                                        <Link href="#"><IoCloseSharp /></Link>
                                                    </div>
                                                </div>
                                                <div className="cart_item bottom">
                                                    <div className="cart_img">
                                                        <Link href="#"><img src="/img/s-product/product3.jpg" alt="123" /></Link>
                                                    </div>
                                                    <div className="cart_info">
                                                        <Link href="#">Marshall Portable  Bluetooth</Link>
                                                        <span> 1x $160.00</span>
                                                    </div>
                                                    <div className="cart_remove">
                                                        <Link href="#"><IoCloseSharp /></Link>
                                                    </div>
                                                </div>
                                                <div className="cart__table">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="text-left">Sub-Total :</td>
                                                                <td className="text-right">$150.00</td>
                                                            </tr>

                                                            <tr>
                                                                <td className="text-left">Total :</td>
                                                                <td className="text-right">$184.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="cart_button view_cart">
                                                    <Link to={"/cart"}>View Cart</Link>
                                                </div>                                  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="horizontal_menu">
                            <div className="left_menu">
                                <div className="main_menu">
                                    <nav>
                                        <ul>
                                            <li className="active"><Link to={"/"}>Home <IoChevronDownOutline/></Link>
                                                <ul className="sub_menu">
                                                    <li><a href="index.html">Home 1</a></li>
                                                    <li><a href="index-2.html">Home 2</a></li>
                                                    <li><a href="index-3.html">Home 3</a></li>
                                                    <li><a href="index-4.html">Home 4</a></li>
                                                    <li><a href="index-5.html">Home 5</a></li>
                                                    <li><a href="index-6.html">Home 6</a></li>
                                                    <li><a href="index-7.html">Home 7</a></li>
                                                    <li><a href="index-8.html">Home 8</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega_items"><Link to={"/shop"}>shop <IoChevronDownOutline/></Link>
                                                <ul className="mega_menu">
                                                    <li><Link href="#">Shop Layouts</Link>
                                                        <ul>
                                                            <li><a href="shop-fullwidth.html">Full Width</a></li>
                                                            <li><a href="shop-fullwidth-list.html">Full Width list</a></li>
                                                            <li><a href="shop-right-sidebar.html">Right Sidebar </a></li>
                                                            <li><a href="shop-right-sidebar-list.html"> Right Sidebar list</a></li>
                                                            <li><a href="shop-list.html">List View</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="#">other Pages</Link>
                                                        <ul>
                                                            <li><a href="portfolio.html">portfolio</a></li>
                                                            <li><a href="portfolio-details.html">portfolio details</a></li>
                                                            <li><a href="cart.html">cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                            <li><a href="my-account.html">my account</a></li>


                                                        </ul>
                                                    </li>
                                                    <li><Link href="#">Product Types</Link>
                                                        <ul>
                                                            <li><a href="product-details.html">product details</a></li>
                                                            <li><a href="product-sidebar.html">product sidebar</a></li>
                                                            <li><a href="product-gallery.html">product gallery</a></li>
                                                            <li><a href="product-grouped.html">product grouped</a></li>
                                                            <li><a href="variable-product.html">product variable</a></li>

                                                        </ul>
                                                    </li>
                                                    <li><Link href="#">collection</Link>
                                                        <ul>
                                                            <li><a href="shop.html">Handbag</a></li>
                                                            <li><a href="shop.html">Accessories</a></li>
                                                            <li><a href="shop.html">Clothing</a></li>
                                                            <li><a href="shop.html">Shoes</a></li>
                                                            <li><a href="shop.html">Check Trousers</a></li>

                                                        </ul>
                                                    </li>
                                                    <li className="banner_menu"><Link href="#"><img src="/img/bg/banner1.jpg" alt="" /></Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to={"/blogs"}>blog <IoChevronDownOutline/></Link>
                                                <ul className="sub_menu pages">
                                                    <li><a href="blog-details.html">blog details</a></li>
                                                    <li><a href="blog-sidebar.html">blog  Sidebar</a></li>
                                                    <li><a href="blog-fullwidth.html">blog fullwidth</a></li>
                                                </ul>
                                            </li>
                                            <li><Link href="#">pages <IoChevronDownOutline/></Link>
                                                <ul className="sub_menu pages">
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="services.html">services</a></li>
                                                    <li><a href="faq.html">Frequently Questions</a></li>
                                                    <li><a href="login.html">login</a></li>
                                                    <li><a href="my-account.html">my account</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="404.html">Error 404</a></li>
                                                    <li><a href="compare.html">compare</a></li>
                                                    <li><a href="privacy-policy.html">privacy policy</a></li>
                                                    <li><a href="coming-soon.html">coming soon</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="logo_container">
                                <Link to={"/"}><img src="/img/logo/logo.png" alt="" /></Link>
                            </div>
                            <div className="right_menu">
                                <div className="main_menu">
                                    <nav>
                                        <ul>
                                            <li><Link href="#">Specials</Link></li>
                                            <li><Link href="#">Sneaker</Link></li>
                                            <li><Link to={"/about"}>About us</Link></li>
                                            <li><Link to={"/contact"}>Contact Us</Link></li>
                                        </ul>
                                    </nav>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`header_bottom sticky-header ${isSticky ? 'sticky' : ''}`}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="main_menu_inner">
                                    <div className="main_menu">
                                        <nav>
                                            <ul>
                                                <li className="active"><Link to={"/"}>Home </Link></li>
                                                <li><Link to={"/shop"}>shop </Link></li>
                                                <li><Link to={"/about"}>About us</Link></li>
                                                <li><Link to={"/about"}>pages <IoChevronDownOutline /></Link>
                                                    <ul className="sub_menu pages">
                                                        <li><Link to={"/about"}>About Us</Link></li>
                                                        <li><a href="services.html">services</a></li>
                                                        <li><a href="faq.html">Frequently Questions</a></li>
                                                        <li><Link to={'/login'}>login</Link></li>
                                                        <li><a href="my-account.html">my account</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                        <li><a href="404.html">Error 404</a></li>
                                                        <li><a href="compare.html">compare</a></li>
                                                        <li><a href="privacy-policy.html">privacy policy</a></li>
                                                        <li><a href="coming-soon.html">coming soon</a></li>
                                                    </ul>
                                                </li>
                                                <li><Link to={"/blogs"}>blog</Link></li>
                                                <li><Link to={"/contact"}>Contact Us</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;