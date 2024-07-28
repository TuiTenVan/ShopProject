import { IoLogoFacebook, IoLogoGoogle, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <>
  <footer className="footer_widgets other_widgets">
        <div className="footer_top">
            <div className="container">
                <div className="footer_top_inner">    
                    <div className="row">
                        <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                            <div className="widgets_container">
                                <h3>Information</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li><Link href="about.html">About Us</Link></li>
                                        <li><Link href="#">Delivery Information</Link></li>
                                        <li><Link href="privacy-policy.html">Privacy Policy</Link></li>
                                        <li><Link href="#">Terms & Conditions</Link></li>
                                        <li><Link href="contact.html">Contact Us</Link></li>
                                        <li><Link href="#">Returns</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                            <div className="widgets_container">
                                <h3>Extras</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li><Link href="#">Brands</Link></li>
                                        <li><Link href="#">Gift Certificates</Link></li>
                                        <li><Link href="#">Affiliate</Link></li>
                                        <li><Link href="#">Specials</Link></li>
                                        <li><Link href="contact.html">Site Map</Link></li>
                                        <li><Link href="my-account.html">My Account</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="widgets_container contact_us">
                                <h3>Contact Us</h3>
                                <div className="footer_contact">
                                    <p>Address: 6688 Princess Road, London, Greater London BAS 23JK, UK</p>
                                    <p>Phone: <Link href="tel:+(+012)800456789-987">(+012) 800 456 789 - 987</Link> </p>
                                    <p>Email: demo@example.com</p>
                                    <ul>
                                        <li><Link href="#" title="Twitter"><IoLogoTwitter/></Link></li>
                                        <li><Link href="#" title="google-plus"><IoLogoGoogle/></Link></li>
                                        <li><Link href="#" title="facebook"><IoLogoFacebook/></Link></li>
                                        <li><Link href="#" title="youtube"><IoLogoYoutube/></Link></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="widgets_container newsletter">
                                <h3>Join Our Newsletter Now</h3>
                                <div className="newleter-content">
                                    <p>Exceptional quality. Ethical factories. Sign up to enjoy free U.S. shipping and returns on your first order.</p>
                                    <div className="subscribe_form">
                                        <form id="mc-form" className="mc-form footer-newsletter" >
                                            <input id="mc-email" type="email" autocomplete="off" placeholder="Enter you email address here..." />
                                            <button id="mc-submit">Subscribe !</button>
                                        </form>
                                 
                                        <div className="mailchimp-alerts text-centre">
                                            <div className="mailchimp-submitting"></div>
                                            <div className="mailchimp-success"></div>
                                            <div className="mailchimp-error"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
        <div className="footer_bottom">
            <div className="container">
               <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="copyright_area">
                            <p> &copy; 2024 <strong> </strong> Mede with ❤️ by <strong>Sudo</strong></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="footer_custom_links">
                            <ul>
                                <li><Link href="#">Order History</Link></li>
                                <li><Link href="wishlist.html">Wish List</Link></li>
                                <li><Link href="#">Newsletter</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}

export default Footer;