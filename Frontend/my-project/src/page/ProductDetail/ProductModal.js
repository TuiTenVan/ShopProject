import React from 'react';
import { Link } from 'react-router-dom';
import { Select } from 'antd';
import 'antd/dist/reset.css'; // Import CSS for Ant Design
import ProductDetailsTab from './ProductImage';
import { IoLogoFacebook, IoLogoGoogle, IoLogoLinkedin, IoLogoPinterest, IoLogoTwitter } from 'react-icons/io5';

const { Option } = Select;

function Modal({ isVisible, hideModal }) {
    if (!isVisible) {
        return null;
    }

    return (
        <>
            <div className="modal-overlay"></div> 
            <div className="modal fade show" id="modal_box" tabIndex="-1" role="dialog" aria-hidden="true" style={{ display: 'block', zIndex: 1050 }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={hideModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal_body">
                            <div className="container">
                                <div className="row">
                                   <ProductDetailsTab/>
                                    <div className="col-lg-7 col-md-7 col-sm-12">
                                        <div className="modal_right">
                                            <div className="modal_title mb-10">
                                                <h2>Handbag feugiat</h2>
                                            </div>
                                            <div className="modal_price mb-10">
                                                <span className="new_price">$64.99</span>
                                                <span className="old_price">$78.99</span>
                                            </div>
                                            <div className="modal_description mb-15">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam, reiciendis maiores quidem aperiam, rerum vel recusandae.</p>
                                            </div>
                                            <div className="variants_selects">
                                                <div className="variants_size">
                                                    <h2>Size</h2>
                                                    <Select defaultValue="1" className="select_option">
                                                        <Option value="1">S</Option>
                                                        <Option value="2">M</Option>
                                                        <Option value="3">L</Option>
                                                        <Option value="4">XL</Option>
                                                        <Option value="5">XXL</Option>
                                                    </Select>
                                                </div>
                                                <div className="variants_color">
                                                    <h2>Color</h2>
                                                    <Select defaultValue="1" className="select_option">
                                                        <Option value="1">Purple</Option>
                                                        <Option value="2">Violet</Option>
                                                        <Option value="3">Black</Option>
                                                        <Option value="4">Pink</Option>
                                                        <Option value="5">Orange</Option>
                                                    </Select>
                                                </div>
                                                <div className="modal_add_to_cart">
                                                    <form action="#">
                                                        <input min="0" max="100" step="2" defaultValue="1" type="number" />
                                                        <button type="submit">Add to cart</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="modal_social">
                                                <h2>Share this product</h2>
                                                <ul>
                                                    <li className="facebook"><Link to="#"><IoLogoFacebook/></Link></li>
                                                    <li className="twitter"><Link to="#"><IoLogoTwitter/></Link></li>
                                                    <li className="pinterest"><Link to="#"><IoLogoPinterest/></Link></li>
                                                    <li className="google-plus"><Link to="#"><IoLogoGoogle/></Link></li>
                                                    <li className="linkedin"><Link to="#"><IoLogoLinkedin/></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
