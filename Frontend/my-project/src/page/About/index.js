import { Link } from "react-router-dom"
import "./About.css"
import CounterUpSection from "./CounterUpSection"

function About() {
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
                                    <li>about us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about_content">
                                <h1>Welcome To Reid Store!</h1>
                                <p> Quibusdam perspiciatis pariatur magnam ducimus excepturi error libero provident animi laboriosam maiores ad explicabo ea laudantium nostrum dolor distinctio, quas fugiat doloribus, sit, possimus obcaecati ab quo vel commodi eum. Laudantium libero, voluptate rerum sunt hic,</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse numquam blanditiis quos, fuga, aspernatur doloribus expedita, soluta dolore cumque.</p>
                                <div className="view__work">
                                    <a href="#">view work </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about_thumb">
                                <img src="/img/about/about1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CounterUpSection/>

            <div className="about_progressbar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="progressbar_inner">
                                <h2>We have Skills to show</h2>
                                <div className="progress_skill one">
                                    <div className="progress">
                                        <div className="progress-bar about_prog wow" data-wow-duration="0.8s" data-wow-delay=".3s" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                            <span className="progress_persent">HTML/CSS</span>
                                        </div>
                                    </div>
                                    <span className="progress_discount">60%</span>
                                </div>
                                <div className="progress_skill two">
                                    <div className="progress">
                                        <div className="progress-bar about_prog wow" data-wow-duration="0.8s" data-wow-delay=".5s" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                            <span className="progress_persent">Ecommerce Theme</span>
                                        </div>
                                    </div>
                                    <span className="progress_discount">90%</span>
                                </div>
                                <div className="progress_skill three">
                                    <div className="progress">
                                        <div className="progress-bar about_prog wow" data-wow-duration="0.8s" data-wow-delay=".7s" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                            <span className="progress_persent">Typography</span>
                                        </div>
                                    </div>
                                    <span className="progress_discount">70%</span>
                                </div>
                                <div className="progress_skill four">
                                    <div className="progress">
                                        <div className="progress-bar about_prog wow" data-wow-duration="0.8s" data-wow-delay=".9s" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                            <span className="progress_persent">Branding</span>
                                        </div>
                                    </div>
                                    <span className="progress_discount">80%</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about__img">
                                <img src="/img/about/about2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default About