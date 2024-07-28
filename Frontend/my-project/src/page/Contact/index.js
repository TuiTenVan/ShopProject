import { Link } from "react-router-dom"
import GoogleMapEmbed from "./GoogleMap"
import { IoAccessibilitySharp, IoCallSharp, IoMailOutline} from "react-icons/io5"

function Contact() {
    return (
        <>
            <div className="breadcrumbs_area other_bread">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <ul>
                                    <li><Link to={"/"}>home</Link></li>
                                    <li>/</li>
                                    <li>contact us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact_message content">
                                <h3>contact us</h3>
                                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                                <ul>
                                    <li><IoAccessibilitySharp/> Address : No 40 Baria Sreet 133/2 NewYork City</li>
                                    <li><IoCallSharp/> Infor@roadthemes.com</li>
                                    <li><IoMailOutline/> 0(1234) 567 890</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="contact_message form">
                                <h3>Tell us your project</h3>
                                <form id="contact-form" method="POST" action="assets/mail.php">
                                    <p>
                                        <label> Your Name (required)</label>
                                        <input name="name" placeholder="Name *" type="text" />
                                    </p>
                                    <p>
                                        <label>  Your Email (required)</label>
                                        <input name="email" placeholder="Email *" type="email" />
                                    </p>
                                    <p>
                                        <label>  Subject</label>
                                        <input name="subject" placeholder="Subject *" type="text" />
                                    </p>
                                    <div className="contact_textarea">
                                        <label>  Your Message</label>
                                        <textarea placeholder="Message *" name="message" className="form-control2" ></textarea>
                                    </div>
                                    <button type="submit"> Send</button>
                                    <p className="form-messege"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div classNameName="contact_map">
                <div classNameName="container-fluid">
                    <div classNameName="row">
                        <div classNameName="col-12">
                            <div classNameName="map-area">
                                <GoogleMapEmbed />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact