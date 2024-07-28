import React, { useState } from 'react';
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router-dom';


const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState('info'); 

    const handleTabClick = (key) => {
        setActiveTab(key); 
    };

    return (
        <div className="product_d_inner">
            <div className="product_info_button">
                <ul className="nav" role="tablist">
                    <li className={activeTab === 'info' ? 'active' : ''}>
                        <Link onClick={() => handleTabClick('info')} data-toggle="tab" to={"/product-detail"} role="tab" aria-controls="info" aria-selected={activeTab === 'info' ? 'true' : 'false'}>More info</Link>
                    </li>
                    <li className={activeTab === 'sheet' ? 'active' : ''}>
                        <Link onClick={() => handleTabClick('sheet')} data-toggle="tab" to={"/product-detail"} role="tab" aria-controls="sheet" aria-selected={activeTab === 'sheet' ? 'true' : 'false'}>DatLink sheet</Link>
                    </li>
                    <li className={activeTab === 'reviews' ? 'active' : ''}>
                        <Link onClick={() => handleTabClick('reviews')} data-toggle="tab" to={"/product-detail"} role="tab" aria-controls="reviews" aria-selected={activeTab === 'reviews' ? 'true' : 'false'}>Reviews</Link>
                    </li>
                </ul>
            </div>
            <div className="tab-content">
                <div className={`tab-pane fade ${activeTab === 'info' ? 'show active' : ''}`} id="info" role="tabpanel">
                    <div className="product_info_content">
                    <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into Link full ready-to-wear collection in which every item is Link vital part of Link woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to Link range of accessories including shoes, hats, belts and more!</p>
                    </div>
                </div>

                <div className={`tab-pane fade ${activeTab === 'sheet' ? 'show active' : ''}`} id="sheet" role="tabpanel">
                    <div className="product_d_table">
                        <form action="#">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="first_child">Compositions</td>
                                        <td>Polyester</td>
                                    </tr>
                                    <tr>
                                        <td className="first_child">Styles</td>
                                        <td>Girly</td>
                                    </tr>
                                    <tr>
                                        <td className="first_child">Properties</td>
                                        <td>Short Dress</td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                    <div className="product_info_content">
                    <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into Link full ready-to-wear collection in which every item is Link vital part of Link woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to Link range of accessories including shoes, hats, belts and more!</p>
                    </div>
                </div>

                <div className={`tab-pane fade ${activeTab === 'reviews' ? 'show active' : ''}`} id="reviews" role="tabpanel">
                    <div className="product_info_content">
                    <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into Link full ready-to-wear collection in which every item is Link vital part of Link woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to Link range of accessories including shoes, hats, belts and more!</p>

                    </div>
                    <div className="product_info_inner">
                        <div className="product_ratting mb-10">
                            <ul>
                                <li><Link href="#"> <IoStar/> </Link></li>
                                <li><Link href="#"> <IoStar/> </Link></li>
                                <li><Link href="#"> <IoStar/> </Link></li>
                                <li><Link href="#"> <IoStar/> </Link></li>
                                <li><Link href="#"> <IoStar/> </Link></li>
                            </ul>
                            <strong>Posthemes</strong>
                            <p>09/07/2018</p>
                        </div>
                        <div className="product_demo">
                            <strong>demo</strong>
                            <p>That's OK!</p>
                        </div>
                    </div>
                    <div className="product_review_form">
                        <form action="#">
                            <h2>Add Link review</h2>
                            <p>Your email address will not be published. Required fields are marked</p>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="review_comment">Your review</label>
                                    <textarea name="comment" id="review_comment"></textarea>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <label htmlFor="author">Name</label>
                                    <input id="author" type="text" />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="text" />
                                </div>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabsComponent;
