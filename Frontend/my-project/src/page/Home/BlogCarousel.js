import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button className={className} style={{ ...style, display: "block" }} onClick={onClick}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button className={className} style={{ ...style, display: "block" }} onClick={onClick}>
            <FontAwesomeIcon icon={faAngleRight} />
        </button>
    );
};

const BlogCarousel = () => {
    const settings = {
        autoplay: true,
        loop: true,
        nav: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        dots: false,
        margin: 30,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };

    const blogs = [
        {
            imgSrc: "/img/blog/blog1.jpg",
            title: "Mercedes Benz– Mirror To The Soul 360",
            author: " ecommerce Themes",
            date: "30 Oct 2017",
            description: "Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as...",
            link: "blog-details"
        },
        {
            imgSrc: "/img/blog/blog2.jpg",
            title: "Dior F/W 2015 First Fashion Experience",
            author: " ecommerce Themes",
            date: "30 Oct 2017",
            description: "Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as...",
            link: "blog-details"
        },
        {
            imgSrc: "/img/blog/blog3.jpg",
            title: "London Fashion Week & Royal Day",
            author: " ecommerce Themes",
            date: "30 Oct 2017",
            description: "Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as...",
            link: "blog-details"
        },
        {
            imgSrc: "/img/blog/blog2.jpg",
            title: "Best of New York Spring/Summer 2016",
            author: " ecommerce Themes",
            date: "30 Oct 2017",
            description: "Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as...",
            link: "blog-details"
        }
    ];

    return (
        <div className="row">
            <div className="blog_wrapper blog_column3">
                <Slider {...settings}>
                    {blogs.map((blog, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className="single_blog">
                                <div className="blog_thumb">
                                    <Link to={blog.link}><img src={blog.imgSrc} alt="" /></Link>
                                    <div className="blog_icon">
                                        <a href={blog.link}>Xem chi tiết</a>
                                    </div>
                                </div>
                                <div className="blog_content">
                                    <h3><a href={blog.link}>{blog.title}</a></h3>
                                    <div className="author_name">
                                        <p>
                                            <span className="post_by">by</span>
                                            <span className="themes">{blog.author}</span>
                                            / {blog.date}
                                        </p>
                                    </div>
                                    <div className="post_desc">
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </Slider>
            </div>
        </div>
    );
};

export default BlogCarousel;
